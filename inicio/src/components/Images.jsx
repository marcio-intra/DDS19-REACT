import React from 'react'
import Spfc from "../assets/sao paulo campeao.jpg"

const Images = () => {
  console.log(Spfc)
    return (
    <div>
        <h1>Imagens</h1>
        <h2>Subtìtulo de imagens</h2>
        {/* Imagem na pasta pública */}
        <img src='./cris e ney.jpg' width={500} height={500}></img>
        {/* Imagem vindo da pasta assets */}
        <img src={Spfc} width={900} height={500}></img>
    </div>
  )
}

export default Images