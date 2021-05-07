import { FC, useEffect } from "react";


interface CircleProps {
  circlesNum?: number;
  radius?: { maxRadius: number; minRadius?: number };
  randomPos?: boolean;
  leviting?: boolean
}
const Circle: FC<CircleProps> = ({
  circlesNum = 1,
  radius,
  randomPos,
  children,
  leviting = false
}) => {

  // creando una posiscion random para los circulos, si se necesita
  function randPosition() {
    return `${Math.ceil(Math.random() * 100)}%`;
  }
  return (
    <>
      {
        // con la cantidad de circulos que nos piden creamos un arra para recorrerlo
        Array(circlesNum).fill('').map((e, i) =>
          <div key={i} className={`circle circle--radius ${leviting && 'leviting'}`}
            style={randomPos ? {
              position: 'absolute',
              top: `${randPosition()}`,
              right: `${randPosition()}`,
              // @ts-ignore
              "--delay": `${i}`
            } : {}}
          >
            <div className="circle circle--radius" style={{ left: 0, top: 0, margin: 0 }} />
            {children}
          </div>
        )
      }

      <style jsx>{`
        .circle {
          position: relative;
          transition: 0.5s;
          z-index: 1;
          clip-path: circle(50%);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

        }
        .circle:hover {
          transition: 0.5s;
        }
        .position--random{
          position: absolute;
        }
        .circle--radius{
          width: ${radius?.maxRadius}rem;
          height: ${radius?.maxRadius}rem;
        }
     
        .circle .circle{
          position: absolute;
        }
        .circle .circle:hover{
          transform: scale(0);
        }
        .leviting{
          animation: leviting 2s ease-in-out infinite;
          animation-delay:calc(-.4s * var(--delay));
        }
        @keyframes leviting{
          0%{
            transform: translateY(1rem);
          }
          50%{
            transform: translateY(0);
          }
          100%{
            transform: translateY(1rem);
          }
        }
        @media (max-width: 768px) {
          .circle {
            width:  ${radius?.minRadius ? radius.minRadius : 20}rem;
            height:  ${radius?.minRadius ? radius.minRadius : 20}rem;
          }

        }
    `}</style>
    </>
  )
}

export default Circle
