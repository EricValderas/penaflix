   var swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      
    var ImgPena1 = document.getElementById("imgPena1");
    var ImgPena2 = document.getElementById("imgPena2");
    var ImgPena3 = document.getElementById("imgPena3");
    var ImgPena4 = document.getElementById("imgPena4");
    var ImgPena5 = document.getElementById("imgPena5");
    var ImgPena6 = document.getElementById("imgPena6");
    var ImgPena7 = document.getElementById("imgPena7");
    var ImgPena8 = document.getElementById("imgPena8");
    var ImgPena9 = document.getElementById("imgPena9");
    var ImgPena10 = document.getElementById("imgPena10");
    var ImgPena11 = document.getElementById("imgPena11");
    var ImgPena12 = document.getElementById("imgPena12");
    var ImgPena13 = document.getElementById("imgPena13");
    var ImgPena14 = document.getElementById("imgPena14");

    var removePena1 = document.getElementById("reiniciarPeli1");
    var removePena2 = document.getElementById("reiniciarPeli2");
    var removePena3 = document.getElementById("reiniciarPeli3");
    var removePena4 = document.getElementById("reiniciarPeli4");
    var removePena5 = document.getElementById("reiniciarPeli5");
    var removePena6 = document.getElementById("reiniciarPeli6");
    var removePena7 = document.getElementById("reiniciarPeli7");
    var removePena8 = document.getElementById("reiniciarPeli8");
    var removePena9 = document.getElementById("reiniciarPeli9");
    var removePena10 = document.getElementById("reiniciarPeli10");
    var removePena11 = document.getElementById("reiniciarPeli11");
    var removePena12 = document.getElementById("reiniciarPeli12");
    var removePena13 = document.getElementById("reiniciarPeli13");
    var removePena14 = document.getElementById("reiniciarPeli14");

   
   document.getElementById("imgPenaflix").onclick = function() { functionImgPenaflix() }; 


      document.getElementById("imgPena1").onclick = function() { functionImgPena1() }; 
      document.getElementById("imgPena2").onclick = function() { functionImgPena2() }; 
      document.getElementById("imgPena3").onclick = function() { functionImgPena3() }; 
      document.getElementById("imgPena4").onclick = function() { functionImgPena4() }; 
      document.getElementById("imgPena5").onclick = function() { functionImgPena5() }; 
      document.getElementById("imgPena6").onclick = function() { functionImgPena6() }; 
      document.getElementById("imgPena7").onclick = function() { functionImgPena7() }; 
      document.getElementById("imgPena8").onclick = function() { functionImgPena8() }; 
      document.getElementById("imgPena9").onclick = function() { functionImgPena9() }; 
      document.getElementById("imgPena10").onclick = function() { functionImgPena10() }; 
      document.getElementById("imgPena11").onclick = function() { functionImgPena11() };
      document.getElementById("imgPena12").onclick = function() { functionImgPena12() }; 
      document.getElementById("imgPena13").onclick = function() { functionImgPena13() };
      document.getElementById("imgPena14").onclick = function() { functionImgPena14() };

      document.getElementById("reiniciarPeli1").onclick = function() { functionReiniciarPena1() }; 
      document.getElementById("reiniciarPeli2").onclick = function() { functionReiniciarPena2() }; 
      document.getElementById("reiniciarPeli3").onclick = function() { functionReiniciarPena3() }; 
      document.getElementById("reiniciarPeli4").onclick = function() { functionReiniciarPena4() }; 
      document.getElementById("reiniciarPeli5").onclick = function() { functionReiniciarPena5() }; 
      document.getElementById("reiniciarPeli6").onclick = function() { functionReiniciarPena6() }; 
      document.getElementById("reiniciarPeli7").onclick = function() { functionReiniciarPena7() }; 
      document.getElementById("reiniciarPeli8").onclick = function() { functionReiniciarPena8() }; 
      document.getElementById("reiniciarPeli9").onclick = function() { functionReiniciarPena9() }; 
      document.getElementById("reiniciarPeli10").onclick = function() { functionReiniciarPena10() }; 
      document.getElementById("reiniciarPeli11").onclick = function() { functionReiniciarPena11() };
      document.getElementById("reiniciarPeli12").onclick = function() { functionReiniciarPena12() }; 
      document.getElementById("reiniciarPeli13").onclick = function() { functionReiniciarPena13() };
      document.getElementById("reiniciarPeli14").onclick = function() { functionReiniciarPena14() }; 


      document.addEventListener("DOMContentLoaded", function() {
  
      ImgPena1.style.border=localStorage.getItem("SaveImgPenaBorder1");
      ImgPena2.style.border=localStorage.getItem("SaveImgPenaBorder2");
      ImgPena3.style.border=localStorage.getItem("SaveImgPenaBorder3");
      ImgPena4.style.border=localStorage.getItem("SaveImgPenaBorder4");
      ImgPena5.style.border=localStorage.getItem("SaveImgPenaBorder5");

      ImgPena6.style.border=localStorage.getItem("SaveImgPenaBorder6");
      ImgPena7.style.border=localStorage.getItem("SaveImgPenaBorder7");
      ImgPena8.style.border=localStorage.getItem("SaveImgPenaBorder8");
      ImgPena9.style.border=localStorage.getItem("SaveImgPenaBorder9");
      ImgPena10.style.border=localStorage.getItem("SaveImgPenaBorder10");
      ImgPena11.style.border=localStorage.getItem("SaveImgPenaBorder11");
      ImgPena12.style.border=localStorage.getItem("SaveImgPenaBorder12");
      ImgPena13.style.border=localStorage.getItem("SaveImgPenaBorder13");
      ImgPena14.style.border=localStorage.getItem("SaveImgPenaBorder14");


 
});     

 
 
function functionImgPenaflix() {window.location.href = "https://ericvalderas.github.io/penaflix/";}

function functionImgPena1() {
  window.location.href = "https://e.pcloud.link/publink/show?code=XZlT577ZdVpyYpiF8RjOD7sB0zXWvyoT1WPy";
  ImgPena1.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder1", "5px solid red");
}
function functionImgPena2() {
  window.location.href = "https://e.pcloud.link/publink/show?code=XZl4R77ZpQN0vbyMBv5982ajufJUT5GJUlXk";
  ImgPena2.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder2", "5px solid red");
}
function functionImgPena3() {
  //google drive ivychuela
  window.location.href = "https://drive.google.com/file/d/1RdSbdenX4vbTv1g-5XoCfyXsZL5G5BjT/view?usp=drive_link";
  ImgPena3.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder3", "5px solid red");
}
function functionImgPena4() {
  window.location.href = "https://drive.google.com/file/d/1E-8mW98ILcmiG0g2JtHfU7jKPvLTICoN/view?usp=drive_link";
  ImgPena4.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder4", "5px solid red");
}
function functionImgPena5() {
  //p clud wallace and gromit ericvdev 
  window.location.href = "https://e.pcloud.link/publink/show?code=XZjQ577ZrmMRTGLFtcujGBbBrEAE05mMlaC7";
  ImgPena5.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder5", "5px solid red");
}
function functionImgPena6() {
  window.location.href = "https://e.pcloud.link/publink/show?code=XZ93z77ZrpBJJBuwVMLBSdFFBRVQzfTYJwMX";
  ImgPena6.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder6", "5px solid red");
}
function functionImgPena7() {
  //https://icedrive.net/s/46yjkZbaTWCwVxxYYwi7VhtGPuwa
  //https://e.pcloud.link/publink/show?code=XZuGz77ZVpBOHAq9T1FTgJhf2jIHYJgSoHGV
  window.location.href ="https://icedrive.net/s/46yjkZbaTWCwVxxYYwi7VhtGPuwa";
  ImgPena7.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder7", "5px solid red");
}
function functionImgPena8() {
  window.location.href = "https://e.pcloud.link/publink/show?code=XZcW577ZXTjS7g53RGkEJUBGPxhRBzIaQBUy";
  ImgPena8.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder8", "5px solid red");
}
function functionImgPena9() {
  window.location.href = "https://nervouswreckradio.online/Pelis/2.mkv";
  ImgPena9.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder9", "5px solid red");
}
function functionImgPena10() {
  window.location.href = "https://penaflix.es/Web/Pelis/1.mkv";
  ImgPena10.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder10", "5px solid red");
}
function functionImgPena11() {
  window.location.href = "https://penaflix.es/Kids/1.mkv";
  ImgPena11.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder11", "5px solid red");
}
function functionImgPena12() {
  window.location.href = "https://e.pcloud.link/publink/show?code=XZ6fV77ZueLW3f0dG2j64fPp8qgGp5X57QeV";
  ImgPena12.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder12", "5px solid red");
}
function functionImgPena13() {
  window.location.href = "https://nervouswreckradio.online/Pelis/3.mkv";;
  ImgPena13.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder13", "5px solid red");
}
function functionImgPena14() {
  window.location.href = "https://penaflix.es/Pelis/4.mkv";
  ImgPena14.style.border="5px solid red";
  localStorage.setItem("SaveImgPenaBorder14", "5px solid red");
}

 function functionReiniciarPena1(){
    localStorage.removeItem("SaveImgPenaBorder1");
    ImgPena1.style.border="0px solid red";
    removePena1.innerHTML = "Reiniciado";

 }
 function functionReiniciarPena2(){
    localStorage.removeItem("SaveImgPenaBorder2");
    ImgPena2.style.border="0px solid red";
    removePena2.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena3(){
    localStorage.removeItem("SaveImgPenaBorder3");
    ImgPena3.style.border="0px solid red";
    removePena3.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena4(){
    localStorage.removeItem("SaveImgPenaBorder4");
    ImgPena4.style.border="0px solid red";
    removePena4.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena5(){
    localStorage.removeItem("SaveImgPenaBorder5");
    ImgPena5.style.border="0px solid red";
    removePena5.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena6(){
    localStorage.removeItem("SaveImgPenaBorder6");
    ImgPena6.style.border="0px solid red";
    removePena6.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena7(){
    localStorage.removeItem("SaveImgPenaBorder7");
    ImgPena7.style.border="0px solid red";
    removePena7.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena8(){
    localStorage.removeItem("SaveImgPenaBorder8");
    ImgPena8.style.border="0px solid red";
    removePena8.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena9(){
    localStorage.removeItem("SaveImgPenaBorder9");
    ImgPena9.style.border="0px solid red";
    removePena9.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena10(){
    localStorage.removeItem("SaveImgPenaBorder10");
    ImgPena10.style.border="0px solid red";
    removePena10.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena11(){
    localStorage.removeItem("SaveImgPenaBorder11");
    ImgPena11.style.border="0px solid red";
    removePena11.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena12(){
    localStorage.removeItem("SaveImgPenaBorder12");
    ImgPena12.style.border="0px solid red";
    removePena12.innerHTML = "Reiniciado";
 }

 function functionReiniciarPena13(){
    localStorage.removeItem("SaveImgPenaBorder13");
    ImgPena13.style.border="0px solid red";
    removePena13.innerHTML = "Reiniciado";
 }
 function functionReiniciarPena14(){
    localStorage.removeItem("SaveImgPenaBorder14");
    ImgPena14.style.border="0px solid red";
    removePena14.innerHTML = "Reiniciado";
 }
 







       
 


