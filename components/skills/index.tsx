import Cards from "../Cards";
import Circle from "../Circle";
import { FC, useState } from "react";
import { useObserver } from "../../hooks/useObserver";
import { skills } from "../../utils/skills.data";
import OpenCloseTags from "../Container";

/**Component that show skills in card grid */
const Skills: FC = () => {
  const [inview, setInview] = useState<boolean>(false)

  /**If <Circle/> is in view, inview=true for init random pos animation 
   * @param entries -Data that return useObserver
   */
  const handleInView = (entries: IntersectionObserverEntry) => {
    setInview(entries.isIntersecting)
  }
  /** handleInView receives data of intersection observer api*/
  useObserver({ cb: handleInView, options: { threshold: .6 }, target: '#skills' })

  return (
    <>
      <section id="skills">
        <OpenCloseTags text='Skills'>
          <Cards content={skills} />
          <Circle
            leviting
            circlesNum={6}
            radius={{ maxRadius: 6, minRadius: 6 }}
            randomPos
            inView={inview}
          />
        </OpenCloseTags>
      </section>
    </>
  )
}

export default Skills
