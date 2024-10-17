import CallToActions from "./CallToActions";
import DemoItems from "./DemoItems";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";

const index = () => {
  return (
    <>
      <Hero />
      {/* End preview Hero*/}

      <section
        className="bg-[#000000] bg-no-repeat bg-center bg-cover bg-fixed"
        id="demo"
      >
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#c94ff8] text-[32px] md:text-[45px] font-semibold ">
            Home Demo
          </h1>
          <img
            className=" block mx-auto "
            src="/images/preview/preview.png"
            alt="demo"
          />

          <h3 className="text-[22px] md:text-[32px] font-semibold text-[#ddd]">
            04 Awesome Light & Dark Demo
          </h3>

          <p className="text-md text-[#aaa] font-normal w-full md:w-2/3 lg:w-[50%] mx-auto mt-2.5 ">
            Bostami build with Modern, Elegant & Beautiful trendng <br />
            technology like Tailwind CSS and React NextJS.
          </p>
        </div>
        {/* End .container */}
        <DemoItems />
      </section>
      {/* End Main preview demo */}

      <Features />
      {/* Features section start */}

      <CallToActions />
      {/* Call to actions start */}

      <Footer />
      {/* End footer */}
    </>
  );
};

export default index;
