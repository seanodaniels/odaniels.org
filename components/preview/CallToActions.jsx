const CallToActions = () => {
  return (
    <>
      {/* Start Call To Actions */}
      <section className="text-center bg-[#000] py-[120px] ">
        <p
          data-aos="fade"
          className="font-bold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[40px] mx-auto max-w-4xl px-4 "
        >
          Purchase Bostami & Build Your Dream Portfolio{" "}
          <span className="text-[#c94ff8]">React NextJS</span> &{" "}
          <span className="text-[#c94ff8]">Tailwind CSS</span> Portfolio
          Template.
        </p>

        <a
          href="https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex mt-8 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#c94ff8] to-[#a803e2] hover:bg-gradient-to-l rounded-full shadow-md"
        >
          Purchase Now
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
      </section>
      {/* End call to action */}
    </>
  );
};

export default CallToActions;
