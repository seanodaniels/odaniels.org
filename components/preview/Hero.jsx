const Hero = () => {
  return (
    <section className="bg-previewBg bg-no-repeat bg-center  bg-cover">
      <div className="text-center pt-[100px] pb-[90px] h-[80vh] md:h-[100vh] flex items-center justify-center flex-col">
        {/* Site logo */}
        <img
          className="inline-block h-[26px] lg:h-[46px]"
          src="/images/logo/logo-preview.png"
          alt="logo"
          data-aos="fade"
        />
        <p
          className="font-extrabold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[20px] "
          data-aos="fade"
        >
          Modern,Trending & Creative Portfolio
          <br className="md:block hidden " />
          <span className="text-[#c94ff8]">Tailwind CSS</span> &{" "}
          <span className="text-[#c94ff8]">React NextJS</span>
        </p>

        <div className="flex mt-6 justify-center">
          <a
            href="#demo"
            className="flex-shrink-0 inline-flex mr-3 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#c94ff8] to-[#a803e2] hover:bg-gradient-to-l rounded-full shadow-md"
          >
            View Demos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              ></path>
            </svg>
          </a>

          <a
            href="https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 rounded-full bg-indigo-50 text-black-900 shadow-md hover:bg-slate-50 text-black"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
