import { useState } from "react";
import Modal from "./Modal";
import { galleryData } from "../data/GalleryData";

function Gallery() {
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
    <div className="max-w-screen-2xl py-10 lg:py-14 mx-auto">
      <div className="flex justify-center items-center pb-8 pt-8">
        <p className="text-5xl font-bold">Gallery</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4">
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img1.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img1.position,
                img: galleryData.img1.images,
                title: galleryData.img1.title,
                desc: galleryData.img1.description,
              });
            }}
          />
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img2.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img2.position,
                img: galleryData.img2.images,
                title: galleryData.img2.title,
                desc: galleryData.img2.description,
              });
            }}
          />
          <img
            className="w-full h-28 md:h-56 object-cover cursor-pointer  rounded-md"
            src={galleryData.img3.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img3.position,
                img: galleryData.img3.images,
                title: galleryData.img3.title,
                desc: galleryData.img3.description,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img4.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img4.position,
                img: galleryData.img4.images,
                title: galleryData.img4.title,
                desc: galleryData.img4.description,
              });
            }}
          />
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img5.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img5.position,
                img: galleryData.img5.images,
                title: galleryData.img5.title,
                desc: galleryData.img5.description,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img6.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img6.position,
                img: galleryData.img6.images,
                title: galleryData.img6.title,
                desc: galleryData.img6.description,
              });
            }}
          />
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img7.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img7.position,
                img: galleryData.img7.images,
                title: galleryData.img7.title,
                desc: galleryData.img7.description,
              });
            }}
          />
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img8.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img8.position,
                img: galleryData.img8.images,
                title: galleryData.img8.title,
                desc: galleryData.img8.description,
              });
            }}
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img9.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img9.position,
                img: galleryData.img9.images,
                title: galleryData.img9.title,
                desc: galleryData.img9.description,
              });
            }}
          />
          <img
            className="w-full h-auto object-cover cursor-pointer  rounded-md"
            src={galleryData.img10.img}
            alt="Image Description"
            onClick={() => {
              handleImgClick({
                p: galleryData.img10.position,
                img: galleryData.img10.images,
                title: galleryData.img10.title,
                desc: galleryData.img10.description,
              });
            }}
          />
        </div>
      </div>
      <Modal images={images} position={position} title={title} desc={desc} />
      <div id="services" className="divider mt-8 md:mt-5">
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

export default Gallery;
