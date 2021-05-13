import { useState } from 'react'
import { CardContent, Layout } from '../card.interfaces'

/**
 * Card que se usa en la cardGrid
 * @param {Object } data
 * @param cardContent its implementation of  CardContent interface
 * @returns Element 
 */
const Card = ({ cardContent, layaut }: { cardContent: CardContent, layaut: Layout | undefined }) => {

  const [onHover, setOnHover] = useState(false)

  return (
    <>
      <div
        className="card"
        style={{
          transition: '1s ease-in',
          color: cardContent.colorIcon,
          width: layaut?.width,
          height: layaut?.height
        }}
        onMouseMove={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >

        <div className={`card__icon ${onHover && cardContent.code && 'desactive'}`}>
          {cardContent.Icon}
        </div>
        <div className={`card__text ${onHover && cardContent.code && 'desactive'}`}>
          {cardContent.text}
        </div>

        {cardContent.code && <div
          className={`card__description ${onHover && 'card__active'}`}
        >
          <a href={cardContent.code} target='__blank'>Código</a>
          <a href={cardContent.web} target='__blank'>Web</a>
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
          --webkit-backdrop-filter: blur(5px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          justify-content: space-evenly;
          justify-self: center;
          align-items: center;
          z-index: 1;
          position: relative;
        }
        

        .card__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:80px;
          transition: 1s;
          opacity: 1;
        }
        .card__text {
          font-size: 1.8em;
          transition: 1s;
          font-weight: 600;
            opacity: 1;
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
        .desactive{
          opacity: 0;
        }
    `}</style>
    </>
  )
}

export default Card
