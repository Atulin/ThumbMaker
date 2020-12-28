import './canvasExtensions';

let canvas : HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');

const guide = 80;

const circleRadius = (guide * 3) / 2;

const font = `bold ${circleRadius * 1.6}px sans-serif`;
const posX = circleRadius + 5;
const posY = (canvas.height - circleRadius) + 10 - 5;

// Editable variables
let text = '00';
let bgCol = '#0000ff';
let bg = null;


// Set up inputs
// Number in the corner
document.getElementById('number').addEventListener('change', e => {
    text = (e.currentTarget as HTMLInputElement).value.toString();
    draw();
});
// Colours
const picker = document.getElementById('color') as HTMLInputElement;
const hexCol = document.getElementById('hex') as HTMLInputElement;
picker.addEventListener('change', e => {
    bgCol = (e.currentTarget as HTMLInputElement).value;
    hexCol.value = bgCol;
    draw();
});
hexCol.addEventListener('keyup', e => {
    let val = (e.currentTarget as HTMLInputElement).value;
    if (!(/^#[0-9A-F]{6}$/i.test(val))) return;
    bgCol = picker.value = val;
    draw();
});
// Background image
document.getElementById('background').addEventListener('change', e => {
    let url = URL.createObjectURL((e.target as HTMLInputElement).files[0]);
    bg = new Image();
    bg.src = url;
    bg.onload = function() {
        draw();
    }
});
// Download
document.getElementById('download').addEventListener('click', _ => {
    let title = (document.getElementById('title') as HTMLInputElement).value ?? 'file';
    let link = document.createElement('a');
    link.download = `${title}-${text}.jpg`;
    link.href = canvas.toDataURL('image/jpeg')
    link.click();
});


function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    if (bg !== null) {
        let scale = Math.max(canvas.width / bg.width, canvas.height / bg.height);
        ctx.drawImage(
            bg,
            ((canvas.width + guide) / 2) - (bg.width / 2) * scale,
            (canvas.height) / 2 - guide - (bg.height / 2) * scale,
            bg.width * scale,
            bg.height * scale
        );
    }

    // Draw borders
    // Set up fill and shadows
    ctx.fillStyle = bgCol;
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 20;
    // Draw the borders
    ctx.fillRect(0, 0, guide, canvas.height);
    ctx.fillRect(0, canvas.height - guide, canvas.width, guide);
    // Reset shadows and draw the vertical border again to cover a part of a shadow in the corner
    ctx.shadowColor = 'none';
    ctx.shadowBlur = 0;
    ctx.fillRect(0, 0, guide, canvas.height);

    // Set up font
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text shadow behind the circle
    ctx.fillStyle = 'black';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 50;
    ctx.fillText(text, posX, posY);

    ctx.shadowColor = 'none';
    ctx.shadowBlur = 0;

    // Draw circle
    ctx.beginPath();
    ctx.Circle(circleRadius + 5, (canvas.height - circleRadius) - 5, circleRadius);
    ctx.fillStyle = bgCol;
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 20;
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = 'none';
    ctx.shadowBlur = 0;

    // Set up the background text
    ctx.lineWidth = 20;
    ctx.strokeStyle = bgCol;
    ctx.strokeText(text, posX, posY);

    // Set up the text and its shadow
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 20;
    ctx.fillText(text, posX, posY);
}

draw();
