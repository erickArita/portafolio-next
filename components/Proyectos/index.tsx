import { ProyectosCards } from "../../utils/ProyectData"
import Cards from "../Cards"
import Shape from "../Shape"
import OpenCloseTags from "../Container"
import { useObserver } from "../../hooks/useObserver"
/**Show a card Grid with proyects in the main page */
const Proyectos = () => {
  /** handleInView receives data of intersection observer api <Shape/> receives this value and 
  * launch animation
  */
  const inView = useObserver({ options: { threshold: .5 }, target: '#proyectos' })
  return (
    <OpenCloseTags text='Proyectos' id='proyectos'>
      <Shape
        circlesNum={6}
        radius={{ maxRadius: 6 }}
        inView={inView}
        randomPos
        reorderOnHover
      />
      <Cards content={ProyectosCards} />
    </OpenCloseTags>
  )
}

export default Proyectos
