// function loader() {
//   var tl = new TimelineMax({
//     paused: true,
//   });

//   // Letter animation with smoother easing
//   tl.fromTo(
//     ".anim-typewriter",
//     3.5, // Reduced duration for faster completion
//     {
//       width: "0",
//     },
//     {
//       width: "15.9em", // Matches the CSS .line-1 width
//       ease: "power4.out", // Smoother easing for the typing effect
//       onComplete: showButton, // Call the showButton function when the animation is complete
//     },
//     0
//   );

//   // Text cursor animation with smoother blinking effect
//   tl.fromTo(
//     ".anim-typewriter",
//     0.9, // Slightly longer duration for smoother transition
//     {
//       "border-right-color": "rgba(255,255,255,0.75)",
//     },
//     {
//       "border-right-color": "rgba(255,255,255,0)",
//       repeat: -1,
//       ease: "power4.out",
//     },
//     0
//   );

//   tl.play();

//   // Function to show the button with a quick fade-in effect
//   function showButton() {
//     var button = document.querySelector(".load-btns");
//     // Make the button visible

//     // Use GSAP to animate opacity from 0 to 1 quickly
//     gsap.to(button, {
//       duration: 1, // Faster fade-in effect
//       opacity: 1,
//       display: "block", // Fade to full opacity
//     });
//   }

//   // Hide loader on button click
//   document.querySelector(".load-btns").addEventListener("click", function () {
//     var loader = document.getElementById("page0");
//     gsap.to(loader, { opacity: 0, display: "none", duration: 1 });
//   });
// }
// loader();
let tl = gsap.timeline();
tl.to("#page2 #intro-page", {
  clipPath: "circle(80% at 50% 50%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "bottom 100%",
    end: "100% 0%",
    pin: true,
  },
})
  .to("#intro-page h2", {
    y: -100,
    scale: 1.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 100%",
      end: "100% 30%",
    },
  })
  .to("#intro-page p", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#intro-page h2",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 20%",
      end: "100% 0%",
    },
  });

tl.to("#page2 #intro-page", {
  ease: "power1.out",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 3,
    // markers: true,
    start: "bottom 90%",
    end: "100% 50%",
  },
});

function features() {
  tl.from("#introdusing1 .gradient-text", {
    opacity: 0,
    scale: 1.4,
    duration: 2,
    filter: "blur(12px)",
    ease: "power1.out",
    stagger: 1,
    scrollTrigger: {
      trigger: "#introdusing1",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 70%",
      end: "100% -50%",
      pin: true,
    },
  }).to("#feat1-video", {
    scale: 4,
    y: -200,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#feat1-video",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 0%",
    },
  });
  tl.to(".feat-c", {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    y: -100,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".feat-c",
      scroller: "body",
      // markers: true,
      start: "bottom 120%",
      end: "100% 0%",
      scrub: 1,
    },
  });
  tl.from("#introdusing2 .gradient-text", {
    opacity: 0,
    scale: 1.4,
    duration: 2,
    filter: "blur(12px)",
    ease: "power1.out",
    stagger: 1,
    scrollTrigger: {
      trigger: "#introdusing2",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 70%",
      end: "100% -50%",
      pin: true,
    },
  }).to("#feat2-video", {
    scale: 4,
    y: -200,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#feat2-video",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 0%",
    },
  });
  tl.from("#introdusing3 .gradient-text", {
    opacity: 0,
    scale: 1.4,
    duration: 2,
    filter: "blur(12px)",
    ease: "power1.out",
    stagger: 1,
    scrollTrigger: {
      trigger: "#introdusing3",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 70%",
      end: "100% -50%",
      pin: true,
    },
  }).to("#feat3-video", {
    scale: 4,
    y: -200,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#feat3-video",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 0%",
    },
  });
}

features();

document.querySelector(".gen-btns").addEventListener("click", function () {
  const video = document.querySelector("#gen-video");
  video.setAttribute("autoplay", "");
  video.play();
  gsap.to("#generate", {
    duration: 0.5,
    opacity: 0,
    ease: "power1.in",
  });
  gsap.to("#page6 video ", {
    duration: 0.5,
    opacity: 1,
    ease: "power1.in",
  });
});

tl.to("#text-container #videoo", {
  opacity: 1,
  duration: 0.5,
});
tl.from("#page7 .heads", {
  filter: "blur(0px)",
  x: 1500,
  scrollTrigger: {
    trigger: "#text-container",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "bottom 100%",
    end: "100% 0%",
    pin: true,
  },
}).from("#page7 #tv", {
  x: -1500,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: "#text-container",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "bottom 100%",
    end: "100% 0%",
  },
});

gsap.to("#tv video", {
  x: -250,
  y: 650,
  filter: "invert(0)",
  borderRadius: "3px",
  scale: 4,
  scrollTrigger: {
    trigger: "#page7 #vfx-content",
    scroller: "body",
    // markers: true,
    start: "top 120%",
    // end: "top -200%",
    // scrub: 0,
  },
});
