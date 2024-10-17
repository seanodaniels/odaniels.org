import Image from "next/image";

const features = [
  {
    icon: "/images/preview/fatures/1.png",
    dataDealy: "0",
    title: "NextJs 14+ App Dir.",
    description:
      "We used latest react Nextjs vertion ^13. Max Components are Reusable for you. It's a awesome design made by React NextJS.",
  },
  {
    icon: "/images/preview/fatures/2.png",
    dataDealy: "100",
    title: "AOS Animation",
    description:
      "This way you can trigger animation on one element, while you scroll to another - useful in animating fixed elements",
  },
  {
    icon: "/images/preview/fatures/3.png",
    dataDealy: "200",
    title: "Tailwind v3+",
    description:
      "Tailwind CSS is basically a modern,trending and utility-first CSS framework for rapidly building custom user interfaces.",
  },

  {
    icon: "/images/preview/fatures/6.png",
    dataDealy: "0",
    title: "React Icon",
    description:
      "React-icons uses ES6 features to import the icons into your React app. And it makes it so that only the icons you actually use from each library get imported.",
  },
  {
    icon: "/images/preview/fatures/4.png",
    dataDealy: "100",
    title: "React Hooks",
    description:
      "It allows you to use state and other React features without writing a class. Hooks are the functions which hook into React state and lifecycle features from function components.",
  },
  {
    icon: "/images/preview/fatures/5.png",
    dataDealy: "200",
    title: "Api Ready Code",
    description:
      "We made all the code with Array of Object based. so you can prepare for your api call whenever you want for it",
  },

  {
    icon: "/images/preview/fatures/7.png",
    dataDealy: "0",
    title: "Next Head",
    description:
      "Next Head is a component which lets you control your document head using their React component. With this plugin, attributes you add in their component, e.g. title, meta attributes",
  },
  {
    icon: "/images/preview/fatures/8.png",
    dataDealy: "100",
    title: "React Toastify",
    description:
      "React-Toastify allows you to add notifications to your app with easy and comfortable way",
  },
  {
    icon: "/images/preview/fatures/9.png",
    dataDealy: "200",
    title: "Working Contact Form",
    description:
      "You will get working contact form without any type of Bakcend. We integrated it With Email js. just follow our documentation and integrate it easy way",
  },
];

const Features = () => {
  return (
    <section className="bg-[#111111]">
      <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
        <h1 className="text-[#c94ff8] text-[32px] md:text-[45px] font-semibold ">
          Salient Features
        </h1>
        <Image
          className=" block mx-auto"
          src="/images/preview/preview.png"
          width={40}
          height={40}
          alt="prev"
        />
      </div>
      {/* End .container  */}

      <div className=" container px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-[100px] ">
        {/* features element */}
        {features.map((item) => (
          <div
            key={Math.random()}
            className="bg-slate-800 text-center rounded-xl transition-all duration-300 ease-linear group p-8"
            data-aos="fade"
            data-aos-delay={item.dataDealy}
          >
            <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center transition-all duration-300 ease-linear bg-[#33343a] mb-5 group-hover:bg-[#525252]">
              <img className="w-12" src={item?.icon} alt="" />
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {item?.title}
            </h3>
            <p className="text-[#9197a0] transition-all duration-300 ease-linear mt-3 group-hover:text-[#aaa] ">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
