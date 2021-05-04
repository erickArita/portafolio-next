import { FaJs, FaNode, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import Card from "../Cards";
import Circle from "../Circle";
const skills = [
  {
    Icon: FaJs,
    text: "JavaScript",
    color: " #ffff00",
  },
  {
    Icon: FaNode,
    text: "NodeJs",
    color: " #00ff00",
  },
  {
    Icon: FaHtml5,
    text: "Html",
    color: " #ff5e00",
  },
  {
    Icon: FaCss3,
    text: "Css",
    color: " #4672d1",
  },
  {
    Icon: FaReact,
    text: "ReactJs",
    color: "#61dafb",
  },
  {
    Icon: DiFirebase,
    text: "Firebase",
    color: "#ffca28",
  },
];

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2><span>{'<'} </span> Skills <span>{'>'}</span></h2>
        <div className="cards">
          {
            skills.map((skill =>
              <Card key={skill.text}  content={{ ...skill }} />
            ))
          }
        </div>

        <h2 style={{ justifySelf: 'flex-end' }}>
          <span>{"</"} </span> Skills <span>{'>'}</span>
        </h2>
        <Circle leviting circlesNum={6} radius={{ maxRadius: 6,minRadius:6 }} randomPos />
      </section>
      <style jsx>{`
      section {
        color: rgba(255, 255, 0, 0.9);
        min-height: 100vh;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-around;
        align-items: center;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 3rem;
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
      .cards {
        align-self: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
        grid-gap: 1rem;
        width: 90%;
      }
        
      `}</style>
    </>
  )
}

export default Skills
