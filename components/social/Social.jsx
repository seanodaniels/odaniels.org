import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaSoundcloud,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://www.github.com/seanodaniels/",
      icon: <FaGithub />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/seanodaniels/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 3,
      link: "https://soundcloud.com/seanodaniels",
      icon: <FaSoundcloud />,
      iconClass: "text-[#e14a84]",
    },
    {
      id: 4,
      link: "https://www.youtube.com/@od20_",
      icon: <FaYoutube />,
      iconClass: "text-[#1C9CEA]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
