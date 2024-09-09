"use client"

import Link from "next/link";
// import Image from "next/image";
import { MainHeader } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <h2><span>LS </span>Lacrei Saúde</h2>

      <div className="btn">
        <Link href="https://lacreisaude.com.br/quem-somos/" >Sobre</Link>
        <Link href="https://lacreisaude.com.br/selecionar-pessoa/" >Login</Link>
        <button>Ajuda</button>
      </div>

    </MainHeader>
  );
}