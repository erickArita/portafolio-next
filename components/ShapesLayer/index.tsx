import { useState } from 'react';
import { useWindowListener } from '../../hooks/useListeners';
import { Line, SemiCircle, Spring, Triangle } from './shapes'
import { randPosition } from '../../utils/random'
const ShapesLayer = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const shapes = [Line, SemiCircle, Spring, Triangle, Line, SemiCircle, Triangle];

  // const moveShapes = (e: MouseEvent) => {
  //   setCoords({ x: e.clientX / 50, y: e.clientY / 50 });
  // }

  // useWindowListener({ event: 'mousemove', handler: moveShapes })
  return (
    <>
      <div
        className="shapesMask"
      >
        {shapes.map((Shape, i) =>
          <div key={`${i}`}
            style={{
              top: `${randPosition(90)}%`,
              left: `${randPosition(90)}%`,
              width: '50px',
              height: '50px',
              position: 'absolute',
              // @ts-ignore
              "--i": `${i}`
            }}
          >
            {<Shape />}
          </div>
        )}
      </div>
      <style jsx>{`
        .shapesMask {
          font-size: 100%;
          line-height: 1.5;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          padding: 3rem;
          box-sizing: border-box;
          animation: onLoad 6s ;
          z-index: 0;
        }
           
        .shapesMask div{
          transition: .7s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      

        @media (max-width:768px){
           
          .shapesMask div{
            animation: leviting 2s ease-in-out infinite;
            animation-delay:calc(-.4s * var(--i));
          }
         
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
       
        @keyframes onLoad{
          0%{
            opacity: 0;
          }
        
          100%{
            opacity: 1;
          }
        }
  `}</style>
    </>
  )
}

export default ShapesLayer
