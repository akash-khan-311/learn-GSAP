var myName = document.querySelector('#name span');
const role = document.querySelector('#role span');

const tl = gsap.timeline();

tl.from(myName, {
  y: 200,
  opacity: 0,
  duration: 0.5,
});

tl.from(role, {
  y: 200,
  opacity: 0,
  duration: 0.5,
});
