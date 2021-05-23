import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useWindowListener } from "../../hooks/useListeners"
import Links from "./Links"
/**This is used in <Layaut/> than contain all the components*/
const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  /**close menu */
  const handleShowMenu = () => {
    setShowMenu(false)
  }
  // close menu modify  width
  useWindowListener({ event: 'resize', handler: handleShowMenu })
  // close scroll 
  useWindowListener({ event: 'scroll', handler: handleShowMenu })
  return (
    <>
      <nav>
        <Links showMenu={showMenu} setShowMenu={setShowMenu} />
        <div id="hamburger" onClickCapture={() => setShowMenu(!showMenu)}>
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
          clip-path: circle(50%);
          padding: 0.5rem;
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
            
            height: 55vh;
            width: 100%;
            z-index: 2;
            bottom: 0;
          }
        
        }
    `}</style>
    </>
  )
}

export default Navbar
