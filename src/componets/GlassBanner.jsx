function GlassBanner() {
  return (
    <div className="backdrop-blur-sm bg-slate-600/[.6]">
      <div className="max-w-full  px-4 py-4 sm:px-4 lg:px-4 ">
        <div className="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <svg
              className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="6"
                fill="currentColor"
                className="fill-blue-600"
              />
              <path
                d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="20" cy="19.5214" r="5" fill="white" />
            </svg>

            <div className="grow">
              <p className="md:text-xl text-gray-800 font-semibold dark:text-gray-200">
                Get started today.
              </p>
              <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                Sign up to get unlimited updates.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-7">
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
                  Call us
                </h3>
                <p className="mt-1 text-white  hover:text-gray-800 0 cursor-pointer">
                  +1242445566
                </p>
              </div>
            </div>
          </div>

          {/* <div className="text-center sm:text-start flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Free trial
            </a>
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Buy now
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default GlassBanner;
