// use100vh for ios devices 
import { use100vh } from "react-div-100vh";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdHand } from 'react-icons/io'
import Image from 'next/image'
import ShapesLayer from '../ShapesLayer'
import Shape from "../Shape";

const Header = () => {

  return (
    <>
      <header id='header' style={{ height: `${use100vh()}px` }}>
        <div className="circle--fly left" />
        <div className='main__image'>

          <Shape radius={{ maxRadius: 32, minRadius: 22 }}  >
            <Image
              src='/me.png'
              width={700}
              height={700}

              alt="Foto de Erick Arita"
            />
          </Shape>
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
      </header>
      <style jsx>{`
        .main__image{
          z-index: 1;
          position: absolute;
        }
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: var(--background);
          width: 100%;
          overflow: hidden;
          z-index: 1;
          transition: .6s;
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
          backdrop-filter: blur(5px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          z-index: 1;
        }
        .text__hand {
          font-size: 50px;
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
        /*circulos de las esquinas */
        .circle--fly {
          align-self: center;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(
              ellipse at left,
              hsla(193, 51%, 54%, 0.2),
              transparent
            ),
            radial-gradient(ellipse at right, rgba(160, 28, 201, 0.2), transparent);
          border-radius: 100%;
          z-index: 0;
        }
        /* anuimacion que se usa en el componente Circle y shapes */
        .circle--fly {
          width: 35rem;
          height: 35rem;
        }
        .circle--fly {
          position: absolute;
        }
        .left {
          left: -15rem;
          top: -15rem;
          background: radial-gradient(
            ellipse at center,
            rgba(27, 178, 219, 0.449),
            transparent 70%
          );
        }
        .right {
          right: -15rem;
          bottom: -15rem;
          background: radial-gradient(
            ellipse at center,
            hsla(293, 51%, 54%, 0.424),
            transparent 70%
          );
        }
       
        @media (max-width: 768px) {
          .circle--fly {
            top: 0;
            width: 25rem;
            height: 100vh;
            border-radius: 0%;
            margin: 0;
          }
          .left {
            left: -40%;
            background: linear-gradient(
              to right,
              rgba(27, 178, 219, 0.424),
              transparent 70%
            );
          }
          .right {
            background: linear-gradient(
              to left,
              hsla(293, 51%, 54%, 0.424),
              transparent 70%
            );
            right: -40%;
          }
          
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
            bottom: 2%;
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
