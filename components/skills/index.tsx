import Cards from "../Cards";
import Shape from "../Shape";
import { FC } from "react";
import { useObserver } from "../../hooks/useObserver";
import { skills } from "../../utils/skills.data";
import Container from "../Container";

/**Component that show skills in card grid */
const Skills: FC = () => {

  /** handleInView receives data of intersection observer api*/
  const inView  = useObserver({ options: { threshold: .6 }, target: '#skills' })

  return (
    <>
      <Container text='Skills' id='skills'>
        <Cards content={skills} />
        <Shape
          leviting
          circlesNum={6}
          radius={{ maxRadius: 6, minRadius: 6 }}
          randomPos
          inView={inView}
          reorderOnHover
        />
      </Container>
    </>
  )
}

export default Skills
