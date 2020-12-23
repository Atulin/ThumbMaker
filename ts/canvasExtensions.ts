interface CanvasRenderingContext2D {
    Circle(x: number, y: number, radius: number)
}

CanvasRenderingContext2D.prototype.Circle = function (x: number, y: number, radius: number) {
    this.arc(x, y, radius, 0, 360, false);
}
