import React from "react";

export const Projects = () => {
  return (
    <div>
       <header
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "100vh",
        width: "100vw",                // 👈 ancho completo
        backgroundImage: "url('/FondoAlfa.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        margin: 0,                     // 👈 elimina márgenes
        padding: 0,                    // 👈 elimina padding
        overflow: "hidden"
      }}
    >
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="position-relative">
        <h1 className="display-3 fw-bold">Proyectos</h1>
        <p className="lead">
           <ul>
        <li>Avión SAE AeroDesign 2023</li>
        <li>Avión SAE AeroDesign 2024</li>
        <li>Próximo reto 2025 💪</li>
      </ul>
        </p>
       
      </div>
    </header>
      
    </div>
  );
};
