import React, { useState, useRef } from 'react';

import dados1 from '../../images/dado1.svg';
import dados2 from '../../images/dado2.svg';
import dados3 from '../../images/dado3.svg';
import dados4 from '../../images/dado4.svg';
import dados5 from '../../images/dado5.svg';
import dados6 from '../../images/dado6.svg';

import './Dices.css';

function Dices() {
     const [result , setResult]= useState('Clique no botão abixo para iniciar');
     const [history, setHistory]= useState([]);

     const user1 = useRef(null);
     const user2 = useRef(null);
     const resultDice = useRef(null);
     const titleHistoryResult = useRef(null);

     let diceImages = [dados1, dados2, dados3, dados4, dados5, dados6];

     const roll = () => {

      const firstRandomNum = Math.floor(Math.random() * 6);

      const secundRandomNum = Math.floor(Math.random() * 6);

      if (firstRandomNum > secundRandomNum) {
        setResult(`O Vencedor foi o jogador 1 com ${firstRandomNum + 1} pontos`);
        setHistory([
          ...history,
          {
            id: history.length,
            value: `O jogador 1 venceu com ${firstRandomNum + 1} pontos`,
          },
        ])
      }
      if (firstRandomNum < secundRandomNum) {
        setResult(`O Vencedor foi o jogador 2 com ${secundRandomNum + 1} pontos`);
        setHistory([
          ...history,
          {
            id: history.length,
            value: `O jogador 2 venceu com ${secundRandomNum + 1} pontos`,
          },
        ])
      }
     }

  return (
    <div>Dices</div>
  )
}

export default Dices