import { useObserver } from "../../hooks/useObserver"
import OpenCloseTags from "../Container"
import Shape from "../Shape"

/**Seccion of About Me this component is text only */
const AboutMe = () => {
  const inView = useObserver({ target: '#sobremi' })
  return (
    <>
      <OpenCloseTags text='Sobre-mi' id='sobremi'>
        <Shape shape='triangle'
          circlesNum={6}
          randomPos
          inView={inView}
          reorderOnHover
        />
        <p className='about__me'>
          Me apasiona el mundo tech y el software,
          lo veo como plastilina la puedes moldear como quieras
          y crear cosas increibles. <br />
          Me desenvuelvo principalmente como
          <span className='about__me__highlight'>Frontend</span>
          developer aunque también me puedo desempeñar como <span className='about__me__highlight'>Backend</span>.
      </p>
      </OpenCloseTags>
      <style jsx>{`
      .about__me{
        color: var(--white);
        font-size: 20px;
        text-align: left;
        width: 500px;
        line-height: 1.6rem;
        z-index: 2;
      }
      .about__me__highlight{
        color: rgba(160, 28, 201, 0.9);
      }
     `}</style>
    </>
  )
}

export default AboutMe
