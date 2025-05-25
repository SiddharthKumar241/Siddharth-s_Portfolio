tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "transparent"
  },
  particles: {
    color: {
      value: "#b9ff34"
    },
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      outMode: "bounce"
    }
  }
});
