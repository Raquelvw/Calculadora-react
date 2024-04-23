import React, { useState } from "react";
import styled from "styled-components";
const Botao = styled.button`
  border-radius: 30px;
  border: none;
  background-color: purple;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 10px;
  font-size: 40px
  padding-bottom:20vh;
  ;
`;
const Section = styled.section`
  margin-left: 40vw;
  algin-items: center;
`;
const H1 = styled.h1`
  color: white;
`;
const Div = styled.div`
  background-image: linear-gradient(
    180deg,
    #7d4159 0,
    #773959 12.5%,
    #6f3159 25%,
    #652859 37.5%,
    #591f59 50%,
    #4b185a 62.5%,
    #3a135b 75%,
    #24125d 87.5%,
    #00125f
  );
  backgound-repeat: no-repeat;
  background-size: 100 100%
  background-repeat: no-repeat;
  background-position: center;
  height: 150vh;
`;

const SessaoUm = styled.section`
  margin-left: 40vw;
`;
const SessaoDois = styled.section`
  margin-left: 40vw;
`;
const SessaoTreis = styled.section`
  margin-left: 40vw;
`;
const SessaoQuatro = styled.section`
  margin-left: 40vw;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState("");

  const [segundoValor, setSegundoValor] = useState("");

  const [operador, setOperador] = useState("");

  const [resultado, setResultado] = useState("");

  const CapturarValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };
  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const CapturarValorBotoes = (item) => {
    if (operador === "") {
      setPrimeiroValor(primeiroValor + item.target.value);
    } else {
      setSegundoValor(segundoValor + item.target.value);
    }
  };

  const Soma = () => {
    setOperador("+");
  };
  const Subtração = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const Multiplicação = () => {
    setOperador("*");
  };
  const Division = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const Calculo = () => {
    if (operador === "*") {
      setResultado(primeiroValor * segundoValor);
    } else if (operador === "+") {
      setResultado(primeiroValor + segundoValor);
    }
  };

  console.log(Number("12") + Number("5"));
  return (
    <Div>
      <Section>
        <H1>Calculadora</H1>
        <input type="number" onChange={CapturarValor} value={primeiroValor} />
        <input
          type="number"
          onChange={CapturarSegundoValor}
          value={segundoValor}
        />
        <h1>{resultado}</h1>
      </Section>
      <SessaoUm>
        <Botao onClick={CapturarValorBotoes} value="7">
          7
        </Botao>
        <Botao onClick={CapturarValorBotoes} value="8">
          8
        </Botao>
        <Botao onClick={CapturarValorBotoes} value="9">
          9
        </Botao>
        <Botao onClick={Subtração}>-</Botao>
      </SessaoUm>
      <SessaoDois>
        <Botao onClick={CapturarValorBotoes} value="4">
          4
        </Botao>
        <Botao onClick={CapturarValorBotoes} value="5">
          5
        </Botao>
        <Botao onClick={() => "6"}>6</Botao>
        <Botao onClick={Division}>÷</Botao>
      </SessaoDois>
      <SessaoTreis>
        <Botao onClick={() => "1"}>1</Botao>
        <Botao onClick={() => "2"}>2</Botao>
        <Botao onClick={() => "3"}>3</Botao>
        <Botao onClick={Soma}>+</Botao>
      </SessaoTreis>

      <SessaoQuatro>
        <Botao onClick={() => "AC"}>AC</Botao>
        <Botao onClick={() => "%"}>%</Botao>
        <Botao onClick={Calculo}>=</Botao>
        <Botao onClick={Multiplicação}>*</Botao>
      </SessaoQuatro>
    </Div>
  );
}
