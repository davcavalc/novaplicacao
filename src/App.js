/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('Soma');

  const calcular = () => {
    if(operacao == "Soma") {
      return parseFloat(nro1) + parseFloat(nro2);
    } else if(operacao == "Subtracao") {
      return parseFloat(nro1) - parseFloat(nro2);
    } else if(operacao == "Multiplicacao") {
      return parseFloat(nro1) * parseFloat(nro2);
    } else {
      return parseFloat(nro1) / parseFloat(nro2);
    }
  }

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <label>Primeiro Número</label>
      <input type="number" value={nro1} onChange = {(e) => setNro1(e.target.value)}/>
      <label>Segundo número</label>
      <input type="number" value={nro2} onChange = {(e) => setNro2(e.target.value)}/>

      <select onChange = {(e) => setOperacao(e.target.value)}>
        <option value="">Soma</option>
        <option value="">Subtração</option>
        <option value="">Multiplicação</option>
        <option value="">Divisão</option>
      </select>

      <label>Resultado {resultado}</label>
    </div>
  );
}

export default App;
