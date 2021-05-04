const Links = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <>
      <ul
        className={`links ${showMenu ? 'links--show' : ''} `}
      >
        <li className="link">
          <p>Inicio</p>
        </li>
        <li className="link">
          <p >Skills</p>
        </li>
        <li className="link">
          <p >Proyectos</p>
        </li>
        <li className="link">
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
        width: 20rem;
      }
      .link {
        color: #f1e5e5;
        padding: 0.6rem 0.8rem;
        box-sizing: border-box;
        text-decoration: none;
        text-rendering: optimizeLegibility;
        cursor: pointer;
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
          backdrop-filter: blur(5px);
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
