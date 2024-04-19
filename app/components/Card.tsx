
export default function Card({data: {title, desc}}: 
  {data: {title: string, desc: string}}){
  return (
    <div className="my-3 border border-blue-200 rounded-md p-3 shadow">
      <h4 className="font-serif text-lg tracking-wider">{title}</h4>
      <hr />
      <p className="p-2">{desc}</p>
    </div>
  )
}
