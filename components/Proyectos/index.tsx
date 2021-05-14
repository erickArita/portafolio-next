import { ProyectosCards } from "../../utils/ProyectData"
import Cards from "../Cards"
import Shape from "../Shape"
import OpenCloseTags from "../Container"
/**Show a card Grid with proyects in the main page */
const Proyectos = () => {
  return (
    <>
      <OpenCloseTags text='Proyectos' id='proyectos'>
        <div style={{ position: 'absolute', top: '50%', marginTop: '-15rem' }}>
          <Shape leviting />
        </div>
        <Cards content={ProyectosCards} />
      </OpenCloseTags>
    </>
  )
}

export default Proyectos
