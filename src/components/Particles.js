import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";

const ParticlesComponent = ({ className }) => {
  const particlesInit = useCallback(async (engine) => {
    // loadSlim(engine);
    await loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(await container);
  }, []);

  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    return {
      // background: {
      //   color: {
      //     value: "#000000",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#00ccff",
        },
        links: {
          color: "#ffffff",
          distance: 140,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 20,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="particles-canvas"
    />
  );
};
export default ParticlesComponent;
