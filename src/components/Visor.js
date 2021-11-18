import { useState } from 'react';

function Visor(props) {
  const [troco, setTroco] = useState(0);

  return (
    <div className='visor'>
      <h2>{props.troco}</h2>
    </div>
  );
}

export default Visor;
