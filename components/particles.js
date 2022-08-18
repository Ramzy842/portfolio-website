const particles = {
  particles: {
    number: {
      value: 88,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#d4f1f4",
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 7,
      },
      image: {
        src: "img/github.svg",
        width: 10,
        height: 10,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4.00602506169279,
      random: true,
      anim: {
        enable: false,
        speed: 31.649421789409637,
        size_min: 15.418949076891874,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.6024100246771158,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 16.230472712517763,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particles