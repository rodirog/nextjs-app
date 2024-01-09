interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button className="h-6 px-3 sm:h-8 px-8 lg:h-12 lg:px-5 ">
      <p className={'text-sm sm:text-base lg:text-xl'}>{text}</p>
    </button>
  )
}
export default Button
