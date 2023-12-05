function SimpleGallery() {
  return (
    <div className="max-w-screen-2xl  mx-auto p-10">
      <div className="pb-16 text-center">
        <p className="text-6xl font-bold">Gallery</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2"></div>
    </div>
  );
}

export default SimpleGallery;
