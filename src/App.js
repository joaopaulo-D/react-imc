import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem("Seu imc foi "+ imc.toFixed(2) +", você está abaixo do peso")
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Seu imc foi "+ imc.toFixed(2) +", você está com peso ideal")
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Seu imc foi "+ imc.toFixed(2) +", você está levimente acima do peso")
    }else if(imc >= 34.9){
      setMensagem("Seu imc foi "+ imc.toFixed(2) +", vcuidado obesidade")
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu imc</span>

      <div className="area-input">
        <input
          placeholder="Peso em (Kg) Ex: 50"
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <input
          placeholder="Altura em (cm) Ex: 100"
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

        <h2>{mensagem}</h2>
      </div>
    </div>
  )
}

export default App;