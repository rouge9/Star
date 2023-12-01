import { useState } from "react";

function Gallery() {
  const [modalImg, setModalImg] = useState("");
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

  return (
    <div>
      <div className="flex justify-center items-center pb-8 pt-8">
        <p className="text-6xl font-extrabold">Gallery</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4">
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover cursor-pointer"
            src={images[0].src}
            alt="Image Description"
            onClick={() => {
              setModalImg(images[0].src);
              document.getElementById("modal").showModal();
            }}
          />
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            alt="Image Description"
          />
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
            alt="Image Description"
          />
        </div>
      </div>
      <dialog id="modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="grid grid-cols-2 gap-2">
            <img
              className="w-full h-auto object-cover"
              src={modalImg}
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src={modalImg}
              alt="Image Description"
            />
          </div>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}

export default Gallery;
