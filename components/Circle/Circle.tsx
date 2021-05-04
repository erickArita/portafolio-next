import { FC } from "react";

enum Layaut {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  rigth = 'right',
  center = 'center',
}
interface CircleProps {
  circlesNum: number;
  radius?: string;
  layaut?: Layaut;
  randomPos?: boolean;
}
const Circle: FC<CircleProps> = ({ children, circlesNum, radius, layaut, randomPos = true }) => {

  function rand() {
    return Math.ceil(Math.random() * 90);
  }
  return (
    <>
      {
        Array(circlesNum).map(() => {
          <div className="circle circle--radius" style={{ top: rand(), left: rand() }}>
            <div className="circle circle--radius" style={{ left: 0, top: 0, margin: 0 }} />
            {children}
          </div>
        })
      }

      <style jsx>{`
        .circle:hover {
          transition: 0.5s;
          transform: scale(1.5);
        }
        .circle {
          position: relative;
          margin-top: 2rem;
          transition: 0.5s;
        }
        .circle--radius{
          width: ${radius};
          height: ${radius};
        }
        .circle {
          top: 1rem;
          right: 6rem;
        }
        .circle .circle:hover{
          transform: scale(0);
        }
  `}</style>
    </>
  )
}

export default Circle
