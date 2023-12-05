function Banner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500 rounded-ee-3xl">
      <div className="max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8 mx-auto rounded-se-lg">
        <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
          <div className="text-center md:text-start">
            <p className="text-2xl font-bold text-white/[.8] uppercase tracking-wider">
              Star General Painting
            </p>
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-3">
              <svg
                className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <p className="mt-1 text-white font-medium text-start">Email:</p>
              <p className="mt-1 text-white font-medium text-start hover:text-gray-800 0 cursor-pointer">
                starpainting@gmail.com
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <svg
                className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <p className="mt-1 text-white font-medium text-start">Call us:</p>
              <div className="flex flex-col">
                <p className="mt-1 text-white font-medium text-start">
                  +251 912 345 678
                </p>
                <p className="mt-1 text-white font-medium text-start">
                  +251 912 345 678
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
            <div className="flex pl-10">
              <svg
                className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="ms-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 ">
                  Email
                </h3>
                <p className="mt-1 text-white  hover:text-gray-800 0 cursor-pointer">
                  starpainting@gmail.com
                </p>
              </div>
            </div>
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="ms-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 ">
                  Call Us
                </h3>
                <p className="mt-1 text-white  hover:text-gray-800 0 cursor-pointer">
                  +1242445566
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
