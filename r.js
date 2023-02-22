function si(){
    document.getElementById("side").innerHTML="<h1>Mahabalipuram Beach <br> <h4>Chennai</h4></h1>";
    document.getElementById("side").style.marginTop="10px";
  }
  function sd(){
    document.getElementById("side").innerHTML="";

  }
  function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function m() {
  document.getElementById("myDIV").style.transitionDuration = "2s";
}
function yy() {
  document.getElementById("myDI").style.transitionDuration = "1s";
}
function ak(){
    a = document.createElement("img");
    a.setAttribute('src',"https://media.giphy.com/media/r5E0uV2Facm2c/giphy.gif");
    document.getElementById("rishav").appendChild(a).style.width ="200px";
}
function ap(){
a = document.createElement("img");
a.setAttribute('src',"https://media.giphy.com/media/xiN0BXMETVsx0AxTXt/giphy.gif");
document.getElementById("rishav").appendChild(a).style.width ="200px";
}
 
function ri(){
    document.getElementById("rishav").style.border="5px solid orange";
    document.getElementById("rishav").style.boxShadow="2px 2px 2px 2px white";
    document.getElementById("rishav").style.width="250px";
}
function ris(){
    document.getElementById("rishav").style.color="";
    document.getElementById("rishav").style.width="200px";
    document.getElementById("rishav").style.border="";
}
        function xo() {
            document.getElementById("id").style.border = "2px solid black";
            document.getElementById("id").style.paddingTop = "100px";
            document.getElementById("id").style.boxShadow = "0px 10px 1px 1px white";
            document.getElementById("id").style.color = "white";
            document.getElementById("id").style.background = "black";
        }
        function x() {
            document.getElementById("id").style.boxShadow = "10px 10px 10px 10px green";
            document.getElementById("id").style.border = "2px solid white";
            document.getElementById("id").style.color = "black";
            document.getElementById("id").style.background = "";
        }
        function ab() {
            const x = document.getElementsByTagName("h3");
            document.getElementById("du").innerHTML = "welcome" + x[0].innerHTML;
            document.getElementById("id").style.border = "2px solid white";
        }
        function my() {
            var x = document.getElementById("io");
            x.remove(x.selectedIndex);
            alert("You want to remove this iteam   click okay");
        }
        function right() {
            const x = document.createElement("h1");
            const textnode = document.createTextNode();
            append.textnode;
        }
        function lo(){
       a = document.createElement("img");
       b = document.createElement("img");
       c = document.createElement("img");
       d = document.createElement("img");
       e = document.createElement("img");
       a.setAttribute('src',"https://media.giphy.com/media/r5E0uV2Facm2c/giphy.gif");
       b.setAttribute('src',"https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif");
       c.setAttribute('src',"https://media.giphy.com/media/xiN0BXMETVsx0AxTXt/giphy.gif");
       d.setAttribute('src',"https://media.giphy.com/media/OK5LK5zLFfdm/giphy.gif");
       e.setAttribute('src',"https://media.giphy.com/media/ven7WLT3nG6uth8cNw/giphy-downsized-large.gif");
       document.getElementById("surprise").appendChild(a).style.width ="200px";
       document.getElementById("surprise").appendChild(a).style.border="2px solid yellow";
       document.getElementById("surprise").appendChild(a).style.boxShadow="1px 0px 5px 1px pink";
       document.getElementById("surprise").appendChild(b).style.width ="168px";
       document.getElementById("surprise").appendChild(b).style.border="2px solid white";
       document.getElementById("surprise").appendChild(b).style.boxShadow="1px 0px 5px 1px pink";
       document.getElementById("surprise").appendChild(c).style.width ="166px";
       document.getElementById("surprise").appendChild(c).style.border="2px solid white";
       document.getElementById("surprise").appendChild(c).style.boxShadow="1px 0px 5px 1px pink";
       document.getElementById("surprise").appendChild(d).style.width ="166px";
       document.getElementById("surprise").appendChild(d).style.border="2px solid pink";
       document.getElementById("surprise").appendChild(d).style.boxShadow="1px 0px 5px 1px pink";
       document.getElementById("surprise").appendChild(d).style.height ="253px";
       document.getElementById("surprise").appendChild(e).style.width ="168px";
       document.getElementById("surprise").appendChild(e).style.border="2px solid orange";
       document.getElementById("surprise").appendChild(e).style.boxShadow="1px 0px 5px 1px pink";
       document.getElementById("surprise").appendChild(e).style.height ="253px";
       document.getElementById("ee").style.background ="lightgreen";
       document.getElementById("ee").style.color ="black";
       document.getElementById("ee").innerHTML="See More";
       document.getElementById("ee").style.border="1px solid yellow";
        }
        function l(){
            var x = document.getElementById("surprise");
            x.removeChild(x.firstElementChild);
            document.getElementById("ee").style.color ="green";
            document.getElementById("ee").style.color ="white";
            document.getElementById("ee").innerHTML="You Delete Image";
       document.getElementById("ee").style.border="1px solid red";
              document.getElementById("ee").style.background="red";
        }
        function o(){
document.getElementById("surprise").style.boxShadow="0px 3px 4px 4px orange";
        }
        function o(){
document.getElementById("surprise").style.boxShadow="0px 2px 2px 2px white";
        }