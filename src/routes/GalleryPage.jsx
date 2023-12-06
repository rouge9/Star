import Layout from "../layout/Layout";
import ImgContainer from "../componets/ImgContainer";
import { images } from "../helper/Imges";

function GalleryPage() {
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
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {images.map((img, index) => (
              <ImgContainer img={img} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GalleryPage;
