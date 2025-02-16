export const SECTIONS = [
  {
    content: (
      <>
        <h2>Canon AT-1</h2>
        <p>
          Released in 1977, the Canon AT-1 is a 35mm SLR camera designed as an
          affordable, manual-focus alternative to the AE-1. With its mechanical
          reliability, robust build, and timeless design, it's a favorite among
          film photography enthusiasts and collectors.
        </p>
        <div>
          <h4>Key Features:</h4>
          <ul>
            <li>
              <span className="list-label">Manual Focus System:</span> Full
              control for sharp, creative shots.
            </li>
            <li>
              <span className="list-label">LED Light Meter:</span>{" "}
              Center-weighted average metering for accurate exposure.
            </li>
            <li>
              <span className="list-label">Shutter Speed:</span> 1/1000 to 2
              seconds, plus a bulb mode for long exposures.
            </li>
            <li>
              <span className="list-label">Durable Metal Body:</span> Built to
              last, withstands years of use.
            </li>
          </ul>
        </div>

        <p>
          Whether you're a beginner learning manual controls or a seasoned pro
          seeking a classic film experience, the Canon AT-1 offers simplicity,
          precision, and the joy of analog photography.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: 0.1, y: 0, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Manual Focus System</h3>
        <p>
          The Canon AT-1 features a precise manual focus system, allowing
          photographers to achieve perfect sharpness without relying on
          automation. The focus ring offers smooth and accurate adjustments.
        </p>
        <p>
          This manual system gives photographers complete control over focus,
          allowing them to capture images with great precision, even in
          challenging conditions.
        </p>
        <p>
          The focusing mechanism is smooth and precise, providing instant
          tactile feedback that enhances the overall shooting experience.
        </p>
        <p>
          Additionally, the AT-1's large, bright viewfinder allows for easy
          composition and focusing, making it an excellent choice for
          photographers who appreciate a hands-on approach to their craft.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 0, z: 12 },
      lookAt: { x: 3, y: 0, z: 0 },

      zoom: 1,
    },
    objectPosition: {
      rotation: { x: Math.PI * 0.5, y: Math.PI * 0.5, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Shutter Speed Dial</h3>
        <p>
          The shutter speed dial offers a wide range of speeds from 1/1000 to 2
          seconds, plus a bulb mode for long exposures, perfect for creative
          photography.
        </p>
        <p>
          The AT-1's shutter dial is easy to adjust, offering a precise range of
          exposure times. From freezing fast-moving subjects to capturing
          long-exposure shots in low light, the AT-1 has you covered.
        </p>
        <p>
          Its exposure control system provides flexibility, allowing users to
          shoot in a variety of lighting conditions, while still maintaining
          full control over exposure.
        </p>
        <p>
          Whether you're shooting in bright sunlight or capturing stunning night
          scenes, the AT-1's shutter speed dial ensures your photos come out
          exactly how you envision them.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: Math.PI / 2, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>LED Light Meter Display</h3>
        <p>
          The AT-1 is equipped with an intuitive LED light meter display inside
          the viewfinder, ensuring correct exposure for every shot, even in
          challenging lighting conditions. This feature makes it ideal for both
          beginners and professional photographers looking for precise exposure
          control.
        </p>
        <p>
          The built-in light meter continuously measures the light in the scene
          and displays this information in the viewfinder, helping you adjust
          settings to achieve perfect exposure every time.
        </p>
        <p>
          This feature is incredibly useful in various lighting situations,
          particularly for beginners who may not yet be comfortable with manual
          metering. It's an easy and reliable way to ensure your images are
          correctly exposed without relying on automation.
        </p>
        <p>
          As a bonus, the light meter works even in low light conditions, making
          the Canon AT-1 a versatile camera for any environment.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: 0, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h2>Canon AT-1</h2>
        <p>
          Interested in the history and technical specifications of the Canon
          AT-1? Click below to learn more about this remarkable camera, its
          place in the world of photography, and how it has shaped the craft for
          over four decades.
        </p>
        <p>
          From its creation to its legacy, the Canon AT-1 continues to inspire
          photographers who value the beauty of film photography and the craft
          of manual control.
        </p>

        <a
          className="learn-more-button"
          href="https://en.wikipedia.org/wiki/Canon_AT-1"
          target="_blank"
        >
          Learn more about Canon AT-1
        </a>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: 0.1, y: Math.PI * 0.15, z: 0 },
    },
  },
];
