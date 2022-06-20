import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "stats", path: "/stats", icon: <IoBarChartSharp /> },
  { id: 2, text: "all posts", path: "/posts", icon: <MdQueryStats /> },
  { id: 3, text: "add post", path: "/posts/new", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "/profile", icon: <ImProfile /> },
];

export default links;
