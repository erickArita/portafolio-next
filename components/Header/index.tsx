import { use100vh } from "react-div-100vh";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdHand } from 'react-icons/io'
import Image from 'next/image'
import ShapesLayer from '../ShapesLayer'
import Circle from "../Circle";
const Header = () => {

  return (
    <>
      <header id='header' style={{ height: `${use100vh()}px` }}>
        <div className="circle--fly left" />
        <div style={{ marginBottom: '5rem' }}>
          <Circle radius={{ maxRadius: 32, minRadius: 22 }} >
            <Image
              className='main__image'
              src='/me.png'
              width={700}
              height={700}
              alt="Foto de Erick Arita"
            />
          </Circle>
        </div>

        <div className="circle--fly right" />
        <div className="text">
          <span className="text__hand">
            <IoMdHand />
          </span>
          <div>
            <h2>Hola, soy</h2>
            <h3>Erick Arita</h3>
            <p>Desarrollador Frontend</p>
          </div>
        </div>
        <div className="social">
          <a target="__blank" href="https://www.linkedin.com/in/erickarita/">
            <FaLinkedin />
          </a>
          <a target="__blank" href="https://github.com/erickArita">
            <FaGithub />
          </a>
        </div>
        <ShapesLayer />
        {/* <Shapes reverse={true} /> */}
      </header>
      <style jsx>{`
        header {
          background-color: var(--background);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
          z-index: 1;
        }
        

        .text {
          position: absolute;
          line-height: 5px;
          color: var(--white);
          height: min-content;
          display: inline-flex;
          align-items: center;
          top: 20%;
          left: 10%;
          background-color: rgba(255, 255, 255, 0.2);
          padding: 1rem;
          border-radius: 20px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          z-index: 1;
        }
        .text__hand {
          font-size: 50px;
          width: 50px;
          height: 50px;
          margin-right: 1rem;
        }
        .social {
          position: absolute;
          left: 2rem;
          width: 30px;
          height: 50px;
          bottom: 10%;
          z-index: 1;
          font-size: 30px;
          font-size: 30px;
        }
        .social a{
          color: grey;
        }
       
        .social >:first-child:hover {
          color: rgb(0, 100, 250);
        }
        .social >:last-child:hover {
          color: rgb(255, 255, 255);
          height: 30px;
        }
       
        @media (max-width: 768px) {
          .text {
            top: 70%;
            left: 50%;
            margin-left: -8rem;
          }
          
          .social {
            display: flex;
            left: 50%;
            width: 70px;
            height: 30px;
            bottom: 6%;
            margin-left: -30px;
          }
          .social a:last-child {
            margin-left: 1rem;
          }
        }
  `}</style>
    </>
  )
}

export default Header
