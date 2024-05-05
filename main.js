function startClassification(){
    navigator.mediaDevices.getUserMedia ({audio: true}) ;
    Classification = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/GuU4VXmly/.json', modelReady);
    }
    function modelReady(){
    Classifier.Classify(gotResults);
        }
    function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) +1;
        random_number_g = Math.floor(Math.random()*255) +1;
        random_number_b = Math.floor(Math.random()*255) +1;
    
        document.getElementById("result_label").innerHTML ='I can hear-'+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuacy-'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb(" +random_number_r+","+random_number_g+","+random_number_r;
    
        img=document.getElementById('alien1');
        img1=document.getElementById('alien2');
        img2=document.getElementById('alien3');
        img3=document.getElementById('alien4');
    
    }
}
         