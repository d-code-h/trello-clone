import clsx from "clsx"

export default function Button({text}: {text: string}) {
  return (
    <button className={clsx("bg-blue-500 text-white p-2 rounded-md flex ms-auto hover:shadow")} type="button">{text}</button>
  )
}
