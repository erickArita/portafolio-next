import { ProyectosCards } from "../../utils/ProyectData"
import Cards from "../Cards"
import Circle from "../Circle"
import OpenCloseTags from "../Container"
/**Show a card Grid with proyects in the main page */
const Proyectos = () => {
  return (
    <>
      <section id='proyectos' className='proyectos' >
        <OpenCloseTags text='Proyectos'>
          <div style={{ position: 'absolute', top: '50%', marginTop: '-15rem' }}>
            <Circle leviting />
          </div>
          <Cards content={ProyectosCards} />
        </OpenCloseTags>
      </section>
   
    </>
  )
}

export default Proyectos
