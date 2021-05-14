import Image from "next/image";
import { DiFirebase } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
/**Data for <skill/> component show in main page  */
export const skills = [
  {
    Icon: <FaJs />,
    text: "JavaScript",
    colorIcon: " #ffff00",
  },
  {
    Icon: <FaNode />,
    text: "NodeJs",
    colorIcon: " #00ff00",
  },
  {
    Icon: <FaHtml5 />,
    text: "Html",
    colorIcon: " #ff5e00",
  },
  {
    Icon: <FaCss3 />,
    text: "Css",
    colorIcon: " #4672d1",
  },
  {
    Icon: <FaReact />,
    text: "ReactJs",
    colorIcon: "#61dafb",
  },
  {
    Icon: <DiFirebase />,
    text: "Firebase",
    colorIcon: "#ffca28",
  },
  {
    Icon: <Image src='/nextjs.svg' height={100} width={100} objectFit='contain' />,
    text: "NextJs",
    colorIcon: "#141414",
  },
];