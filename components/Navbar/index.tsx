import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useWindowListener } from "../../hooks/useListeners"
import Links from "./Links"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleShowMenu = () => {
    setShowMenu(false)
  }
  useWindowListener({ event: 'resize', handler: handleShowMenu })
  return (
    <>
      <nav>
        <Links showMenu={showMenu} />
        <div id="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
        {showMenu && <div id="closeMenuLayer" onClick={() => setShowMenu(false)} />}
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          width: 100%;
          top: 0;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          z-index: 2;
          background-color: transparent;
        }

        #hamburger {
          display: unset;
          cursor: pointer;
          position: absolute;
          right: 0;
          margin-right: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
          color: var(--white);
          background-color: var(--secondary);
          border-radius: 100%;
          padding: 0.5rem;
          box-shadow: 0px 0px 9px var(--secondary);
          z-index: 2;
          font-size: larger;
        }
        
        @media (min-width: 820px) {
          #hamburger {
            display: none;
          }
        }
        @media (max-width: 820px) {
          #closeMenuLayer {
            position: fixed;
            left: 0;
            top: 220px;
            height: 80vh;
            width: 100%;
            z-index: 2;
          }
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
          }
        }
    `}</style>
    </>
  )
}

export default Navbar
