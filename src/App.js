import { useState } from 'react';

function App() {
  var [troco, setTroco] = useState(0);
  var [estado, setEstado] = useState(0);
  var [isFinal, setIsFinal] = useState(false);

  function StateChange(symbol) {
    if(estado < 6){
      if(symbol === "1") {setEstado(estado + 1)}
      if(symbol === "2") {setEstado(estado + 2)}
      if(symbol === "5") {setEstado(estado + 5)}
      else(console.log(estado))
    }
    if(estado === 6){
      if(symbol === "1") {setEstado(estado + 1)}
      if(symbol === "2") {setEstado(estado + 2)}
      if(symbol === "5") {setEstado(estado + 5)}
      if(symbol === "a") {setEstado(0); setIsFinal(true)}
    }
    if(estado === 7){
      if(symbol === "1") {setEstado(estado + 1)}
      if(symbol === "2") {setEstado(estado + 2)}
      if(symbol === "5") {setEstado(estado + 5)}
      if(symbol === "a") {setTroco(1); setEstado(0); setIsFinal(true)}
      if(symbol === "b") {setEstado(0); setIsFinal(true)}
    }
    if(estado === 8){
      if(symbol === "1") {setEstado(estado + 1)}
      if(symbol === "2") {setEstado(estado + 2)}
      if(symbol === "5") {setEstado(estado + 5)}
      if(symbol === "a") {setTroco(2); setEstado(0); setIsFinal(true)}
      if(symbol === "b") {setTroco(1); setEstado(0); setIsFinal(true)}
      if(symbol === "c") {setEstado(0); setIsFinal(true)}
    }
    if(estado > 8){
      if(symbol === "1") {setEstado(estado + 1)}
      if(symbol === "2") {setEstado(estado + 2)}
      if(symbol === "5") {setEstado(estado + 5)}
      if(symbol === "a") {setTroco(estado - 6); setEstado(0); setIsFinal(true)}
      if(symbol === "b") {setTroco(estado - 7); setEstado(0); setIsFinal(true)}
      if(symbol === "c") {setTroco(estado - 8); setEstado(0); setIsFinal(true)}
    }
    
  }

  return (
    <div class='container'>
      <div class='row'>
        <div class='col'>
          <button className='btn'onClick={() => StateChange("a")}>
            Doce A
          </button>
          <br />
          <button className='btn' onClick={() => StateChange("b")}>
            Doce B
          </button>
          <br />
          <button className='btn' onClick={() => StateChange("c")}>
            Doce C
          </button>
        </div>
        <div class='col'>
          <button className='btn' onClick={() => StateChange("1")}>
            1 real
          </button>
          <br />
          <button className='btn' onClick={() => StateChange("2")}>
            2 reais
          </button>
          <br />
          <button className='btn' onClick={() => StateChange("5")}>
            5 reais
          </button>
        </div>
        <div class='col'>
          Total
          <p>{estado}</p>
          Troco
          <p>{troco}</p>
          <button className='btn' onClick={() => setEstado(0) & setTroco(0) & setIsFinal(false)}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;