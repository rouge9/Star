import { Fragment, useEffect, useState } from "react";

function Footer() {
  const [tag, setTag] = useState(window.location.hash);
  const path = window.location.pathname;

  useEffect(() => {
    if (tag === "#services" && path === "/") {
      document.getElementById("services").scrollIntoView();
    }
  }, [tag, path]);
  return (
    <Fragment>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Star General Painting
            <br />
            Trusted Painting Company
          </p>
          <div className="mt-3">
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-100 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </a>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Interior and Exterior Painting</a>
          <a className="link link-hover">Contextra</a>
          <a className="link link-hover">Granite Painting</a>
          <a className="link link-hover">
            Jotun Prodcuts <span className="badge badge-outline">New</span>
          </a>
          <a className="link link-hover">Epoxy Flooring</a>
        </nav>
        <nav>
          <header className="footer-title">Links</header>
          <a
            className={`
            link link-hover  ${tag === "" && path === "/" && "link-info"}
          `}
            href="/"
          >
            Home
          </a>
          <a
            className={`link link-hover  ${
              path === "/projects" && "link-info"
            }`}
            href="/projects"
          >
            Projects
          </a>
          <a
            className={`link link-hover  ${path === "/gallery" && "link-info"}`}
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className={`link link-hover  ${tag === "#services" && "link-info"}`}
            href="/#services"
            onClick={() => {
              setTag("#services");
            }}
          >
            Services
          </a>
        </nav>
        <nav>
          <header className="footer-title">Contact us</header>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              id="envelope-open"
            >
              <path
                fill="#1F2937"
                d="M20.21,8.82h0l0,0h0L14,2.78a2.83,2.83,0,0,0-3.9,0l-6.21,6h0v0A2.6,2.6,0,0,0,3,10.71v8.58A2.75,2.75,0,0,0,5.78,22H18.22A2.75,2.75,0,0,0,21,19.29V10.71A2.67,2.67,0,0,0,20.21,8.82Zm-8.77-4.6a.83.83,0,0,1,1.12,0L18,9.5l-5.47,5.28a.83.83,0,0,1-1.12,0L6,9.5ZM19,19.29a.76.76,0,0,1-.78.71H5.78A.76.76,0,0,1,5,19.29V11.35l4.05,3.9-1.66,1.6a1,1,0,0,0,0,1.41,1,1,0,0,0,.72.31,1,1,0,0,0,.69-.28l1.77-1.7a2.8,2.8,0,0,0,2.92,0l1.77,1.7a1,1,0,0,0,.69.28,1,1,0,0,0,.72-.31,1,1,0,0,0,0-1.41L15,15.25l4-3.9Z"
              ></path>
            </svg>
            <a className="link link-hover" href="mailto:starpainting@gmail.com">
              starpainting@gmail.com
            </a>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              id="phone"
            >
              <path
                fill="#1F2937"
                d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"
              ></path>
            </svg>
            <div className="flex flex-col">
              <a className="link link-hover" href="tel:+251911977351">
                +251 911 97 73 51
              </a>
              <a className="link link-hover" href="tel:+251941191613">
                +251 941 19 16 13
              </a>
              <a className="link link-hover" href="tel:+251948494901">
                +251 948 49 49 01
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              id="location-point"
            >
              <path
                fill="#1F2937"
                d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
              ></path>
            </svg>
            <a
              className="link link-hover"
              href="https://www.google.com/maps/place/M+%26+S+Building+%7C+Wesen+%7C+%E1%8A%A4%E1%88%9D+%26+%E1%8A%A4%E1%88%B5+%E1%88%85%E1%8A%95%E1%8C%BB+%7C+%E1%8B%88%E1%88%B0%E1%8A%95/@9.0316892,38.8408137,17.67z/data=!4m14!1m7!3m6!1s0x164b9184d117fcef:0xb27a5d9291b05f10!2zV2VzZW4gUm9hZCBOb2MgfCDhi4jhiLDhipUg4YiY4YqV4YyI4Yu1IOGKluGKrQ!8m2!3d9.0291708!4d38.8356505!16s%2Fg%2F11rkp01674!3m5!1s0x164b910794ad7b99:0x232e0dd4952d4981!8m2!3d9.0326666!4d38.8431552!16s%2Fg%2F11hj5qq0cw?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              M & S Building 3rd Floor | Wesen | Addis Ababa | Ethiopia
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer p-10 bg-base-200 text-base-content footer-center">
        <aside>
          <p>{`
              Copyright © ${new Date().getFullYear()} - All right reserved by Star General Painting
            `}</p>
        </aside>
      </footer>
    </Fragment>
  );
}

export default Footer;
