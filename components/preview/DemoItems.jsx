"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const previewArray = [
  {
    id: 1,
    img: "/images/preview/homeonelight.png",
    title: "Box Layout (Light)",
    link: "/home-box-layout/home",
  },
  {
    id: 2,
    img: "/images/preview/homeonedark.png",
    title: "Box Layout (Dark)",
    link: "/home-box-layout/home",
  },
  {
    id: 3,
    img: "/images/preview/hometwolight.png",
    title: "Regular Layout (Light)",
    link: "/home-regular/home",
  },
  {
    id: 4,
    img: "/images/preview/hometwodark.png",
    title: "Regular Layout (Dark)",
    link: "/home-regular/home",
  },
];

const DemoItems = () => {
  const { theme, setTheme } = useTheme();

  // toggle of dark & light mode
  const handle = (e) => {
    setTheme(e);
  };

  return (
    <div
      className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto gap-5 md:gap-[40px] pb-[100px]  "
      data-aos="fade"
    >
      {/* previewimg element start */}
      {previewArray.map((item) => {
        const mode = item.id % 2 === 0 ? "dark" : "light";
        return (
          <div
            className="text-center w-full mx-auto shadow-zinc-400  rounded-[12px] border-4 border-slate-800 border-solid duration-500 transition hover:border-slate-500"
            key={item.id}
            onClick={() => handle(mode)}
          >
            <Link href={item.link}>
              <Image
                className="w-full cursor-pointer"
                src={item.img}
                width={350}
                height={300}
                alt="preview item"
              />
            </Link>
            <h3 className="bg-gradient-to-r bg-slate-900 rounded-b-[6px] w-full font-medium text-white capitalize py-4  text-[20px]    ">
              {item.title}
            </h3>
          </div>
        );
      })}

      {/* previewimg element start */}
    </div>
  );
};

export default DemoItems;
