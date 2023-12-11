import { useState } from "react";
import Modal from "../componets/Modal";
import Layout from "../layout/Layout";
import ProjectCard from "../componets/projects/ProjectCard";
import { contructor1, contructor2 } from "../data/ProjectData";

function Projects() {
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState([9.03314, 38.75008]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleImgClick = ({ p, img, title, desc }) => {
    setImages(img);
    setPosition(p);
    setTitle(title);
    setDesc(desc);
    document.getElementById("modal").showModal();
  };
  return (
    <Layout>
      <Modal images={images} position={position} title={title} desc={desc} />
      <div
        style={{
          backgroundImage: `url(/hyperdrive.svg)`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10  lg:mb-14">
            <p className="text-3xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              PROJECTS
            </p>
          </div>

          <p className="text-gray-600 text-lg font-bold">Contrcutor 1</p>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {contructor1.map((project) => (
              <ProjectCard
                key={project.id}
                handleOnClick={() =>
                  handleImgClick({
                    p: project.position,
                    img: project.images,
                    title: project.title,
                    desc: project.description,
                  })
                }
                title={project.title}
                subtitle={project.subtitle}
                img={project.img}
              />
            ))}
          </div>
          <p className="text-gray-600 text-lg font-bold">Contrcutor 2</p>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {contructor2.map((project) => (
              <ProjectCard
                key={project.id}
                handleOnClick={() =>
                  handleImgClick({
                    p: project.position,
                    img: project.images,
                    title: project.title,
                    desc: project.description,
                  })
                }
                title={project.title}
                subtitle={project.subtitle}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
