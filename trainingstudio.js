// let firstleft_image=document.getElementById('firstleft_image')
// let firstleft_h2=document.getElementById('firstleft_h2')
// let firstleft_p=document.getElementById('firstleft_p')
// let firstp = document.getElementById("firstp")
// let secondp = document.getElementById("secondp")
// let thirdp = document.getElementById("thirdp")
// let fourthp = document.getElementById("fourthp")



let firstp=document.getElementById("firstp")
let secondp=document.getElementById("secondp")
let thirdp=document.getElementById("thirdp")
let fourthp=document.getElementById("fourthp")
let firstleft_image=document.getElementById("firstleft_image")
let firstleft_h2=document.getElementById("firstleft_h2")
let firstleft_p=document.getElementById("firstleft_p")



function firsttraining() {

    firstleft_image.src="./image/training-image-01.jpg"
    firstleft_h2.innerHTML="First Training Class"
    firstleft_p.innerHTML="Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br> Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam."
}
























// function firsttraining() {
//     firstleft_image.src='./image/training-image-01.jpg'
//     firstleft_h2.innerHTML="First Training Class"
//     firstleft_p.innerHTML="Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br> Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida <br> aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam."
//     firstp.style.color='#ed563b'
//     secondp.style.color="black"
//     thirdp.style.color="black"
//     fourthp.style.color="black"
// }
function secondtraining() {
    firstleft_image.src='./image/training-image-02.jpg'
    firstleft_h2.innerHTML= "Second Training Class"
    firstleft_p.innerHTML="Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit.<br> Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at <br> mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis <br> dis parturient montes, nascetur ridiculus mus."
    firstp.style.color='black '
    secondp.style.color="#ed563b"
    thirdp.style.color="black"
    fourthp.style.color="black"
}
function thirdtraining() {
    firstleft_image.src='./image/training-image-03.jpg'
    firstleft_h2.innerHTML= "Third Training Class"
    firstleft_p.innerHTML="Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. <br> Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id <br> felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."
    firstp.style.color=' black'
    secondp.style.color="black"
    thirdp.style.color="#ed563b"
    fourthp.style.color="black"
}

function fourthtraining() {
    firstleft_image.src='./image/training-image-04.jpg'
    firstleft_h2.innerHTML= "Fourth Training Class"
    firstleft_p.innerHTML="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  <br> Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum <br> commodo et."
    firstp.style.color=' black'
    secondp.style.color="black"
    thirdp.style.color="black"
    fourthp.style.color="#ed563b"
}
let fit1 =document.getElementById("fit1")
let fit2 =document.getElementById("fit2")
let mus1 =document.getElementById("mus1")
let mus2 =document.getElementById("mus2")
let body1 =document.getElementById("body1")
let body2 =document.getElementById("body2")
let yoga1 =document.getElementById("yoga1")
let yoga2 =document.getElementById("yoga2")
let adv1 =document.getElementById("adv1")
let adv2 =document.getElementById("adv2")

function monday() {

    fit1.innerHTML="10:00AM - 11:30AM"
    fit2.innerHTML=" "
    mus1.innerHTML=" "
    mus2.innerHTML=" "
    body1.innerHTML=" "
    body2.innerHTML="2:00PM - 3:30PM "
    yoga1.innerHTML=" "
    yoga2.innerHTML=" "
    adv.innerHTML=" "
    adv2.innerHTML=" "


    
}

function tuesday() {

    fit1.innerHTML=""
    fit2.innerHTML=" 2:00PM - 3:30PM"
    mus1.innerHTML=" "
    mus2.innerHTML=" "
    body1.innerHTML="10:00AM - 11:30AM "
    body2.innerHTML=" "
    yoga1.innerHTML=" "
    yoga2.innerHTML=" "
    adv.innerHTML=" "
    adv2.innerHTML=" "


    
}

function wednesday() {

    fit1.innerHTML=" "
    fit2.innerHTML=" "
    mus1.innerHTML="10:00AM - 11:30AM"
    mus2.innerHTML=" "
    body1.innerHTML=" "
    body2.innerHTML="  2:00PM - 3:30PM "
    yoga1.innerHTML=" "
    yoga2.innerHTML=" "
    adv.innerHTML=" "
    adv2.innerHTML=""


    
}

function thursday() {

    fit1.innerHTML=" "
    fit2.innerHTML=" "
    mus1.innerHTML=" "
    mus2.innerHTML="2:00PM - 3:30PM "
    body1.innerHTML=" "
    body2.innerHTML=" "
    yoga1.innerHTML=" 10:00AM - 11:30AM"
    yoga2.innerHTML=" "
    adv.innerHTML=" "
    adv2.innerHTML="  "


    
}

function friday() {

    fit1.innerHTML=" "
    fit2.innerHTML=" "
    mus1.innerHTML="10:00AM - 11:30AM "
    mus2.innerHTML=" "
    body1.innerHTML=" "
    body2.innerHTML=""
    yoga1.innerHTML=" "
    yoga2.innerHTML="2:00PM - 3:30PM "
    adv.innerHTML=" "
    adv2.innerHTML=" "


    
}
function switchMode() {
    let x =document.body
    x.classList.toggle("dark")
    
}

// function sticky() {
//     let nav_container = document.querySelector('.nav_container')
//    let  stickypoint= 800

//     if (window.pageYOffset > stickypoint) {
//         nav_container.classList.add('sticky')
        
//     } else {
//         nav_container.classList.remove('sticky')
        
//     }
    
// }
// window.addEventListener("scroll",sticky)


function sticky() {
    let nav_container=document.querySelector(".nav_container")
    stickypoint=700

    if (window.pageYOffset >stickypoint) {nl
        nav_container.classList.add("sticky")
    }else{
     nav_container.classList.remove("sticky")
    }
}
window.addEventListener("scroll",sticky)