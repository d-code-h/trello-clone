import Cards from './components/Cards';
import Button from './components/Button';

export default function page(){
  return (
    <article className='m-5'>
      <h1 className='text-blue-500 text-4xl font-mono font-bold p-2 m-2 tracking-widest'>Trello Clone</h1>
      <Button text="Add Card" />
      <Cards />
    </article>
  )
}

