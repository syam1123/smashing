

 function show()
{
//alert("test");
var div=document.getElementById('moblist');
var search = document.getElementById('mobsearch');
search.style.display = 'none';
if (div.style.display !== 'none')
{
div.style.display = 'none';
document.getElementById("menubutton").innerHTML = "MENU";
}
else
{
div.style.display = 'block';
document.getElementById("menubutton").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;X";
document.getElementById("menubutton").style.width = "60px";
document.getElementById("menubutton").style.align = "center";
}
}
function showsearch()
{
//alert("test");
var div=document.getElementById('mobsearch');
var menu = document.getElementById('moblist');
menu.style.display = 'none';
document.getElementById("menubutton").innerHTML = "MENU";
if (div.style.display !== 'none')
{
div.style.display = 'none';
menu.style.display = 'none'
}
else
{
div.style.display = 'block';
document.getElementById("searchbutton").innerHTML = "X";
document.getElementById("searchbutton").style.align = "center";
}
}
// function show() {
//     alert('Hai');
//     console.log('Hai');
// }
