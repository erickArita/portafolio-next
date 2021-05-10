import Image from "next/image"
import Cards from "../Cards"
import Circle from "../Circle"

const ProyectosCards = [
  {
    Icon: <Image src='/little.png' height={100} width={100} objectFit='cover' />,
    text: 'Litle Coffee',
    code: 'https://github.com/erickArita/litle-coffe',
    web: 'https://littlecoffeesr.vercel.app/'
  },
  {
    Icon: <Image src='/cole.png' height={100} width={100} objectFit='contain' />,
    text: 'INSUCA',
    code: 'https://github.com/erickArita/matricula-app',
    web: 'https://erickarita.github.io/docs/'
  },
  {
    Icon: <Image src='/mano.png' height={100} width={100} objectFit='contain' />,
    text: 'Club Dame Tu Mano',
    code: 'https://github.com/erickArita/dametumano',
    web: 'https://erickarita.github.io/dametumano/'
  },
  {
    Icon: '',
    text: 'Más en camino...',
    code: '',
    web: ''
  },
]
const Proyectos = () => {
  return (
    <>
      <section className='proyectos'>
        <h2><span> &lt; </span> Proyectos <span> &gt; </span></h2>
        <div
          style={{ position: 'absolute', top:'50%',marginTop:'-15rem' }}
        >
          <Circle />
        </div>
        <Cards
          skills={ProyectosCards}
          layaut={{ height: 110, width: 400 }}
        />

        <h2 >
          <span> &lt;/ </span> Proyectos <span> &gt; </span>
        </h2>
      </section>
      <style jsx>{`
        
        .proyectos{
          min-height: 100vh;
          background-color: var(--background);
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 3rem;
          position: relative;
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

export default Proyectos
