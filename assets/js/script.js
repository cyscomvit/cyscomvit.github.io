const tl = gsap.timeline({ defaults: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);
gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: 'bottom center',
        toggleActions: "play none none reverse",
        scrub: 1
    },
    opacity: 0.4,
    ease: Power2.easeInOut
})
gsap.to(".nav", {
    scrollTrigger: {
        trigger: ".main",
        start: 'bottom center',
        toggleActions: "play none none reverse",
    },
    backgroundColor: "rgba(0,0,0,0.5)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    ease: Power2.easeInOut
})

const ck = document.getElementById("checkbox");
ck.addEventListener("change", () => {
    document.getElementsByTagName("nav")[0].classList.toggle("dark");
    document.getElementById("wave").setAttribute("fill", ck.checked ? "#0b1339" : "#003b4d");
    document.getElementsByTagName("main")[0].classList.toggle("dark");
    document.querySelector(".section-1").classList.toggle("dark");
    document.querySelector(".section-2").classList.toggle("dark");
    document.querySelector(".section-3").classList.toggle("dark");
    document.querySelectorAll(".timeline__content").forEach(item => {
        item.classList.toggle("dark");
    });

})

let count = 0;
document.getElementById("click").addEventListener('click', () => {
    const tl = gsap.timeline();
    const targets = ['.main', '.button'];
    tl.to("#lock", {
        duration: 0.1,
        rotate: 40,
    })
    .to("#lock", {
        duration: 0.1,
        rotate: -40
    })
    .to('#lock', {
        duration: 0.1,
        rotate: 0
    })
    count += 1;
    if (count ==3){
    document.getElementById("lock").setAttribute("src", "./assets/images/unlock.png");
    }
});
const toggler = document.getElementById("nav-toggler");
toggler.addEventListener("click", () => {
    console.log("Clicked!");
    document.getElementById("dropdown").style.display == "flex" ? (
     document.getElementById("dropdown").style.animationName="dropup",document.getElementById("dropdown").style.display = "none" ): (document.getElementById("dropdown").style.display = "flex",
    document.getElementById("dropdown").style.animationName = "dropdown")
})
