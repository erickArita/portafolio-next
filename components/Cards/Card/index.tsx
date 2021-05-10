import { useState } from 'react'
import { CardContent, Layout } from '../index'
const Card = ({ skill, layaut }: { skill: CardContent, layaut: Layout | undefined }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <>
      <div

        className="card"
        style={{
          transition: '1s ease-in',
          color: skill.color,
          width: layaut?.width,
          height: layaut?.height
        }}
        onMouseMove={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        {
          !onHover && <>
            <div className="card__icon">
              {skill.Icon}
            </div>
            <div className="card__text">
              {skill.text}
            </div>
          </>
        }
        {skill.code?.length != 0 && <div
          className={`card__description ${onHover && 'card__active'}`}
        >
          <a href={skill.code} target='__blank'>Código</a>
          <a href={skill.web} target='__blank'>Web</a>
        </div>}
      </div>
      <style jsx>{`
        .card {
          color: var(--white);
          height: 100px;
          width: 300px;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          border-radius: 10px;
          backdrop-filter: blur(5px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          justify-content: space-evenly;
          justify-self: center;
          align-items: center;
          z-index: 1;
          transition: 0.5s;
          position: relative;
          transition: 1s;
        }
        

        .card__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:80px;
        }
        .card__text {
          font-size: 1.8em;
          font-weight: 600;
        }
        .card__description{
          position: absolute;
          box-sizing: border-box;
          transition: .8s cubic-bezier(0.165, 0.84, 0.44, 1);
          opacity: 0;
          border-radius: 10px;
          display: flex;
          text-align: justify;
          height: 100%;
          width: 100%;
          padding: 1.3rem;
        }
        .card__active{
          top: 0rem;
          opacity: 1;
          color: var(--background);
          
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          transition: .8s ease;
        }  
        .card__active a{
          text-decoration: none;
          color: white;
          font-size: x-large;
        }  
    `}</style>
    </>
  )
}

export default Card
