// App.js//
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

// Componente Boton//
const Boton = () => {
  const [texto, setTexto] = useState('Hacer clic aquí');

  const manejarClick = () => {
    setTexto('¡Gracias por hacer clic!');
  };

  return <button onClick={manejarClick}>{texto}</button>;
};

// Componente principal de la aplicación//
const App = () => {
  return (
    <div>
      <h1>Aplicación de Botón</h1>
      <Boton />
    </div>
  );
};

// Renderizar la aplicación//
ReactDOM.render(<App />, document.getElementById('root'));

// Pruebas del componente Boton//
describe('Componente Boton', () => {
  test('muestra el texto inicial y cambia el texto al hacer clic', () => {
    // Renderizar el componente//
    const { getByText } = render(<Boton />);

    // Verificar que el texto inicial es "Hacer clic aquí"//
    const boton = getByText('Hacer clic aquí');
    expect(boton).toBeInTheDocument();

    // Simular el clic en el botón//
    fireEvent.click(boton);

    // Verificar que el texto ha cambiado a "¡Gracias por hacer clic!"//
    expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
  });
});