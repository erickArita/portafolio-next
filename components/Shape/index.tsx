import { FC, ReactNode, useEffect, useState } from "react";
import { createRandomPos } from "../../utils/random";

interface Shape {
  /**Number of circles  */
  circlesNum?: number;
  /**Default redius is 6rem */
  radius?: { maxRadius?: number; minRadius?: number };
  /**If true, the circles position is absolute and shown in rendom position  */
  randomPos?: boolean;
  /**Leviting animation */
  leviting?: boolean,
  /**this property must be provided from an useIntersectionObserver */
  inView?: boolean;

  children?: ReactNode;

  shape?: 'circle' | 'triangle';
  /**rearrange shapes on hover */
  reorderOnHover?: boolean;
}
/**Generate shapes  used in header, skill and proyects 
 * generate circles or triangles
 * @interface {@link CircleProps}
 * @param {Shape} Object receives CircleProps 
 */
const Shape: FC<Shape> = ({
  circlesNum = 1,
  radius,
  randomPos,
  children,
  leviting = false,
  inView = false,
  shape = 'circle',
  reorderOnHover = false
}: Shape) => {

  const [coords, setCoords] = useState([{ top: 50, left: 50 }])
  /**Reating a random position if section inview and randomPos param is true */
  useEffect(() => {
    setCoords([...createRandomPos(circlesNum)])
  }, [inView])

  const handleHover = () => {
    setCoords([...createRandomPos(circlesNum)])
  }
  /**Rearrange the shapes whe mouse is over */
  const handleRearrange = () => {
    reorderOnHover && handleHover()
  }
  return (
    <>
      {/* if is one shape then center this else any position */}
      <div className={`${circlesNum == 1 ? 'shapes__container--center' : 'shapes__container'}`}>
        {
          coords.map((e, i) =>
            <div key={i} className={`shape ${shape} size ${leviting && 'leviting'}`}
              style={randomPos ? {
                transform: `translate(${e.top}vw,${e.left}vh)`,
                // @ts-ignore
                "--delay": `${i}`
              } : {}}
              onMouseMove={handleRearrange}
            >
              <div className={`shape ${shape} size`}
                style={{ left: 0, top: 0, margin: 0 }} />
              {children}
            </div>
          )
        }
      </div>

      <style jsx>{`
        .shapes__container{
          width:100vw;
          height: 100vh;
          position: absolute;                 
        }
        .shapes__container--center{
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .shape {
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
        .triangle{
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          position: absolute;
        }
        .circle:hover {
          transition: 0.5s;
        }
    
        .size{
          width: ${radius?.maxRadius ? radius.maxRadius : '30rem'}rem;
          height: ${radius?.maxRadius ? radius.maxRadius : '30rem'}rem;
        }
     
        .shape .circle{
          position: absolute;
        }
        .circle:hover{
          transform: scale(0);
        }
        .triangle .triangle{
          position: absolute;
        
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
          .shape {
            width:  ${radius?.minRadius ? radius.minRadius : 20}rem;
            height:  ${radius?.minRadius ? radius.minRadius : 20}rem;
          }
        }
    `}</style>
    </>
  )
}

export default Shape
