import Image from "next/image";
import { CardContent } from "../components/Cards/card.interfaces";

/**Data to proyects component of type CardContent[] */
export const ProyectosCards: CardContent[] = [
  {
    Icon: <Image src='/little.png' height={100} width={100} objectFit='cover' />,
    text: 'Litle Coffee',
    code: 'https://github.com/erickArita/litle-coffe',
    web: 'https://littlecoffeesr.vercel.app/'
  },
  {
    Icon: <Image src='/cole.png' height={100} width={100} objectFit='contain' />,
    text: 'INSUCA',
    code: 'https://github.com/erickArita/matricula-app',
    web: 'https://erickarita.github.io/docs/'
  },
  {
    Icon: <Image src='/mano.png' height={100} width={100} objectFit='contain' />,
    text: 'Club Dame Tu Mano',
    code: 'https://github.com/erickArita/dametumano',
    web: 'https://erickarita.github.io/dametumano/'
  },
  {
    Icon: '',
    text: 'Más en camino...',
    code: '',
    web: ''
  },
]