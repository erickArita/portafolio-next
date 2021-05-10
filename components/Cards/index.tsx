import Card from './Card'
export interface CardContent {
  Icon: JSX.Element | string,
  text: string,
  color?: string,
  code?:string;
  web?:string;
}
export interface Layout {
  height?: number | string;
  width?: number | string;
}
const Cards = ({ skills, layaut }: { skills: CardContent[], layaut?: Layout }) => {

  return (
    <>
      <div className="cards">
        {
          skills.map((skill =>
            <Card
              key={skill.text}
              skill={skill}
              layaut={layaut}
            />
          ))
        }
      </div>

      <style jsx>{`
        .cards {
          align-self: center;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(${layaut?.width || '310'}px, 1fr));
          grid-gap: 3rem;
          width: 90%;
        }
       
  `}</style>

    </>
  )
}

export default Cards
