import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Work/Projects";
import tech from "../data/tech";
import projects from "../data/projects";
import Experience from "../components/Experience/Experience";
import jobs from "../data/Jobs";
import Contact from "../components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image"
import "swiper/css";
export default function Home({ technologies, projects, jobs }) {
  return (
    <div>
      <Head></Head>
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
