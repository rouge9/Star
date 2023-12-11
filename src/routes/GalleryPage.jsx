import Layout from "../layout/Layout";
import ImgContainer from "../componets/ImgContainer";
import { images } from "../helper/Imges";
import { useState } from "react";
import Carsoule from "../componets/Carsoule";

function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(/hyperdrive.svg)`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10  lg:mb-14">
            <p className="text-3xl font-extrabold md:text-5xl inline-block bg-gradient-to-r from-blue-600  to-purple-600 text-transparent bg-clip-text">
              GALLERY
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {images.map((image, index) => (
              <ImgContainer
                key={index}
                img={image}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          {isModalOpen && (
            <Carsoule
              images={images}
              currentImageIndex={currentImageIndex}
              nextImage={nextImage}
              prevImage={prevImage}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default GalleryPage;
