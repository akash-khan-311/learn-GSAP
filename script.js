var h1 = document.querySelector('h1 span');

gsap.from(h1, {
  opacity: 0,
  y: 300,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15,
});
