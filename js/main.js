Splitting();

const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
  gsap.to(cursor, { left: e.clientX, top: e.clientY });
});

const typed = new Typed(".typing .txt", {
  strings: [
    "my name is young min",
    "hi computer",
    "Use your own!",
    "Have a great day!",
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 3000,
  loop: true,
});

gsap.defaults({
  duration: 2,
  ease: "back",
});
ScrollTrigger.defaults({
  markers: true,
});

const ProfileTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#profile",
    start: "top-=100 top",
    end: "buttom top",
    pin: true,
    scrub: 1,
  },
});
ProfileTL.from("#profile h2 .char", {
  x: "+=100",
  opacity: 0,
  stagger: {
    each: 0.1,
  },
})
  .from("#profile h2", {
    borderBottomWidth: 0,
  })
  .from("#profile .contents .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });

const historyTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#history",
    start: "top-=200  top",
    end: "buttom-=100  top",
    pin: true,
    scrub: 1,
  },
});

historyTL
  .from("#history h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#history h2", {
    borderBottomWidth: 0,
  })
  .from("#history .txtlist li:nth-child(1)", {
    x: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#history .txtlist li:nth-child(2)", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#history .txtlist li:nth-child(3)", {
    x: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#history .txtlist li:nth-child(4)", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#history .txtlist li:nth-child(5)", {
    x: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#history .txtlist li:nth-child(6)", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });

const resultTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#result",
    start: "top-=200  top",
    end: "buttom-=100  top",
    pin: true,
    scrub: 1,
  },
});
resultTL
  .from("#result h2 .char", {
    x: "-=100",
    opacity: 0,
    stagger: {
      cach: 0.1,
    },
  })
  .from("#result h2", {
    borderBottomWidth: 0,
  })
  .from("#result .resultBox li:nth-child(1)", {
    y: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#result .resultBox li:nth-child(2)", {
    y: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  })
  .from("#result .resultBox li:nth-child(3)", {
    y: "-=100",
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });

$("#result li").on("mouseenter", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .sor").text("CLICK");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    backgroundColor: "green",
    ease: "elastic",
    duration: 1,
  });
});
$("#result li").on("mouseleave", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .sor").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    backgroundColor: "green",
    ease: "power4",
    duration: 0.2,
  });
});
