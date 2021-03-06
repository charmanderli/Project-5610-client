import { BsLightbulb } from "react-icons/bs";
import { TiPen } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";
import { SiFoodpanda } from "react-icons/si";

const links = [
  { id: 1, text: "my posts", path: "/myposts", icon: <SiFoodpanda /> },
  { id: 2, text: "all posts", path: "/posts", icon: <BsLightbulb /> },
  { id: 3, text: "add post", path: "/posts/new", icon: <TiPen /> },
  { id: 4, text: "profile", path: "/profile", icon: <ImProfile /> },
  { id: 5, text: "search", path: "/search", icon: <BiSearchAlt /> },
];

export default links;
