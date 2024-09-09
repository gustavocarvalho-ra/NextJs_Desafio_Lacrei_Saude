"use client"

import { MainHeader } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <h1><span>LS </span>Lacrei Saúde</h1>

      <div className="btn">
        <button>Sobre</button>
        <button>Login</button>
        <button>Ajuda</button>
      </div>

    </MainHeader>
  );
}