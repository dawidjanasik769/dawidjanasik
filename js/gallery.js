/*Name this external file gallery.js*/


        function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image

    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    document.getElementById('image123').innerHTML=previewPic.alt;
    document.querySelector('#image123').style.backgroundImage="url('"+previewPic.src+"')";
    }

    /*function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
   
        document.querySelector('#image123').style.backgroundImage="url('')";
        document.querySelector('#image123').innerHTML="nakieruj następny";
    }

 */



 setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const pokeHand = document.querySelector('[data-poke-hand]');
const eyerHand = document.querySelector('[data-eyer-hand]');
const eyelHand = document.querySelector('[data-eyel-hand]');




function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
    const pokeRatio = currentDate.getSeconds()/60;
    const eyerRatio = currentDate.getSeconds()/60;
    const eyelRatio = currentDate.getSeconds()/60;


    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
    setRotation(eyerHand, eyerRatio);
    setRotation(eyelHand, eyelRatio);
    setRotation(pokeHand, pokeRatio);


}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();