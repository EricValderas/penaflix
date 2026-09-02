 var swiper2 = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    var ImgSerie1 = document.getElementById("imgSerie1");
    var ImgSerie2 = document.getElementById("imgSerie2");
    var ImgSerie3 = document.getElementById("imgSerie3");
    var ImgSerie4 = document.getElementById("imgSerie4");
    var ImgSerie5 = document.getElementById("imgSerie5");
    var ImgSerie6 = document.getElementById("imgSerie6");
    var ImgSerie7 = document.getElementById("imgSerie7");
    var ImgSerie8 = document.getElementById("imgSerie8");
    var ImgSerie9 = document.getElementById("imgSerie9");
    var ImgSerie10 = document.getElementById("imgSerie10");

    var ImgArcher1 = document.getElementById("imgArcher1");
    var ImgArcher2 = document.getElementById("imgArcher2");
    var ImgArcher3 = document.getElementById("imgArcher3");
    var ImgArcher4 = document.getElementById("imgArcher4");
    var ImgArcher5 = document.getElementById("imgArcher5");
    var ImgArcher6 = document.getElementById("imgArcher6");
    var ImgArcher7 = document.getElementById("imgArcher7");
    var ImgArcher8 = document.getElementById("imgArcher8");

    var ImgTed1 = document.getElementById("imgTed1");
    var ImgTed2 = document.getElementById("imgTed2");
    var ImgTed3 = document.getElementById("imgTed3");
    var ImgTed4 = document.getElementById("imgTed4");
    var ImgTed5 = document.getElementById("imgTed5");
    var ImgTed6 = document.getElementById("imgTed6");
    var ImgTed7 = document.getElementById("imgTed7");
    var ImgTed8 = document.getElementById("imgTed8");
    var ImgTed9 = document.getElementById("imgTed9");
    var ImgTed10 = document.getElementById("imgTed10");

    var ASeries = document.getElementById("aSeries");

    var rCS= document.getElementById("reiniciarCapSilo");
    var rCM = document.getElementById("reiniciarCapMuj");
    var rCT = document.getElementById("reiniciarCapTed");

  
    
    
        document.getElementById("imgPenaflix").onclick = function() { functionImgPenaflix() }; 

        document.getElementById("imgSerie1").onclick = function() { functionImgSerie1() }; 
        document.getElementById("imgSerie2").onclick = function() { functionImgSerie2() }; 
        document.getElementById("imgSerie3").onclick = function() { functionImgSerie3() }; 
        document.getElementById("imgSerie4").onclick = function() { functionImgSerie4() }; 
        document.getElementById("imgSerie5").onclick = function() { functionImgSerie5() }; 
        document.getElementById("imgSerie6").onclick = function() { functionImgSerie6() }; 
        document.getElementById("imgSerie7").onclick = function() { functionImgSerie7() }; 
        document.getElementById("imgSerie8").onclick = function() { functionImgSerie8() }; 
        document.getElementById("imgSerie9").onclick = function() { functionImgSerie9() }; 
        document.getElementById("imgSerie10").onclick = function() { functionImgSerie10() };

        document.getElementById("imgArcher1").onclick = function() { functionImgArcher1() }; 
        document.getElementById("imgArcher2").onclick = function() { functionImgArcher2() }; 
        document.getElementById("imgArcher3").onclick = function() { functionImgArcher3() }; 
        document.getElementById("imgArcher4").onclick = function() { functionImgArcher4() }; 
        document.getElementById("imgArcher5").onclick = function() { functionImgArcher5() }; 
        document.getElementById("imgArcher6").onclick = function() { functionImgArcher6() }; 
        document.getElementById("imgArcher7").onclick = function() { functionImgArcher7() }; 
        document.getElementById("imgArcher8").onclick = function() { functionImgArcher8() }; 
        

      document.getElementById("imgTed1").onclick = function() { functionImgTed1() }; 
      document.getElementById("imgTed2").onclick = function() { functionImgTed2() }; 
      document.getElementById("imgTed3").onclick = function() { functionImgTed3() }; 
      document.getElementById("imgTed4").onclick = function() { functionImgTed4() }; 
      document.getElementById("imgTed5").onclick = function() { functionImgTed5() }; 
      document.getElementById("imgTed6").onclick = function() { functionImgTed6() }; 
      document.getElementById("imgTed7").onclick = function() { functionImgTed7() }; 
      document.getElementById("imgTed8").onclick = function() { functionImgTed8() }; 
      document.getElementById("imgTed9").onclick = function() { functionImgTed9() };
      document.getElementById("imgTed10").onclick = function() { functionImgTed10() };

      document.getElementById("reiniciarCapSilo").onclick = function() { functionReiniciarCapSilo() }; 
      document.getElementById("reiniciarCapMuj").onclick = function() { functionReiniciarCapMuj() }; 
      document.getElementById("reiniciarCapTed").onclick = function() { functionReiniciarCapTed() }; 

document.addEventListener("DOMContentLoaded", function() {
  
  ImgSerie1.style.border=localStorage.getItem("SaveImgBorder1");
  ImgSerie2.style.border=localStorage.getItem("SaveImgBorder2");
  ImgSerie3.style.border=localStorage.getItem("SaveImgBorder3");
  ImgSerie4.style.border=localStorage.getItem("SaveImgBorder4");
  ImgSerie5.style.border=localStorage.getItem("SaveImgBorder5");
  ImgSerie6.style.border=localStorage.getItem("SaveImgBorder6");
  ImgSerie7.style.border=localStorage.getItem("SaveImgBorder7");
  ImgSerie8.style.border=localStorage.getItem("SaveImgBorder8");
  ImgSerie9.style.border=localStorage.getItem("SaveImgBorder9");
  ImgSerie10.style.border=localStorage.getItem("SaveImgBorder10");

  ImgArcher1.style.border=localStorage.getItem("SaveImgArcherBorder1");
  ImgArcher2.style.border=localStorage.getItem("SaveImgArcherBorder2");
  ImgArcher3.style.border=localStorage.getItem("SaveImgArcherBorder3");
  ImgArcher4.style.border=localStorage.getItem("SaveImgArcherBorder4");
  ImgArcher5.style.border=localStorage.getItem("SaveImgArcherBorder5");
  ImgArcher6.style.border=localStorage.getItem("SaveImgArcherBorder6");
  ImgArcher7.style.border=localStorage.getItem("SaveImgArcherBorder7");
  ImgArcher8.style.border=localStorage.getItem("SaveImgArcherBorder8");


  ImgTed1.style.border=localStorage.getItem("SaveImgTedBorder1");
  ImgTed2.style.border=localStorage.getItem("SaveImgTedBorder2");
  ImgTed3.style.border=localStorage.getItem("SaveImgTedBorder3");
  ImgTed4.style.border=localStorage.getItem("SaveImgTedBorder4");
  ImgTed5.style.border=localStorage.getItem("SaveImgTedBorder5");
  ImgTed6.style.border=localStorage.getItem("SaveImgTedBorder6");
  ImgTed7.style.border=localStorage.getItem("SaveImgTedBorder7");
  ImgTed8.style.border=localStorage.getItem("SaveImgTedBorder8");
  ImgTed9.style.border=localStorage.getItem("SaveImgTedBorder9");
  ImgTed10.style.border=localStorage.getItem("SaveImgTedBorder10");
 
});     
 
function functionImgPenaflix() {window.location.href = "https://ericvalderas.github.io/penaflix/";}

function functionImgSerie1() {
  window.open("https://penaflix.es/Series/S1.mkv");
  ImgSerie1.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder1", "5px solid red");
}
function functionImgSerie2() {
  window.open("https://penaflix.es/Series/S2.mkv");
  ImgSerie2.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder2", "5px solid red");

}
function functionImgSerie3() {
  window.open("https://penaflix.es/Series/S3.mkv");
  ImgSerie3.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder3", "5px solid red");

}
function functionImgSerie4() {
  window.open("https://penaflix.es/Series/S4.mkv");
  ImgSerie4.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder4", "5px solid red");

}
function functionImgSerie5() {
  window.open("https://penaflix.es/Series/S5.mkv");
  ImgSerie5.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder5", "5px solid red");

}
function functionImgSerie6() {
  window.open("https://penaflix.es/Series/S6.mkv");
  ImgSerie6.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder6", "5px solid red");

}
function functionImgSerie7() {
  window.open("https://penaflix.es/Series/S7.mkv");
  ImgSerie7.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder7", "5px solid red");

}
function functionImgSerie8() {
  window.open("https://penaflix.es/Series/S8.mkv");
  ImgSerie8.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder8", "5px solid red");

}
function functionImgSerie9() {
  window.open("https://nervouswreckradio.online/Series/S9.mkv");
  ImgSerie9.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder9", "5px solid red");

}
function functionImgSerie10() {
  window.open("https://nervouswreckradio.online/Series/S10.mkv");
  ImgSerie10.style.border="5px solid red";
  localStorage.setItem("SaveImgBorder10", "5px solid red");

}

// ubicacion serie google drive ivychuela
function functionImgArcher1() {
  window.open("https://drive.google.com/file/d/13ZOBEyS9eFq38AUePN7g3-jQ2RqbF3F9/view?usp=drive_link");
  ImgArcher1.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder1", "5px solid red");
}
function functionImgArcher2() {
  window.open("https://drive.google.com/file/d/1XrrvbQbbxN2MsGvCretMDsWnJLsX8Bi2/view?usp=sharing");
  ImgArcher2.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder2", "5px solid red");
}
function functionImgArcher3() {
  window.open("https://drive.google.com/file/d/1y_bRYH5fd8aYMUIhqvHrIvTgIwh0FhpT/view?usp=sharing");
  ImgArcher3.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder3", "5px solid red");
}
function functionImgArcher4() {
  window.open("https://drive.google.com/file/d/16WmPpt8Z5zfxvHUOw2Fbj5aHe6LxFHv9/view?usp=drive_link");
  ImgArcher4.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder4", "5px solid red");
}
function functionImgArcher5() {
  window.open("https://drive.google.com/file/d/16Ae7LH4OX3leucwIE5vd9TG0G-L6mszb/view?usp=sharing");
  ImgArcher5.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder5", "5px solid red");
}
function functionImgArcher6() {
  window.open("https://drive.google.com/file/d/1VRZQ5XiRzU13zDiR4XO-528pnTGrP-_G/view?usp=sharing");
  ImgArcher6.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder6", "5px solid red");
}
function functionImgArcher7() {
  window.open("https://nervouswreckradio.online/Marian/7.mkv");
  ImgArcher7.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder7", "5px solid red");
}
function functionImgArcher8() {
  window.open("https://nervouswreckradio.online/Marian/8.mkv");
  ImgArcher8.style.border="5px solid red";
  localStorage.setItem("SaveImgArcherBorder8", "5px solid red");
}


function functionImgTed1() {
  window.location.href = "https://penaflix.es/Series/1.mkv";
  ImgTed1.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder1", "5px solid red");
 
}
function functionImgTed2() {
  window.location.href = "https://penaflix.es/Series/2.mkv";
  ImgTed2.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder2", "5px solid red");

}
function functionImgTed3() {
  window.location.href = "https://penaflix.es/Series/3.mkv";
  ImgTed3.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder3", "5px solid red");
}
function functionImgTed4() {
  window.location.href = "https://penaflix.es/Series/4.mkv";
  ImgTed4.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder4", "5px solid red");
}
function functionImgTed5() {
  window.location.href = "https://penaflix.es/Series/5.mkv";
  ImgTed5.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder5", "5px solid red");
}
function functionImgTed6() {
  window.location.href = "https://penaflix.es/Series/6.mkv";
  ImgTed6.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder6", "5px solid red");
}
function functionImgTed7() {
  window.location.href = "https://penaflix.es/Series/7.mkv";
  ImgTed7.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder7", "5px solid red");
}
function functionImgTed8() {
  window.location.href = "https://penaflix.es/Series/8.mkv";
  ImgTed8.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder8", "5px solid red");
}
function functionImgTed9() {
  window.location.href = "https://penaflix.es/Series/9.mkv";
  ImgTed9.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder9", "5px solid red");
}
function functionImgTed10() {
  window.location.href = "https://penaflix.es/Series/10.mkv";
  ImgTed10.style.border="5px solid red";
  localStorage.setItem("SaveImgTedBorder10", "5px solid red");
}

function functionReiniciarCapSilo(){
    localStorage.removeItem("SaveImgPenaBorder1");
    localStorage.removeItem("SaveImgPenaBorder2");
    localStorage.removeItem("SaveImgPenaBorder3");
    localStorage.removeItem("SaveImgPenaBorder4");
    localStorage.removeItem("SaveImgPenaBorder5");
    localStorage.removeItem("SaveImgPenaBorder6");
    localStorage.removeItem("SaveImgPenaBorder7");
    localStorage.removeItem("SaveImgPenaBorder8");
    localStorage.removeItem("SaveImgPenaBorder9");
    localStorage.removeItem("SaveImgPenaBorder10");
    ImgSerie1.style.border="0px solid red";
    ImgSerie2.style.border="0px solid red";
    ImgSerie3.style.border="0px solid red";
    ImgSerie4.style.border="0px solid red";
    ImgSerie5.style.border="0px solid red";
    ImgSerie6.style.border="0px solid red";
    ImgSerie7.style.border="0px solid red";
    ImgSerie8.style.border="0px solid red";
    ImgSerie9.style.border="0px solid red";
    ImgSerie10.style.border="0px solid red";
    rCS.innerHTML = "Reiniciado";
 }

 function functionReiniciarCapMuj(){
    localStorage.removeItem("SaveImgArcherBorder1");
    localStorage.removeItem("SaveImgArcherBorder2");
    localStorage.removeItem("SaveImgArcherBorder3");
    localStorage.removeItem("SaveImgArcherBorder4");
    localStorage.removeItem("SaveImgArcherBorder5");
    localStorage.removeItem("SaveImgArcherBorder6");
    localStorage.removeItem("SaveImgArcherBorder7");
    localStorage.removeItem("SaveImgArcherBorder8");
    
   
    ImgArcher1.style.border="0px solid red";
    ImgArcher2.style.border="0px solid red";
    ImgArcher3.style.border="0px solid red";
    ImgArcher4.style.border="0px solid red";
    ImgArcher5.style.border="0px solid red";
    ImgArcher6.style.border="0px solid red";
    ImgArcher7.style.border="0px solid red";
    ImgArcher8.style.border="0px solid red";
   
    rCM.innerHTML = "Reiniciado";
 }
  function functionReiniciarCapTed(){
    localStorage.removeItem("SaveImgTedBorder1");
    localStorage.removeItem("SaveImgTedBorder2");
    localStorage.removeItem("SaveImgTedBorder3");
    localStorage.removeItem("SaveImgTedBorder4");
    localStorage.removeItem("SaveImgTedBorder5");
    localStorage.removeItem("SaveImgTedBorder6");
    localStorage.removeItem("SaveImgTedBorder7");
    localStorage.removeItem("SaveImgTedBorder8");
    localStorage.removeItem("SaveImgTedBorder9");
    localStorage.removeItem("SaveImgTedBorder10");
   
    ImgTed1.style.border="0px solid red";
    ImgTed2.style.border="0px solid red";
    ImgTed3.style.border="0px solid red";
    ImgTed4.style.border="0px solid red";
    ImgTed5.style.border="0px solid red";
    ImgTed6.style.border="0px solid red";
    ImgTed7.style.border="0px solid red";
    ImgTed8.style.border="0px solid red";
    ImgTed9.style.border="0px solid red";
    ImgTed10.style.border="0px solid red";
   
    rCT.innerHTML = "Reiniciado";
 }

     
