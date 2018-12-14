AOS.init({
 duration: 1200
});

function sharpen() {
	document.querySelectorAll("header.cover").filter="blur(100%)";
}

function test() {
	document.getElementByClassName("cover").filter="blur(25px)";
}

var x = document.getElementByClassName("cover");
display(x);