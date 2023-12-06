/* eslint-disable react/prop-types */
function ImgContainer({ img, onClick }) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        onClick(img);
      }}
    >
      <img
        className="rounded-xl w-48 h-48 lg:w-80 lg:h-80 mx-auto hover:scale-105 transition duration-300 ease-in-out"
        src={img}
        alt="Image Description"
      />
    </div>
  );
}

export default ImgContainer;
