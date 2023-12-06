import { useState } from "react";
import Modal from "./Modal";
// import ImgContainer from "./ImgContainer";

function SimpleGallery() {
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
    <div className="max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Modal modalImg={modalImg} images={images} position={position} />

      <div className="flex justify-center items-center pb-8 pt-8">
        <p className="text-5xl font-bold">Gallery</p>
      </div>
      <div className="flex flex-wrap cursor-pointer">
        <div className="flex flex-wrap w-1/2">
          <div
            className="w-1/2 p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
              src="src\assets\gallery\test5.png"
              alt="test"
            />
          </div>
          <div
            className="w-1/2 p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
              src="src\assets\gallery\test4.webp"
              alt="test"
            />
          </div>
          <div
            className="w-full p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center"
              src="src\assets\gallery\test6.webp"
              alt="test"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div
            className="w-full p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center"
              src="src\assets\gallery\test4.webp"
              alt="test"
            />
          </div>
          <div
            className="w-1/2 p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
              src="src\assets\gallery\test5.png"
              alt="test"
            />
          </div>

          <div
            className="w-1/2 p-1 md:p-2"
            onClick={() => {
              handleImgClick([9.028293, 38.752438]);
            }}
          >
            <img
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
              src="src\assets\gallery\test6.webp"
              alt="test"
            />
          </div>
        </div>
      </div>
      <div className="divider mt-8">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="/gallery"
        >
          View more
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default SimpleGallery;
