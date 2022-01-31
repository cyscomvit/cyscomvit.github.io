const slider = document.getElementById("nav-slider");
const nodeList = slider.children;
var navList = Array.prototype.slice.call(nodeList,0); 

function locateNode(arr) {
	let pos = 0;
	arr.every(item => {
	if(item.classList.length==1) {
		return false;
	} else {
		pos++;
	}
})
	return pos;
}

var delNode = navList[locateNode(navList)];
console.log(delNode);

navList.forEach(item => {
	item.onmouseenter = function(){
		delNode.classList.remove('active');
   		this.classList.add('active');
   		delNode = this;
	}
})
const but = document.querySelector(".button-go");
but.addEventListener("click", () => {
    document.getElementById("team").scrollIntoView();
})
gsap.to(".nav", {
    scrollTrigger: {
        trigger: ".team-landing",
        start: 'bottom center',
        toggleActions: "play none none reverse",
    },
    backgroundColor: "rgba(0,0,0,0.5)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    ease: Power2.easeInOut
})
const toggler = document.getElementById("nav-toggler");
toggler.addEventListener("click", () => {
    console.log("Clicked!");
    document.getElementById("dropdown").style.display == "flex" ? (
     document.getElementById("dropdown").style.animationName="dropup",document.getElementById("dropdown").style.display = "none" ): (document.getElementById("dropdown").style.display = "flex",
    document.getElementById("dropdown").style.animationName = "dropdown")
})