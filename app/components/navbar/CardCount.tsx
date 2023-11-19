"use client"
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";
const CardCount = () => {

  const {cartPrdcts} = useCart()
  return (
    <div className="hidden md:flex relative">
       <Link href="/cart">  <MdShoppingBasket size="25"/></Link>
      <div className="absolute -top-1 -right-2 text-xs bg-orange-900 w-4 h-4 flex items-center justify-center rounded-full "> {cartPrdcts?.length} </div>
    </div>
  )
}

export default CardCount
