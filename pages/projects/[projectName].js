import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ProjectImage from "../../components/Work/SingleProject/ProjectImage";
import Details from "../../components/Work/SingleProject/Details";
import Technologies from "../../components/Work/SingleProject/Technologies";
import projects from "../../data/projects";

const ProjectPage = ({ project }) => {
  const [index, setIndex] = useState(0);
  const [mainImage, setMainImage] = useState(project.screenshots[index]);
  const lengthOfImages = project.screenshots.length;

  const getNextImage = () => {
    if (index === lengthOfImages - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };
  const getPrevImage = () => {
    if (index === 0) {
      setIndex(lengthOfImages - 1);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    setMainImage(project.screenshots[index]);
  }, [index, project.screenshots]);
  return (
    <>
      <Head>
        <title>
        {"Projects | "  + project.title}
        </title>
      </Head>
      <div className="min-h-screen">
        <div className="mx-auto container  h-full pt-20 ">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-6 px-4 md:px-0 max-w-7xl mx-auto gap-8">
              <div className="flex flex-col items-center md:col-span-2">
                <ProjectImage image={mainImage} />
                <div className="flex justify-center items-center my-2">
                  <button
                    className="text-white flex bg-prev-next py-1 px-4 mr-4 items-center rounded-sm font-semibold"
                    onClick={getPrevImage}
                  >
                    <div className="flex">
                      <Image
                        src="/assets/icons/prev.svg"
                        height={20}
                        width={20}
                        alt="prev"
                      />
                    </div>
                    Previous
                  </button>
                  <button
                    className="text-white flex bg-prev-next py-1 px-4 items-center rounded-sm font-semibold"
                    onClick={getNextImage}
                  >
                    Next
                    <div className="flex">
                      <Image
                        src="/assets/icons/next.svg"
                        height={20}
                        width={20}
                        alt="next"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 ">
                <Details
                  setMainImage={setMainImage}
                  links={project.links}
                  screenshots={project.screenshots}
                  description={project.description}
                  setIndex={setIndex}
                  title={project.title}
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mt-4 mx-4 md:mx-auto">
            <div className="">
              
              <Technologies tech={project.tech} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = () => {
  const paths = projects.map((project) => {
    return {
      params: {
        projectName: project.title.toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const { projectName } = params;
  const project = projects.find(
    (project) => project.title.toLowerCase() === projectName
  );

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
