import { useState } from "react";
import Modal from "../componets/Modal";
import Layout from "../layout/Layout";

function Projects() {
  const [modalImg, setModalImg] = useState("");
  const [position, setPosition] = useState([9.03314, 38.75008]); // [lat, lng]
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    },
  ];

  const handleImgClick = (p) => {
    setModalImg(images[0].src);
    setPosition(p);
    document.getElementById("modal").showModal();
  };
  return (
    <Layout>
      <Modal modalImg={modalImg} images={images} position={position} />
      <div
        style={{
          backgroundImage: `url(/hyperdrive.svg)`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10  lg:mb-14">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
              Projects
            </h2>
          </div>

          <p className="text-gray-600 text-lg font-bold">
            Lorem ipsum dolor sit amet,
          </p>
          <div className="divider"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div
              className="text-center cursor-pointer"
              onClick={() => {
                handleImgClick([9.028293, 38.752438]);
              }}
            >
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto hover:scale-105 transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
                  David Forren
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                  Founder / CEO
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Amil Evara
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  UI/UX Designer
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Ebele Egbuna
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Support Consultant
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Maria Powers
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Director of sales
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-lg font-bold mt-8">
            Lorem ipsum dolor sit amet,
          </p>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div
              className="text-center cursor-pointer"
              onClick={() => {
                handleImgClick([9.028293, 38.752438]);
              }}
            >
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto hover:scale-105 transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
                  David Forren
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                  Founder / CEO
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Amil Evara
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  UI/UX Designer
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Ebele Egbuna
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Support Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
