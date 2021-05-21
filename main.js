function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas1 = createCanvas(300, 300);
    canvas1.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', got_poses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    //circle(nose_x, nose_y, 30);
    //fill(0,0,0);
    image(clown_nose, nose_x, nose_y, 30, 30);
    stroke(0, 0, 0);
}

function Take_snapshot() {
    save('yourimage.png');
}

function model_loaded() {
    console.log("model loaded");

}
nose_x = 0;
nose_y = 0;

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}