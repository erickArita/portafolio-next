import { useState } from 'react';
import { useWindowListener } from '../../hooks/useListeners';
import { Line, SemiCircle, Spring, Triangle } from './shapes'
const ShapesLayer = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const shapes = [Line, SemiCircle, Spring, Triangle];

  const moveShapes = (e: MouseEvent) => {
    setCoords({ x: e.clientX / 40, y: e.clientY / 40 });
  }
  let topHeigth: number;
  const onScroll = (e:MouseEvent) => {
    console.log(e);
    
    setCoords({ x: -topHeigth / 10, y: -topHeigth / 10 });
  }
  useWindowListener('mousemove', moveShapes)
  useWindowListener('scroll', onScroll)
  return (
    <>
      <div
        className="shapesMask"
      >
        {shapes.map((Shape, i) =>
          <div key={`${i}`}
            style={{
              transform: `translate(${coords.x}px,${coords.y}px)`,
              width: '50px',
              height: '50px'
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
          transition: opacity 0.25s ease 0.65s;
          display: flex;
          justify-content: space-between;
          padding: 3rem;
          box-sizing: border-box
        }
        .shapesMask div:first-child {
          align-self: flex-end;
        }

        .shapesMask div:nth-child(2) {
          justify-self: right;
          align-self: flex-start;
        }

        .shapesMask div:nth-child(3) {
          align-self: flex-end;
          justify-self: right;
        }
        .shapesMask div:last-child {
          align-self: flex-end;
        }
  `}</style>
    </>
  )
}

export default ShapesLayer
