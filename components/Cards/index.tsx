import Card from './Card'
import { CardContent, Layout } from './card.interfaces'


/**
 * Grid of cards will be use in skills and proyect component
 * @param {content | CardContent[]} content Its object array object of type CardContent
 * @param {layaut | Layout} layaut and heigth of card
 * @returns Return cards grid 
 */
const Cards = ({ content, layaut }: { content: CardContent[], layaut?: Layout }) => {

  return (
    <>
      <div className="cards">
        {
          content.map((skill =>
            <Card
              key={skill.text}
              cardContent={skill}
              layaut={layaut}
            />
          ))
        }
      </div>

      <style jsx>{`
        .cards {
          align-self: center;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          grid-gap: 1rem;
          width: 90%;
        }
       
  `}</style>

    </>
  )
}

export default Cards
