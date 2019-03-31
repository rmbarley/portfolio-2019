import React from "react"
import Particles from "react-particles-js"
const Hero = () => {
  const particleParams = {
    particles: {
      number: {
        value: 355,
        density: {
          enable: true,
          value_area: 789.1476416322727,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.48927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 20,
        color: "#ffffff",
        opacity: 0.4,
        width: 0.75,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
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
          distance: 83.91608391608392,
          size: 1,
          duration: 3,
          opacity: 1,
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
  }
  return (
    <div className="hero-wrapper is-fullheight">
      <Particles params={particleParams} />
      <div className="hero is-overlay">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">Ryan Barley</h1>
            <h2 className="subtitle is-4">
              Full Stack Dev, Randonneur, Coffee Enthusiast
            </h2>
            <button className="button is-large">Let's Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
