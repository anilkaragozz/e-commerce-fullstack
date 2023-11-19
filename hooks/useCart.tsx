"use client"

import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


interface CartContextProps{
    productCartQty: number,
    cartPrdcts:CardProductProps[] | null,
    addToBasket: (product: CardProductProps) => void,
    addToBasketIncrease: (product: CardProductProps) => void,
    addToBasketDecrease: (product: CardProductProps) => void,
    removeFromCart: (product: CardProductProps) => void,
    removeCart: () => void
}
 
const CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName: string] : any
}

export const CartContextProvider = (props: Props) => {

    const [productCartQty, setProductCartQty] = useState(0)
    const [cartPrdcts, setCardPrdcts] = useState<CardProductProps [] | null>(null)

    useEffect(()=> {
        let getItem: any = localStorage.getItem('cart')
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
        setCardPrdcts(getItemParse)
    },[])    

    const addToBasketIncrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if(product.quantity == 10) {
            return toast.error("you can't add more...")
        }
        if(cartPrdcts){
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)

            if(existingItem > -1){
                updatedCart[existingItem].quantity = ++updatedCart[existingItem].quantity
            }
            setCardPrdcts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    },[cartPrdcts])

    const addToBasketDecrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if(product.quantity == 1) {
            return toast.error("you can't decrease more...")
        }
        if(cartPrdcts){
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)

            if(existingItem > -1){
                updatedCart[existingItem].quantity = --updatedCart[existingItem].quantity
            }
            setCardPrdcts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    },[cartPrdcts])

    const addToBasket = useCallback((product: CardProductProps) => {
        setCardPrdcts(prev => {
            let updatedCart;
            if(prev){
                updatedCart = [...prev, product]
            }else {
                updatedCart = [product]
            }
            toast.success('product added to basket!')
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
    },[cartPrdcts])

    const removeFromCart = useCallback((product: CardProductProps)=>{
        if(cartPrdcts){
            const filteredProducts = cartPrdcts.filter(cart => cart.id !== product.id)

            setCardPrdcts(filteredProducts)
            toast.success('product deleted from cart!')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))
        }
    },[cartPrdcts])

    const removeCart = useCallback(() => {
        setCardPrdcts(null)
        toast.success('all products deleted from cart!')
        localStorage.setItem('cart', JSON.stringify(null))
    },[])

    let value = {
        productCartQty,
        addToBasket,
        addToBasketIncrease,
        addToBasketDecrease,
        cartPrdcts,
        removeFromCart,
        removeCart
    }

    return (
        <CartContext.Provider value={value} {...props} />
    )
}

const useCart = () => {
    const context = useContext(CartContext)
    if(context == null) {
        throw new Error("bir hata mevcut")
    }
    return context
}

export default useCart
