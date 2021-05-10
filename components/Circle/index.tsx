import { FC, useEffect, useState } from "react";
import { createRandomPos } from "../../utils/random";

interface CircleProps {
  circlesNum?: number;
  radius?: { maxRadius: number; minRadius?: number };
  randomPos?: boolean;
  leviting?: boolean,
  inView?: boolean;
}

const Circle: FC<CircleProps> = ({
  circlesNum = 1,
  radius,
  randomPos,
  children,
  leviting = false,
  inView = false
}) => {
  const [coords, setCoords] = useState([{ top: '50%', left: '50%' }])

  // creando una posiscion random para los circulos 
  useEffect(() => {
    inView && randomPos && setCoords([...createRandomPos(circlesNum)])
  }, [inView])


  return (
    <>
      {
        coords.map((e, i) =>
          <div key={i} className={`circle circle--radius ${leviting && 'leviting'}`}
            style={randomPos ? {
              position: 'absolute',
              top: inView ? e.top : '40%',
              right: inView ? e.left : '45%',
              // @ts-ignore
              "--delay": `${i}`
            } : {}}
          >
            <div className='circle circle--radius' style={{ left: 0, top: 0, margin: 0 }} />
            {children}
          </div>
        )
      }

      <style jsx>{`
        .circle {
          width: 30rem;
          height: 30rem;
          background: radial-gradient(
              ellipse at left,
              hsla(193, 51%, 54%, 0.2),
              transparent
            ),
            radial-gradient(ellipse at right, rgba(160, 28, 201, 0.2), transparent);
          position: relative;
          transition: 0.5s;
          z-index: 0;
          clip-path: circle(50%);
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          justify-self: center;
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
