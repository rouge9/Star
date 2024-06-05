import { useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

export default function Cta() {
  const [isHover, setIsHover] = useState(false);
  const { scrollYProgress } = useScroll();
  const grow = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div className="flex justify-center items-center bg-foreground rounded-3xl p-8 2xl:p-0">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl text-secondary text-center lg:text-start text-wrap font-extrabold">
          Easy Way to manage your Finances
        </h1>
        <p className="text-lg md:text-lg text-muted-foreground text-center lg:text-start pt-2 md:pt-6">
          Easy to use mobile app that support on android and ios
        </p>
        <div className="flex justify-center items-center lg:justify-start lg:items-start space-x-4 pt-2 md:pt-8">
          <a
            href="https://github.com/rouge9/expense_monitor/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex space-x-3 lg:space-x-4 bg-secondary rounded-xl p-4  hover:bg-muted-foreground cursor-pointer justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="33"
                viewBox="0 0 512 512"
              >
                <path
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col">
                <p className=" text-sm text-foreground font-normal">
                  Get it on
                </p>
                <p className=" text-xl text-foreground font-normal">
                  Play Store
                </p>
              </div>
            </div>
          </a>
          <div
            className="hidden sm:flex lg:space-x-4 bg-secondary rounded-xl p-4  hover:bg-muted-foreground cursor-pointer justify-center items-center"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <svg
              width="26"
              height="33"
              viewBox="0 0 26 33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                fill="black"
              />
            </svg>
            <div className="flex flex-col">
              <p className=" text-sm text-foreground font-normal">
                {isHover ? "" : "Download on the"}
              </p>
              <p className="text-xl text-foreground font-normal">
                {isHover ? "Coming Soon" : "App Store"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <motion.img
          src="/cta.svg"
          alt="cta"
          className="
        w-full
        "
          style={{ scale: grow }}
        />
      </div>
    </div>
  );
}
