/* eslint-disable react/prop-types */
import Map from "./Map";

function Modal({ images, position, title, desc }) {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl font-bold">
            ✕
          </button>
        </form>
        <p className="font-bold text-lg text-center mb-4">{title}</p>
        <div className="grid grid-cols-2 gap-2 mb-3 rounded-md">
          {/* <img
            className="w-full h-56 md:h-80  rounded-md shadow-md"
            src={modalImg}
            alt="Image Description"
          /> */}
          <div className="relative">
            <img
              className="w-full h-56 md:h-72 rounded-md shadow-md"
              src={images[0]}
              alt="Image Description"
            />
            <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
              Before
            </p>
          </div>
          {/* <img
            className="w-full h-56 md:h-80 rounded-md shadow-md"
            // eslint-disable-next-line react/prop-types
            src={images[1].src}
            alt="Image Description"
          /> */}
          <div className="relative">
            <img
              className="w-full h-56 md:h-72 rounded-md shadow-md"
              // eslint-disable-next-line react/prop-types
              src={images[1]}
              alt="Image Description"
            />
            <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
              After
            </p>
          </div>
        </div>
        <p className="text-md mb-2">{desc}</p>
        <div className="rounded-xl shadow-md overflow-hidden mb-5 flex justify-center items-center">
          <Map position={position} />
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
