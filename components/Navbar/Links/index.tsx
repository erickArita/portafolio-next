import { Dispatch, SetStateAction } from "react"
import useScroll from "../../../hooks/useScroll"

const Links = ({ showMenu, setShowMenu }: { showMenu: boolean, setShowMenu: Dispatch<SetStateAction<boolean>> }) => {

  /**
   * onClin in Link close menu and scroll
   *@param section Elemento to scroll 
   */

  const closeMenuToNavigate = (section: string) => {
    useScroll(section)
    setShowMenu(false)
  }

  return (
    <>
      <ul
        className={`links ${showMenu ? 'links--show' : ''} `}
      >
        <li
          onClick={() => closeMenuToNavigate('#header')}
          className="link"
        >
          <p>Inicio</p>
        </li>
        <li
          onClick={() => closeMenuToNavigate('#sobremi')}
          className="link"
        >
          <p>Sobre Mi</p>
        </li>
        <li
          onClick={() => closeMenuToNavigate('#skills')}
          className="link"
        >
          <p >Skills</p>
        </li>
        <li
          onClick={() => closeMenuToNavigate('#proyectos')}
          className="link"
        >
          <p >Proyectos</p>
        </li>
        <li
          onClick={() => closeMenuToNavigate('#contacto')}
          className="link"
        >
          <p>Contacto</p>
        </li>
      </ul>
      <style jsx>{`
      .links {
        list-style: none;
        font-weight: 600;
        font-size: 18px;
        display: inline-flex;
        justify-content: space-around;
        padding: 0;
        width: fit-content;
      }
     
      .link {
        color: #f1e5e5;
        padding: 0.6rem 0.8rem;
        box-sizing: border-box;
        text-decoration: none;
        text-rendering: optimizeLegibility;
        cursor: pointer;
        border-radius: 40px;
        transition: 0.2s;
        transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        border: 1px solid transparent;
        margin-right: .3rem;
      }
      .link p {
        margin: 0;
      }
      .link:hover {
        border: 1px solid var(--white);
        transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      .link:last-child {
        background-color: var(--terciary);
      }
      @media (max-width: 820px) {
        .links {
          display: flex;
          flex-direction: column;
          height: 20rem;
          text-align: center;
          width: 100%;
          -webkit-backdrop-filter: blur(5px);
 
          padding: 6rem 5rem 0 5rem;
          justify-content: center;
          box-sizing: border-box;
          transform: translateY(-14rem);
          transition: .7s ease-in-out;
        }
      }
      .links--show{
        transform: translateY(0rem);
        transition: .7s ease-in-out;
      }
     
    `}</style>
    </>
  )
}

export default Links
