const particlesconfig = {
  particles: {
    number: {
      value: 255,
      density: {
        enable: true,
        value_area: 881.8766334760375
      }
    },
    color: {
      value: "#161313"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#3e2c2c"
      },
      polygon: {
        nb_sides: 7
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.352750653390415,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#965e7b",
      opacity: 0.25654592973848367,
      width: 0.4810236182596568
    },
    move: {
      enable: true,
      speed: 1.206824121731046,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 194.89853095232286,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.5274725274725275,
        speed: 3
      },
      repulse: {
        distance: 15.984015984015985,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

  export default particlesconfig;