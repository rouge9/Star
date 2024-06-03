export default function Footer() {
  return (
    <footer className="pt-16">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="hidden lg:flex flex-col">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-7 h-7" />
            <p className="text-2xl font-bold">Expanse</p>
          </div>
          <div className="flex gap-3 py-16">
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-20 gap-8 lg:gap-0">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg 2xl:text-2xl font-bold text-zinc-800">
              About us
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800  2xl:text-xl">Our Story</li>
              <li className="text-zinc-800 ">Our Team</li>
              <li className="text-zinc-800 ">Careers</li>
              <li className="text-zinc-800 ">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Prodcuts
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Credits Card</li>
              <li className="text-zinc-800 ">Gift Cards </li>
              <li className="text-zinc-800 ">Savings account</li>
              <li className="text-zinc-800 ">NFT</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Free rewards</li>
              <li className="text-zinc-800 ">Documentation</li>
              <li className="text-zinc-800 ">Documentation</li>
              <li className="text-zinc-800 ">Affliation program</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 pr-44">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Social
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Change log</li>
              <li className="text-zinc-800 ">Licence</li>
              <li className="text-zinc-800 ">Site Maps</li>
              <li className="text-zinc-800 ">News</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:hidden pt-7 justify-center items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-7 h-7" />
            <p className="text-2xl font-bold">Expanse</p>
          </div>
          <div className="flex gap-3 py-3">
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="#" className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:pt-16">
        <p className="text-sm text-zinc-800">
          &copy; {new Date().getFullYear()} Expanse. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
