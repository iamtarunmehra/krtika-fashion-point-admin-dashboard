import { FaCalendar, FaClock, FaHome, FaMicroblog } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import {
  MdContactEmergency,
  MdHomeRepairService,
  MdMore,
} from "react-icons/md";

export const HeaderData = [
  {
    title: "dashboard",
    slug: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "about us",
    slug: "/about-us",
    icon: <MdMore />,
  },
  {
    title: "Category",
    slug: "/category  ",
    icon: <FaMicroblog />,
  },
   {
    title: "Product",
    slug: "/product  ",
    icon: <FaMicroblog />,
  },
];
