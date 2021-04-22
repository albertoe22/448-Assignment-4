function select1(){
  var execheading = document.getElementById("Execheading");
  var execdetails = document.getElementById("Execdetails");
  var button = document.getElementById("execbtn");
  var info = document.getElementById("executive");
  execheading.style.display= "none";
  execdetails.style.display= "none";
  button.style.display= "none";
  info.style.display="block";
}
function submit1(){
  var execheading = document.getElementById("Execheading");
  var execdetails = document.getElementById("Execdetails");
  var button = document.getElementById("execbtn");
  var info = document.getElementById("executive");
  execheading.style.display= "block";
  execdetails.style.display= "block";
  button.style.display= "block";
  info.style.display="none";
}
function select2(){
  var goldheading = document.getElementById("Goldheading");
  var golddetails = document.getElementById("Goldinfo");
  var gbutton = document.getElementById("goldbtn");
  var ginfo = document.getElementById("gold");
  goldheading.style.display= "none";
  golddetails.style.display= "none";
  gbutton.style.display= "none";
  ginfo.style.display="block";
}
function submit2(){
  var goldheading = document.getElementById("Goldheading");
  var golddetails = document.getElementById("Goldinfo");
  var gbutton = document.getElementById("goldbtn");
  var ginfo = document.getElementById("gold");
  goldheading.style.display= "block";
  golddetails.style.display= "block";
  gbutton.style.display= "block";
  ginfo.style.display="none";
}
function submit3(){
  alert("Order completed Thank You");
}

function select(){
  var header = document.getElementById("sizes");
  var btns = header.getElementsByClassName("sizebtn");
  
}