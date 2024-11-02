function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
let circularProgress1 = document.querySelector(".circular-progress-1"),
    progressValue1 = document.querySelector(".progress-value-1");

let progressStartValue1 = 0,
    progressEndValue1 = 95, 
    speed1 = 100;

let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#26232a ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }     
    console.log(progressStartValue1)
},speed1); 
let circularProgress2 = document.querySelector(".circular-progress-2"),
    progressValue2 = document.querySelector(".progress-value-2");

let progressStartValue2 = 0,
    progressEndValue2 = 91, 
    speed2 = 100;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#26232a ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }     
    console.log(progressStartValue2)
},speed2); 

let circularProgress3 = document.querySelector(".circular-progress-3"),
    progressValue3 = document.querySelector(".progress-value-3");

let progressStartValue3 = 0,
    progressEndValue3 = 85, 
    speed3 = 100;

let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#26232a ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }     
    console.log(progressStartValue3)
},speed3); 
