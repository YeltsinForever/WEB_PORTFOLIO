const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: false,
    direction: 'horizontal',
    inertia: 0.8,
    repeat: true,
  })