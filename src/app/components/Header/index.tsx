"use client"

import Link from "next/link";
// import Image from "next/image";
import { MainHeader } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <h2><span>LS </span>Lacrei Saúde</h2>

      <div className="btn">
        <Link target="_blanck" href="https://lacreisaude.com.br/quem-somos/"><button>Sobre</button></Link>
        <Link target="_blanck" href="https://lacreisaude.com.br/selecionar-pessoa/" ><button>Login</button></Link>
        <Link target="_blanck" href="https://lacreisaude.com.br/selecionar-pessoa/" ><button  className="log" >Login</button></Link>
      </div>

    </MainHeader>
  );
}