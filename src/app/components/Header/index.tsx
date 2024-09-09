"use client"

import Link from "next/link";
// import Image from "next/image";
import { MainHeader } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <Link href="/" className="title"><h2><span>LS </span>Lacrei Saúde</h2></Link>

      <div className="btn">
        <Link target="_blanck" href="https://lacreisaude.com.br/quem-somos/"><button>Sobre</button></Link>
        <Link target="_blanck" href="https://lacreisaude.com.br/ajuda/" ><button>Ajuda</button></Link>
        <Link target="_blanck" href="https://lacreisaude.com.br/selecionar-pessoa/" ><button  className="log" >Entrar</button></Link>
      </div>

    </MainHeader>
  );
}