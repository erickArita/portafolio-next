import { FaJs, FaNode, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import Cards from "../Cards";
import Circle from "../Circle";
import { FC, useState } from "react";
import { useObserver } from "../../hooks/useObserver";
const skills = [
  {
    Icon: <FaJs/>,
    text: "JavaScript",
    color: " #ffff00",
  },
  {
    Icon: <FaNode/>,
    text: "NodeJs",
    color: " #00ff00",
  },
  {
    Icon: <FaHtml5/>,
    text: "Html",
    color: " #ff5e00",
  },
  {
    Icon: <FaCss3/>,
    text: "Css",
    color: " #4672d1",
  },
  {
    Icon: <FaReact/>,
    text: "ReactJs",
    color: "#61dafb",
  },
  {
    Icon: <DiFirebase/>,
    text: "Firebase",
    color: "#ffca28",
  },
];

const Skills: FC = () => {
  const [inview, setInview] = useState<boolean>(false)

  const handleInView = (entries: IntersectionObserverEntry) => {

    setInview(entries.isIntersecting)
  }

  useObserver({ cb: handleInView, options: { threshold: .6 }, target: '#skills' })
  return (
    <>
      <section id="skills">
        <h2><span> &lt; </span> Skills <span> &gt; </span></h2>

        <Cards skills={skills} />
        <h2>
          <span>&lt;/ </span> Skills <span>&gt;</span>
        </h2>
        <Circle
          leviting
          circlesNum={6}
          radius={{ maxRadius: 6, minRadius: 6 }}
          randomPos
          inView={inview}
        />
      </section>
      <style jsx>{`
      section {
        min-height: 100vh;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-around;
        align-items: center;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 0 3rem;
      }
      h2 {
        color: var(--grey);
        font-size: 30px;
        margin-left: 4%;
        align-self: flex-start;
      }
      span {
        color: rgba(160, 28, 201, 0.9);
      }
     
        
      `}</style>
    </>
  )
}

export default Skills
