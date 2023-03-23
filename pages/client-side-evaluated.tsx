import React from "react";
import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";

interface ClientSideEvaluatedProps {
  stringMDX: string;
}

const Rendering = ({ evaluated }: { evaluated: any }) => {
    console.log("slkdfjsdlkfj", evaluated);


    return <>xarope</>;

//   return (
//     <MDXProvider>
//       {evaluated && evaluated()}
//     </MDXProvider>
//   );
};
export default function ClientSideEvaluated({
  stringMDX,
}: ClientSideEvaluatedProps) {
  //const Component = React.useMemo(() => getMDXComponent(currentPageMDX), [currentPageMDX])

  const evaluated = React.useMemo(
    () =>
      evaluateSync(stringMDX, {
        ...runtime,
        useMDXComponents,
        useDynamicImport: true,
        Fragment: "div",
      }),
    [stringMDX]
  );

 
  if (evaluated) {
    return <Rendering evaluated={evaluated.default} />;
  } else {
    return "Loading...";
  }

}

export const getServerSideProps = async () => {
  //  const stringMDX = `Bom dia! <Cta nome={"maris"} backgroundColor={"ligthgreen"}/> `;
  const stringMDX = `Bom dia!`;

  return {
    props: {
      stringMDX: stringMDX,
    },
  };
};
