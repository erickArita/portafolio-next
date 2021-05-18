import { useObserver } from "../../hooks/useObserver"
import Container from "../Container"
import Shape from "../Shape"

/**Seccion of About Me this component is text only */
const AboutMe = () => {
  const inView = useObserver({ target: '#sobremi' })
  return (
    <>
      <Container text='Sobre-mi' id='sobremi'>

        <Shape shape='triangle'
          circlesNum={6}
          randomPos
          radius={{ minRadius: 15 }}
          inView={inView}
          reorderOnHover
        />
        <p className='about__me'>
          Me apasiona el mundo tech y el software,
          lo veo como plastilina la puedes moldear como quieras
          y crear cosas increibles. <br />
          Me desenvuelvo principalmente como
          <span className='about__me__highlight'> Frontend </span>
          developer aunque también me puedo desempeñar como<span className='about__me__highlight'> Backend</span>.
      </p>
      </Container>
      <style jsx>{`
      .about__me{
        color: var(--white);
        font-size: 20px;
        text-align: left;
        line-height: 1.6rem;
        z-index: 1;
        width: 500px;
        margin: 0 3rem;
      }
      .about__me__highlight{
        color: var(--terciary);
      }
      @media (max-width:500px){
        .about__me{
          width: 300px;
          margin: 0 0 ;
        }

      }
     `}</style>
    </>
  )
}

export default AboutMe
