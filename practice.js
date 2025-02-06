function hf(){
    var inp = document.getElementById("input").value;
    console.log(inp);
    
  if( inp<=100 && inp>=0 && inp!=""){
    document.getElementById("hi").innerHTML = inp+"%";
    var s = inp/200;
    document.getElementById("hh").style.transform = `rotate(${s}turn)`;

  }
  else{
    document.getElementById("hi").innerHTML = "error";
  }
}
function hf2(){
  var inp = document.getElementById("input2").value;
  console.log(inp);
  
if( inp<=100 && inp>=0 && inp!=""){
  document.getElementById("hi2").innerHTML = inp+"%";
  var s = inp/200;
  document.getElementById("hh2").style.transform = `rotate(${s}turn)`;

}
else{
  document.getElementById("hi2").innerHTML = "error";
}
}
function hf3(){
  var inp = document.getElementById("input3").value;
  console.log(inp);
  
if( inp<=100 && inp>=0 && inp!=""){
  document.getElementById("hi3").innerHTML = inp+"%";
  var s = inp/200;
  document.getElementById("hh3").style.transform = `rotate(${s}turn)`;

}
else{
  document.getElementById("hi3").innerHTML = "error";
}
}
function hf4(){
  var inp = document.getElementById("input4").value;
  console.log(inp);
  
if( inp<=100 && inp>=0 && inp!=""){
  document.getElementById("hi4").innerHTML = inp+"%";
  var s = inp/200;
  document.getElementById("hh4").style.transform = `rotate(${s}turn)`;

}
else{
  document.getElementById("hi4").innerHTML = "error";
}
}function hf5(){
  var inp = document.getElementById("input5").value;
  console.log(inp);
  
if( inp<=100 && inp>=0 && inp!=""){
  document.getElementById("hi5").innerHTML = inp+"%";
  var s = inp/200;
  document.getElementById("hh5").style.transform = `rotate(${s}turn)`;

}
else{
  document.getElementById("hi5").innerHTML = "error";
}
}