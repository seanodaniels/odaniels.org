import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward, FaCertificate } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education and Certificates",
    icon: <FaCertificate />,
    items: [
      {
        id: 1,
        date: "2024",
        title: "Full Stack Open ",
        place: "University of Helsinki",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2017",
        title: "App Development Bootcamp ",
        place: "Tech Talent South",
        bg: "#FFF4F4",
      },

      {
        id: 3,
        date: "2023",
        title: "Certified Associates in Project Managment ",
        place: "Project Management Institute",
        bg: "#FFF4F4",
      },

      {
        id: 4,
        date: "2023",
        title: "Professional Scrum Master I ",
        place: "Scrum.org",
        bg: "#FFF4F4",
      },

    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2022 - present",
        title: "Various Contract Work",
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "2015-2022",
        title: "Web Developer",
        place: "King Bio, Asheville NC",
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2012-2015",
        title: "Director of Internet Services",
        place: "Green Festivals, Asheville NC",
        bg: "#EEF5FA",
      },

      {
        id: 4,
        date: "2003-2006 and 2011-2012",
        title: "Manager, Web Development and Design",
        place: "Memphis Grizzlies NBA, Memphis TN",
        bg: "#EEF5FA",
      },

      {
        id: 5,
        date: "2007-2011",
        title: "Developer",
        place: "Lokion, Memphis TN",
        bg: "#EEF5FA",
      },

    ],
  },
];
