import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ron Hagafny</title>
        <meta
          name='description'
          content='My name is Ron Hagafny and this is my space on the web'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
