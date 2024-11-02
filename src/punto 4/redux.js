import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const INCREMENTAR = 'INCREMENTAR';
const DECREMENTAR = 'DECREMENTAR';

const incrementar = () => ({
  type: INCREMENTAR,
});

const decrementar = () => ({
  type: DECREMENTAR,
});


const estadoInicial = {
  contador: 0,
};

const contadorReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return { ...state, contador: state.contador + 1 };
    case DECREMENTAR:
      return { ...state, contador: state.contador - 1 };
    default:
      return state;
  }
};


const store = createStore(contadorReducer);


const Contador = ({ contador, incrementar, decrementar }) => {
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};


const mapStateToProps = (state) => ({
  contador: state.contador,
});


const mapDispatchToProps = {
  incrementar,
  decrementar,
};


const ContadorConectado = connect(mapStateToProps, mapDispatchToProps)(Contador);


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Aplicación de Contador con Redux</h1>
        <ContadorConectado />
      </div>
    </Provider>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
