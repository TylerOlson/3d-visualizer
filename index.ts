let c: HTMLCanvasElement = document.getElementById("mainCanvas") as HTMLCanvasElement;
let ctx = c.getContext("2d");

let d = 1;

let points2D: Vector2[] = [];
let points3D: Vector3[] = [];
points3D.push(new Vector3(100, 100, 1));
points3D.push(new Vector3(100, 300, 1));
points3D.push(new Vector3(300, 100, 1));
points3D.push(new Vector3(300, 300, 1));

points3D.push(new Vector3(100, 100, 2));
points3D.push(new Vector3(100, 300, 1.5));
points3D.push(new Vector3(300, 100, 2));
points3D.push(new Vector3(300, 300, 1.5));

function convertPoints() {
    points2D = [];
    for (let vector of points3D) {
        let newVector = Vector3ToVector2(vector);
        points2D.push(newVector);
    }
}

function Vector3ToVector2(point: Vector3) {
    let projection = d / point.z;
    let newVector = new Vector2(point.x * projection, point.y * projection);
    return newVector;
}

function connectAllPoints() {
    connectPoints(0, 1, points2D);    
    connectPoints(1, 3, points2D);    
    connectPoints(2, 3, points2D);    
    connectPoints(0, 2, points2D);

    connectPoints(4, 5, points2D);    
    connectPoints(5, 7, points2D);    
    connectPoints(6, 7, points2D);    
    connectPoints(4, 6, points2D);

    connectPoints(1, 5, points2D);    
    connectPoints(2, 6, points2D);    
    connectPoints(3, 7, points2D);    
    connectPoints(0, 4, points2D);    

}

function connectPoints(point1: number, point2: number, points: Vector2[]) {
    ctx.beginPath();
    ctx.moveTo(points[point1].x, points[point1].y);
    ctx.lineTo(points[point2].x, points[point2].y);
    ctx.stroke();
}

function draw() {
    ctx.fillStyle = "#000000";
    ctx.clearRect(0, 0, c.width, c.height);
    convertPoints();

    for (let i = 0; i < points2D.length; i++) {
        ctx.fillRect(points2D[i].x, points2D[i].y, 5, 5);
    }

    connectAllPoints();
    requestAnimationFrame(draw);
}


convertPoints();
draw();

const dSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("d-slider");
dSlider.addEventListener("input", function(){
    d = +dSlider.value;
    document.getElementById("d-slider-label").innerHTML = "Distance (d) (" + dSlider.value + ")";
});
