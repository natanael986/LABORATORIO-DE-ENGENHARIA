import React, { useState } from "react";
import Counter1 from "../CONTADOR/Counter1";
import Counter2 from "../CONTADOR/Counter2";

// O método shouldComponentUpdate nos permite sair do
//  ciclo de vida de atualização de reação complexo para
//   evitar chamá - lo novamente e novamente em cada nova renderização.
//    Ele só atualiza o componente se os adereços passados ​​para ele mudarem.

// O método shouldComponentUpdate é usado principalmente para otimizar 
// o desempenho e aumentar a capacidade de resposta do site, mas não confie
//  nele para evitar a renderização, pois pode levar a bugs.
const ShouldComponentUpdate = () => {

  // Using useState hooks for defining state
  const [counter1, setCounter1] = useState(0);

  const increase1 = () => {
    setCounter1(counter1 + 1);
  };
  const [counter2, setCounter2] = useState(0);

  const increase2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div className="container">
      <div>
        <Counter1 value={counter1} onClick={increase1} />
      </div>
      <div>
        <Counter2 value={counter2} onClick={increase2} />
      </div>
    </div>
  );
};

export default ShouldComponentUpdate;