"use client"

// import Image from "next/image";
import { MainHeader } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      {/* <Image src={"../../../public/logo.png"} alt="Logo Lacrei Saúde" width={100} height={18}></Image> */}
      {/* <Image src={"/src/public/logo.png"} alt="Logo Lacrei Saúde" width={1000} height={180}></Image> */}
      <h1><span>LS </span>Lacrei Saúde</h1>

      <div className="btn">
        <button>Sobre</button>
        <button>Login</button>
        <button>Ajuda</button>
      </div>

    </MainHeader>
  );
}