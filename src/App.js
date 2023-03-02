import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const models = [
    {
      name: "Astronaut",
      src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      link: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    },
    {
      name: "Neil",
      src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
      link: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
    },
    {
      name: "Pool",
      src: "/models/Pool.gltf", 
    },
  ];

  const [modelViewerStyle, setModelViewerStyle] = useState({});

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setModelViewerStyle({
          width: "80vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        });
      } else {
        setModelViewerStyle({
          width: "100vw",
          height: "calc(100vh - 50px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeModel = (e) => {
    const modelViewer = document.querySelector("model-viewer");
    modelViewer.src = e.target.value;
  };

  return (
    <div className="App">
      <div style={modelViewerStyle}>
        <model-viewer
          style={{ width: "100%", height: "90%" }}
          src={models[0].src}
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls
        ></model-viewer>
      </div>

      <div className="configurator">
        {models.map((model) => (
          <button
            className="button"
            key={model.name}
            value={model.src}
            onClick={(e) => changeModel(e)}
          >
            {model.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
