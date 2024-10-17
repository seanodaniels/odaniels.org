import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src="/images/about/about-sean.jpg"
          width={300}
          height={400}
          alt="routePath"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am i?
          </h3>
          {/* <p className="text-gray-lite  dark:text-color-910 leading-7">
            I&apos;m Creative Director and UI/UX Designer from Sydney,
            Australia, working in web development and print media. I enjoy
            turning complex problems into simple, beautiful and intuitive
            designs.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p> */}
          <p className="text-gray-lite  dark:text-color-910 leading-7">
            I&apos;m a long-time Web Developer who has recently made the transition 
            to <strong>Software Engineering</strong>. In 2024, I completed the
            Full Stack Open course at the University of Helsinki, giving my 
            passion for coding the education it craved. I am looking for a new 
            home in order to practice and improve my knowledge in real-world
            situations.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            To get a feel for my work, hop over to my <a className="text-[#c94ff8] 
            hover:underline" href="/works">portfolio 
            section</a> to take a look at my projects, or you can visit 
            my <a className="text-[#c94ff8] hover:underline"
             href="https://www.github.com/seanodaniels">GitHub page</a> to see
            my repositories.
          </p>          
        </div>

      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
