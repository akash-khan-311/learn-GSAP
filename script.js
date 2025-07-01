var initialPath = `M 10 100 Q 250 100 490 100`;
const finalPath = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector('#string');

string.addEventListener('mousemove', (e) => {
  path = `M 10 100 Q ${e.clientX} ${e.clientY} 490 100`;
  gsap.to('svg path', {
    duration: 0.3,
    attr: {
      d: path,
    },
    ease: 'power3.out',
  });
});

string.addEventListener('mouseleave', () => {
  gsap.to('svg path', {
    attr: {
      d: initialPath,
    },
    duration: 1.5,
    ease: 'elastic.out(1, 0.2)',
  });
});
