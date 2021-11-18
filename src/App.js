import { useState } from 'react';

function App() {
  const [troco, setTroco] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div class='container'>
      <h3>Total</h3>
      <p>{total}</p>
      <div class='row'>
        <div class='col'>
          <button
            className='btn'
            onClick={() =>
              total - 6 >= 0 ? setTotal(total - 6) : setTotal(total)
            }
          >
            Doce A
          </button>

          <button
            className='btn'
            onClick={() =>
              total - 7 >= 0 ? setTotal(total - 7) : setTotal(total)
            }
          >
            Doce B
          </button>

          <button
            className='btn'
            onClick={() =>
              total - 8 >= 0 ? setTotal(total - 8) : setTotal(total)
            }
          >
            Doce C
          </button>
        </div>
      </div>
      <div class='row'>
        <div class='col'>
          <button className='btn' onClick={() => setTotal(total + 1)}>
            1 real
          </button>

          <button className='btn' onClick={() => setTotal(total + 2)}>
            2 reais
          </button>

          <button className='btn' onClick={() => setTotal(total + 5)}>
            5 reais
          </button>
        </div>
        <div class='row'>
          <div class='col'>
            <h3>Troco</h3>
            <p>{troco}</p>
            <button
              className='confirm'
              onClick={() => setTroco(total) & setTotal(0)}
            >
              Confirmar
            </button>
            <button className='reset' onClick={() => setTotal(0) & setTroco(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
