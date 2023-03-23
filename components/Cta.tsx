import React, { HTMLAttributes } from 'react'

export interface CtaProps {
    nome: string,
    backgroundColor: string
}

export function Cta(props: CtaProps) {
  return (
    <div style={{backgroundColor: props.backgroundColor ?? "grey"}}>            
      <h2>The Begin of CTA</h2>
      <p>Olá, {props.nome ?? "Nenhum nome foi passado"}!</p>
      <h2>The End of CTA</h2>
      <hr />
    </div>
  )
};