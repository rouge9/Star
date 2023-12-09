import { useEffect, useState } from "react";

function FloatingNavBar() {
  const [open, setOpen] = useState(true);
  const [tag, setTag] = useState(window.location.hash);
  const path = window.location.pathname;

  useEffect(() => {
    if (tag === "#services" && path === "/") {
      document.getElementById("services").scrollIntoView();
    }
  }, [tag, path]);

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm top-0 sticky">
      <nav
        className="mt-6 relative max-w-[85rem] w-full bg-white border backdrop-blur-sm bg-white/90 border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold"
            href="/"
            aria-label="Brand"
          >
            Star Painting
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full  text-gray-800 md:hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
              onClick={() => {
                document
                  .getElementById("navbar-collapse-with-animation")
                  .classList.toggle("hidden");
                setOpen(!open);
              }}
            >
              {open ? (
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#929292"
                    d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <a
              className={`font-medium text-gray-500 hover:text-gray-400 md:py-6 ${
                tag === "" && path === "/" && "text-red-900"
              }`}
              href="/"
            >
              Home
            </a>
            <a
              className={`font-medium text-gray-500 hover:text-gray-400 md:py-6 ${
                path === "/projects" && "text-red-900"
              }`}
              href="/projects"
            >
              Projects
            </a>
            <a
              className={`font-medium text-gray-500 hover:text-gray-400 md:py-6 ${
                path === "/gallery" && "text-red-900"
              }`}
              href="/gallery"
            >
              Gallery
            </a>
            <a
              className={`font-medium text-gray-500 hover:text-gray-400 md:py-6 ${
                tag === "#services" && "text-red-900"
              }`}
              href="/#services"
              onClick={() => {
                setTag("#services");
                document
                  .getElementById("navbar-collapse-with-animation")
                  .classList.toggle("hidden");
                setOpen(!open);
              }}
            >
              Services
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default FloatingNavBar;
