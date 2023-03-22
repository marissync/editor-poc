import React from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";

interface Props {
  stringMDX: string;
  evaluated: any;
}

export default function ArtFinal({ stringMDX,  evaluated}: Props) {
  console.log("evaluated",evaluated);

  return <div>Teste</div>;
}

export const getServerSideProps = async () => {
  const mdxTeste = `<Cta nome={"maris"} backgroundColor={"lightcoral"}/>`;

  const result = await evaluate(mdxTeste, {
    ...runtime,
    useMDXComponents,
    useDynamicImport: true,
    Fragment: "div",
  });

  //console.log("result", result);

  return {
    props: {
      stringMDX: mdxTeste,
      evaluated: result?.default
    },
  };
};
