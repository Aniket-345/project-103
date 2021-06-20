//https://teachablemachine.withgoogle.com/models/6WP9lggqM/
Webcam.set({
    width: 400,
    height:300,
    image_format:"jpeg",
    jpeg_quality: 110
})
camara= document.getElementById("cam");
Webcam.attach(camara)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='capture_image' src="+data_uri+">"
        
    })
}
console.log(ml5.version)
image_classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6WP9lggqM/model.json",model_loaded)
function model_loaded(){
    console.log("model loded")
}