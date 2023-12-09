/* eslint-disable react/prop-types */
function Carsoule({
  images,
  currentImageIndex,
  nextImage,
  prevImage,
  closeModal,
}) {
  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-0 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="bg-fixed fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={closeModal}
        >
          <button
            className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 cursor-pointer text-3xl hover:text-gray-300"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-96 h-96 lg:w-[60rem] lg:h-[40rem] mx-auto">
          <img
            src={images[currentImageIndex]}
            className="w-full h-full"
            alt="Current"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            ❮
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carsoule;
