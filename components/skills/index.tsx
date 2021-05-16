import Cards from "../Cards";
import Shape from "../Shape";
import { FC } from "react";
import { skills } from "../../utils/skills.data";
import Container from "../Container";

/**Component that show skills in card grid */
const Skills: FC = () => {



  return (
    <>
      <Container text='Skills' id='skills'>
        <Cards content={skills} />
        <Shape leviting/>
      </Container>
    </>
  )
}

export default Skills
