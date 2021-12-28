
var name=prompt('Enter your Name');
function drink_meals(){
var drinks=document.querySelector('#drinks').value;
var names=globe();
	document.querySelector('#drink').innerHTML=`
	<img src="images/avata.jpg" width="30" height="30" alt="avata">
	<h4 style="display:inline-block;">${names}</h4>
	<p>${drinks}</p>`;
}

function Lunch_meals() {

var meat=document.querySelector('#meat').value;
	document.querySelector('#lunch').innerHTML=`
	<img src="images/avata.jpg" width="30" height="30" alt="avata">
	<h4 style="display:inline-block;">${name}</h4>
	<p>${meat}</p>`;	
}
function snack_meals(){
	var snacks=document.querySelector('#snacks').value;
	document.querySelector('#snack').innerHTML=`
	<img src="images/avata.jpg" width="30" height="30" alt="avata">
	<h4 style="display:inline-block;">${name}</h4>
	<p>${snacks}</p>`;
}
function breakfast_meals() {
	var coffee=document.querySelector('#coffe').value;
	document.querySelector('#breakfast').innerHTML=`
	<img src="images/avata.jpg" width="30" height="30" alt="avata">
	<h4 style="display:inline-block;">${name}</h4>
	<p>${coffee}</p>`;	
}
//breakfast
function first() {
	
		document.querySelector('#first').classList.add('checked');
		document.querySelector('#bbc').innerHTML=`1`;
	
	
}
function second() {
	
		document.querySelector('#first').classList.add('checked');
		document.querySelector('#second').classList.add('checked');
		document.querySelector('#bbc').innerHTML=`2`;
		
	return 2;
	
}

function third() {
	
		document.querySelector('#first').classList.add('checked');
		document.querySelector('#second').classList.add('checked');
		document.querySelector('#third').classList.add('checked');
		document.querySelector('#bbc').innerHTML=`3`;
		return 3;
	
}

function forth() {
	
		document.querySelector('#first').classList.add('checked');
		document.querySelector('#second').classList.add('checked');
		document.querySelector('#third').classList.add('checked');
		document.querySelector('#forth').classList.add('checked');
	
		document.querySelector('#bbc').innerHTML=`4`;
		return 4;
	
}
function fith() {
	
document.querySelector('#first').classList.add('checked');
document.querySelector('#second').classList.add('checked');
document.querySelector('#third').classList.add('checked');
document.querySelector('#forth').classList.add('checked');
document.querySelector('#fith').classList.add('checked');
document.querySelector('#bbc').innerHTML=`5`;
	
		return 5;
	
}
//lunch
function delta() {
	
		document.querySelector('#alpha').classList.add('checked');
		document.querySelector('#llc').innerHTML=`1`;
	
	
}
function john() {
	
		document.querySelector('#alpha').classList.add('checked');
		document.querySelector('#stan').classList.add('checked');
		document.querySelector('#llc').innerHTML=`2`;
		
	return 2;
	
}

function peter() {
	
		document.querySelector('#alpha').classList.add('checked');
		document.querySelector('#stan').classList.add('checked');
		document.querySelector('#thabo').classList.add('checked');
		document.querySelector('#llc').innerHTML=`3`;
		return 3;
	
}

function tom() {
	
		document.querySelector('#alpha').classList.add('checked');
		document.querySelector('#stan').classList.add('checked');
		document.querySelector('#thabo').classList.add('checked');
		document.querySelector('#max').classList.add('checked');
	
		document.querySelector('#llc').innerHTML=`4`;
		return 4;
	
}
function sam() {
	
document.querySelector('#alpha').classList.add('checked');
document.querySelector('#stan').classList.add('checked');
document.querySelector('#thabo').classList.add('checked');
document.querySelector('#max').classList.add('checked');
document.querySelector('#ted').classList.add('checked');
document.querySelector('#llc').innerHTML=`5`;
	
		return 5;
	
}
//snacks

function elon() {
	
		document.querySelector('#mark').classList.add('checked');
	document.querySelector('#kkc').innerHTML=`1`;
	
	
}
function musk() {
	
		document.querySelector('#mark').classList.add('checked');
		document.querySelector('#zuck').classList.add('checked');
		document.querySelector('#kkc').innerHTML=`2`;
		
	return 2;
	
}

function jeff() {
	
		document.querySelector('#mark').classList.add('checked');
		document.querySelector('#zuck').classList.add('checked');
		document.querySelector('#waren').classList.add('checked');
		document.querySelector('#kkc').innerHTML=`3`;
		return 3;
	
}

function bezzos() {
	
		document.querySelector('#mark').classList.add('checked');
		document.querySelector('#zuck').classList.add('checked');
		document.querySelector('#waren').classList.add('checked');
		document.querySelector('#bafet').classList.add('checked');
	
		document.querySelector('#kkc').innerHTML=`4`;
		return 4;
	
}
function bill() {
	
document.querySelector('#mark').classList.add('checked');
document.querySelector('#zuck').classList.add('checked');
document.querySelector('#waren').classList.add('checked');
document.querySelector('#bafet').classList.add('checked');
document.querySelector('#dinesh').classList.add('checked');
document.querySelector('#kkc').innerHTML=`5`;
	
		return 5;
	
}
//drinks
function luka() {
	
		document.querySelector('#jordan').classList.add('checked');
		document.querySelector('#ffc').innerHTML=`1`;
	
	
}
function stume() {
	
		document.querySelector('#jordan').classList.add('checked');
		document.querySelector('#nike').classList.add('checked');
		document.querySelector('#ffc').innerHTML=`2`;
		
	return 2;
	
}

function lenka() {
	
		document.querySelector('#jordan').classList.add('checked');
		document.querySelector('#nike').classList.add('checked');
		document.querySelector('#eforce').classList.add('checked');
		document.querySelector('#ffc').innerHTML=`3`;
		return 3;
	
}

function thibos() {
	
		document.querySelector('#jordan').classList.add('checked');
		document.querySelector('#nike').classList.add('checked');
		document.querySelector('#eforce').classList.add('checked');
		document.querySelector('#adidas').classList.add('checked');
	
		document.querySelector('#ffc').innerHTML=`4`;
		return 4;
	
}
function boxy() {
	
document.querySelector('#jordan').classList.add('checked');
document.querySelector('#nike').classList.add('checked');
document.querySelector('#eforce').classList.add('checked');
document.querySelector('#adidas').classList.add('checked');
document.querySelector('#atata').classList.add('checked');
document.querySelector('#ffc').innerHTML=`5`;
	
		return 5;
	
}
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post= document.getElementById("post2");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box2").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered2").appendChild(li);
 
});
var post= document.getElementById("post3");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box3").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered3").appendChild(li);
 
});
var post= document.getElementById("post4");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box4").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered4").appendChild(li);
 
});
