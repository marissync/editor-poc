import React, { HTMLAttributes } from 'react'

export interface CtaProps {
    nome: string,
    backgroundColor: string
}

export default function Cta(props: CtaProps) {
  console.log("props", props)

  return (
    <div style={{backgroundColor: props.backgroundColor}}>
      Olá, {props.nome}!
      <br /> 
      <br />
      <br />
      The End
    </div>
  )
};