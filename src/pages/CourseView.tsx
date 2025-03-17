import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 27%;
  background: #222;
  color: white;
  padding: 20px;
  overflow-y: auto;
`;

const ModuloTitulo = styled.h3`
  margin-top: 10px;
  padding-bottom: 5px;
  background-color: #25c18c2b;
  font-size: 1.2rem;
`;

const ClaseItem = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: space-between; /* Distribuye nombre y puntos */
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? "#444" : "transparent")};
  border-left: ${({ $selected }) => ($selected ? "4px solid #4caf50" : "none")};
  text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
  font-weight: ${({ $selected }) => ($selected ? "bold" : "normal")};
  border-bottom: 1px solid #fefffe24;

  &:hover {
    background: #333;
    text-decoration: underline;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #030d20e6;
`;

const VideoContainer = styled.div`
  background: #606060;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const VideoHeader = styled.h2`
  color: white;
  margin-bottom: 15px;
`;

const VideoPlayer = styled.video`
  width: 950px;
  border-radius: 10px;
`;


const Puntos = styled.span`
  font-size: 0.9rem;
  color: #fff;
  font-weight: bold;
  background: #66c572;
  border-radius: 4px;
  width: 18%;
  text-align: center;
`;


const App = () => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedClassName, setSelectedClassName] = useState<string>("Bienvenido!, selecciona una clase =)");

  const modulos = [
    {
      modulo: "MÓDULO 01",
      clases: [
        { id: 1, nombre: "Clase N° 01:Historia y evolución del internet", video: "video1.mp4", puntos: 10},
        { id: 2, nombre: "Clase N° 02:Historia y evolución del dinero", video: "video2.mp4", puntos: 10},
        { id: 3, nombre: "Clase N° 03:Criptografía", video: "video2.mp4", puntos: 10},
        { id: 4, nombre: "Clase N° 04:Algoritmos de consenso", video: "video2.mp4", puntos: 10},
      ],
    },
    {
      modulo: "MÓDULO 02",
      clases: [
        { id: 5, nombre: "Clase N° 05-Minoria de Criptomonedas", video: "video3.mp4", puntos: 10},
        { id: 6, nombre: "Clase N° 06-Minoria de Criptomonedas II", video: "video4.mp4", puntos: 10},
        { id: 7, nombre: "Clase N° 07-Blockchain, Tipos de Blockchain y Bitcoin", video: "video4.mp4", puntos: 10},
      ],
    },
    {
      modulo: "MÓDULO 03",
      clases: [
        { id: 8, nombre: "Clase N° 08-Criptoactivos y su Impacto", video: "video5.mp4", puntos: 10},
        { id: 9, nombre: "Clase N° 09-Ethereum", video: "video5.mp4", puntos: 10},
        { id: 10, nombre: "Clase N° 10-Dispositivos y tipos de Almacenamiento(Wallets)", video: "video5.mp4", puntos: 10},
        { id: 11, nombre: "Clase N° 11-Practica de Wallets", video: "video5.mp4", puntos: 10},
      ],
    },
  ];

  const handleClassSelection = (id: number, nombre: string) => {
    setSelectedClass(id);
    setSelectedClassName(nombre);
  };

//   const selectedVideo = modulos.flatMap((m) => m.clases).find((c) => c.id === selectedClass)?.video;    //aplicar en caso tenga videos para cada modulo.

  return (
    <Container>
      <Sidebar>
        <h2>BlockChain</h2>
        {modulos.map((modulo, index) => (
          <div key={index}>
            <ModuloTitulo>{modulo.modulo}</ModuloTitulo>
            {modulo.clases.map((clase) => (
              <ClaseItem
                key={clase.id}
                $selected={selectedClass === clase.id}
                onClick={() => handleClassSelection(clase.id, clase.nombre)}
              >
                
                <span>📚{clase.nombre}</span>
                {clase.puntos !== undefined && <Puntos>{clase.puntos} puntos</Puntos>}
              </ClaseItem>
            ))}
          </div>
        ))}
      </Sidebar>
      <Content>
        <VideoContainer>
          <VideoHeader>{selectedClassName}</VideoHeader>
          {selectedClass !== null && (
            <VideoPlayer controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </VideoPlayer>
          )}
        </VideoContainer>
      </Content>
    </Container>
  );
};

export default App;
