import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const models = [
    {
      name: "Pool",
      src: "https://mywebar-a.akamaihd.net/64909/174689/Swimming_pool_343.glb"
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



  return (
    <div className="App">
      <div style={modelViewerStyle}>
        <model-viewer
          style={{ width: "100%", height: "90%" }}
          src={models[0].src}
          ar
          auto-rotate
          camera-controls
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          interaction-prompt="none"
          interaction-policy="allow-when-focused"
        ></model-viewer>
      </div>

   
      <button
        onClick={() => {
          window.location.href = "https://mywebar.com/p/Project_2_sqdtswmqir?_ga=2.101040833.1740868014.1677749285-697885808.1677585164";
        }}
      >
       View in AR
      </button>

    </div>
  );
}

export default App;
