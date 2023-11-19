import { CardProductProps } from "../detail/DetailClient"

interface CounterProps {
    cardProduct: CardProductProps,
    increaseFunc: () => void,
    decreaseFunc: () => void
}

const Counter:React.FC<CounterProps> = ({cardProduct, increaseFunc, decreaseFunc}) => {
    const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md"
  return (
    <div className="flex items-center gap-2" > 
        <button className={buttonStyle} onClick={decreaseFunc}>-</button>
        <div className="text-lg md:text-xl">{cardProduct.quantity}</div>
        <button className={buttonStyle} onClick={increaseFunc}>+</button>
    </div>
  )
}

export default Counter
