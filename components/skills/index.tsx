import Cards from "../Cards";
import Shape from "../Shape";
import { FC } from "react";
import { skills } from "../../utils/skills.data";
import Container from "../Container";

/**Component that show skills in card grid */
const Skills: FC = () =>
  <Container text='Skills' id='skills'>
    <Cards content={skills} />
    <Shape leviting radius={{ minRadius: 22 }} />
  </Container>

export default Skills
