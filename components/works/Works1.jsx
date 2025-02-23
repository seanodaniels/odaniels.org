"use client";
import Image from "next/image";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import portfolioData from "@/data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Modal.setAppElement("#__next");

const Works1 = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    500: 1,
  };

  // start dynamic portfolio with slug
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };
  // End dynamic portfolio with slug

  // start filter data based on function
  const [test, setTest] = useState("Web App");

  const handleSearch = (text) => {
    handleData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("Web App");
    handleData("Web App");
  }, []);

  const [data, setData] = useState(portfolioData);

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  const makeTitle = (test) => {
    // Customize title name here.
    switch (test) {
      case "All":
        return null
      default: 
        return test
    }
  }

  return (
    <>
      {/* Portfilo fillter tab start */}
      <h2 className="after-effect  after:left-48 mt-0 lg:mt-0">
        {
          makeTitle(test)       
        } Portfolio
      </h2>
      <ul className="mt-1 flex w-full justify-end md:justify-end flex-wrap font-medium pb-12">
        <li
          className={`${
            test === "All" ? "text-[#c94ff8]" : "fillter-btn "
          } mr-2`}
          onClick={() => handleSearch("All")}
        >
          All
        </li>
        <li
          className={`${
            test === "Web App" ? "text-[#c94ff8] border-l-2 border-[#333333]" : "fillter-btn"
          } mx-2 px-4  border-l-2 border-[#333333]`}
          onClick={() => handleSearch("Web App")}
        >
          Web Apps
        </li>
        {/* <li
          className={`${
            test === "Video" ? "text-[#c94ff8]" : "fillter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("Video")}
        >
          Video
        </li>
        <li
          className={`${
            test === "Logo" ? "text-[#c94ff8]" : "fillter-btn ml-0"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("Logo")}
        >
          Logo
        </li>
        <li
          className={`${test === "UI/UX" ? "text-[#c94ff8]" : "fillter-btn"}  `}
          onClick={() => handleSearch("UI/UX")}
        >
          Graphic Design
        </li> */}
      </ul>
      {/* End portfolio filter tab */}

      {/* Start portfolio items */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModle(item?.id)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full    cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#c94ff8] dark:hover:text-[#c94ff8] dark:text-white mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </Masonry>
      {/* End portfolio items */}

      {/* Start Modal for portfolio items */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
      >
        <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
            {/* close button */}
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <h2 className="text-[#c94ff8] dark:hover:text-[#c52bfc] text-5xl text-left font-bold">
            {singleData?.title}
            </h2>
            <h3 className="text-[#ffffff] text-large text-left font-bold">
              {singleData.tag} Project
            </h3>

            <div className="grid grid-cols-1 my-6">
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiCode className="text-lg mr-2 hidden sm:block " />
                  Langages :&nbsp;
                  <span className="font-medium ">{singleData?.langages}</span>
                </p>

                {/* <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px]  sm:text-lg ">
                  <FiUser className="text-lg mr-2 hidden sm:block" />
                  Client :&nbsp;
                  <span className="font-medium ">{singleData?.client}</span>
                </p> */}
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                  Website :&nbsp;
                  <span className="font-medium transition-all duration-300 ease-in-out text-[#c94ff8] hover:underline ">
                    <a
                      href={singleData?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleData?.linkText}
                    </a>
                  </span>
                </p>

                { singleData.github && singleData.github !== null 
                  ? (
                      <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                        <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                        Github :&nbsp;
                        <span className="font-medium transition-all duration-300 ease-in-out text-[#c94ff8] hover:underline ">
                          <a
                            href={singleData?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {singleData?.title} Repo
                          </a>
                        </span>
                      </p>
                  )
                  : null
                }

                
              </div>
            </div>

            <p className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm  ">
              {singleData?.description}
            </p>

            <Image
              className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog details image"
              width={620}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
      {/* End Modal for portfolio items */}
    </>
  );
};

export default Works1;
