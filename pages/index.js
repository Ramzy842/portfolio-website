import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Work/Projects";
import tech from "../data/tech";
import projects from "../data/projects";
import Experience from "../components/Experience/Experience";
import jobs from "../data/jobs";
import Contact from "../components/Contact";

export default function Home({ technologies, projects, jobs }) {
  return (
    <div>
      <Head>
        <title>Portfolio | Ramzi Chahbani | Frontend Developer</title>
      </Head>
      <Hero technologies={technologies} />
      <Projects projects={projects} />
      <Experience technologies={technologies} jobs={jobs} /> 
      <Contact />
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      technologies: tech,
      projects,
      jobs,
    },
  };
};
