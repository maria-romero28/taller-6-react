import React, { useState, useEffect } from 'react';

const Contador = () => {
 
  const [contador, setContador] = useState(0);

  
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);
  }, [contador]); 

  
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default Contador;
