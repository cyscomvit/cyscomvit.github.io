const slider = document.getElementById("nav-slider");
const nodeList = slider.children;
var navList = Array.prototype.slice.call(nodeList,0); 



document.addEventListener("DOMContentLoaded", function() {
	var dropdownSelect = document.querySelector(".dropdown-select");
	var dropdownMenu = document.getElementById("dropdownMenu");
	var contents = document.querySelectorAll(".content");
	var spacer = document.getElementById('dropdownContainer');

	dropdownSelect.addEventListener("click", function() {
		dropdownMenu.classList.toggle("show");
		
	});

	function hideAllContents() {
		contents.forEach(function(content) {
			content.style.display = "none";
			spacer.classList.add('hidden');
		});
	}

	function showContent1(year) {
		var content = document.getElementById("content" + year);
		hideAllContents();
		if (content) {
			content.style.display = "block";
		}
	}

	dropdownMenu.addEventListener("click", function(event) {
		event.preventDefault();
		var selectedYear = event.target.textContent;
		dropdownSelect.textContent = selectedYear;
		dropdownMenu.classList.remove("show");
		showContent1(selectedYear);
	});
});


function showContent(year) {
	var contents = document.querySelectorAll('.contentdisp');
	contents.forEach(function(content) {
	  content.style.display = "none";
	});
  
	var selectedContent = document.getElementById('content' + year);
	if (selectedContent) {
	  selectedContent.style.display = 'block';
	}
  }
  
  // Hide all contents initially
  hideAllContents();
  
  function hideAllContents() {
	var contents = document.querySelectorAll('.contentdisp');
	contents.forEach(function(content) {
	  content.style.display = "none";
	});
  }
  
  

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
    document.getElementById("dropdown").style.display == "flex" ? (
     document.getElementById("dropdown").style.animationName="dropup",document.getElementById("dropdown").style.display = "none" ): (document.getElementById("dropdown").style.display = "flex",
    document.getElementById("dropdown").style.animationName = "dropdown")
})



