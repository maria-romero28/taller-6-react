import React, { createContext, useState, useContext } from 'react';


const TemaContext = createContext();


export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro'); 

  const cambiarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => {
  return useContext(TemaContext);
};