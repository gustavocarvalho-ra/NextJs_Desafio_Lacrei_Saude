"use client"

import { MainFooter } from "./styles";

export default function Footer() {
  return (
    <MainFooter>
      <div className="container">
        <div className="fot">
          <h3>
            Lacrei Saúde
          </h3>
          <ul>Quem somos</ul>
          <ul>Nosso Propósito</ul>
          <ul>Missão, Visão e Valor</ul>
          <ul>Acessibilidade</ul>
        </div>
        <div className="fot">
          <h3>
            Saúde
          </h3>
          <ul>Buscar atendimento</ul>
          <ul>Oferecer atendimento</ul>
        </div>
        <div className="fot">
          <h3>
            Segurança e Privacidade
          </h3>
          <ul>Política de Privacidade</ul>
          <ul>Termos de Uso</ul>
          <ul>Direitos de Titular</ul>
        </div>
      </div>
    </MainFooter>
  )
}