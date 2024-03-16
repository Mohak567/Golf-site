let cur = document.querySelector("#cursor");
let curblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(details) =>{
    cur.style.left = details.x + 30 + "px";
    cur.style.top = details.y + "px";
    curblur.style.left = details.x - 120 + "px";
    curblur.style.top = details.y - 130 + "px";
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach((element) =>{
    element.addEventListener("mouseenter", () =>{
        cur.style.scale = 3;
        cur.style.border = "0.5px solid #fff";
        cur.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave", () =>{
        cur.style.scale = 1;
        cur.style.border = "0px solid #95C11E";
        cur.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
});

gsap.from("about-us img,#about-us-text",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});

gsap.from("#insta h4,#imginsta",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#insta",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
});