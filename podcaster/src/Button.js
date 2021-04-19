import { useState } from 'react';

export default function Button(props) {
  const [counter, setCounter] = useState(1);
  // useState retorna array [estado, funçãoAlterarEstado]

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <span>trololo</span>
      <button onClick={increment}>{props.children}</button>
      <br />
    </>
  );
}
