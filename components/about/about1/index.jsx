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
          src="/images/about/inside-02.jpg"
          width={300}
          height={400}
          alt="routePath"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          {/* <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am i?
          </h3> */}
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
            I&apos;m a long-time Web Developer who has recently transitioned 
            to <strong>Software Engineering</strong> after completing the
            Full Stack Open course at the University of Helsinki. My current 
            focus is the <strong>React library using Javascript and Typescript</strong>. 
            
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">I always 
            seek to challenge &amp; improve myself, be it through bettering
            my programming skills, learning new languages and databases, 
            or <a 
              className="text-[#c94ff8] hover:underline" 
              href="https://www.youtube.com/watch?v=PgUPfIF-Dpg&list=PLBV1Kbsc4iMBiXgzgd9vvVZ0PUNFB6YCm&index=12" 
              target="_blank"
            >defeating Elden Ring bosses without advancing past level 1</a>.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            To see how I have implemented my SWE knowledge, check out my <a 
              className="text-[#c94ff8] hover:underline" 
              href="/works"
            >personal projects</a>, or visit  
            my <a className="text-[#c94ff8] hover:underline"
             href="https://www.github.com/seanodaniels">GitHub repos</a>.
          </p>          
        </div>

      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
