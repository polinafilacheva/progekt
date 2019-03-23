anime({
  targets: '.box',
  translateX: {
    value: 0.3,
    duration: 800

  },
  rotate: {
    value: 1440,
    duration: 9000,
    easing: 'easeInOutSine',
  },
  scale: {
    value: 1,
    duration: 1600,
    delay: 400,
    easing: 'easeInOutQuart'
  },
  delay: 250
});

anime({
  targets: '#new',
  translateX: {
    value: 0.3,
    duration: 800
  },
  rotate: {
    value: 1440,
    duration: 9000,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 1,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250
});
