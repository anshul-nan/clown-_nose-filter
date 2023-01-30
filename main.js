function preload()
{
clown_nose=loadImage('https://i.postimg.cc/L88QX8P7/image-removebg-preview.png')
}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.position(510,250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initializing');
}
function draw(){
     image(video,0,0,300,300);
     image(clown_nose,nose_x,nose_y,30,30);
}
function take_snapshot(){
    save('my_picture.jpg')
}

nose_x = 0;
nose_y = 0;
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x-18;
        console.log('nose x = '+nose_x);
        nose_y = results[0].pose.nose.y-9;
        console.log('nose_y = '+ nose_y);
    }
}