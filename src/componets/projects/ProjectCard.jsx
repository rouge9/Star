/* eslint-disable react/prop-types */
function ProjectCard({ handleOnClick, title, subtitle, img }) {
  return (
    <div className="text-center cursor-pointer" onClick={handleOnClick}>
      <img
        className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto hover:scale-105 transition duration-300 ease-in-out"
        src={img}
        alt="Image Description"
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
          {title}
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
