import Card from './Card';

const cards = [
  {
    title: "First card",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    title: "Second Card",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  }
]

export default function Cards() {
  return (
    <div>
      {
        cards.map((each) => (
        <Card data={each} />
        ))
      }      
    </div>
  )
}
