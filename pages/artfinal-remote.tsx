import React from "react";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Cta } from '../components/Cta';
import matter from "gray-matter";

const components = { Cta }

interface Props {
  mdxCompiledContent: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export default function ArtFinalRemote({ mdxCompiledContent }: Props) {
  // console.log(mdxCompiledContent);
  return (
    <div className="wrapper">
      <MDXRemote {...mdxCompiledContent} components={components} />
    </div>
  )
}

export const getServerSideProps = async () => {
  // MDX text - can be from a local file, database, anywhere

  const source = `---
  179320a5-7e6d-433e-bc5a-addb4e91ca39:    
    nome: Maristela Tela
    backgroundColor: blue   
---

  
     Home!
      <Cta       
        nome={frontmatter["179320a5-7e6d-433e-bc5a-addb4e91ca39"].nome} 
        backgroundColor={frontmatter["179320a5-7e6d-433e-bc5a-addb4e91ca39"].backgroundColor}
      />`;


  const mdxSource = await serialize(source, {  
    scope: {

    }, //settings
    parseFrontmatter: true,
     mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    },
  });
  
  // console.log("source", mdxSource);
  return { props: { mdxCompiledContent: mdxSource } }
};
