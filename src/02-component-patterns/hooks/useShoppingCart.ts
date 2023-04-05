import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {
    const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setshoppingCart(oldShoppingCart => {

            const productinCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(productinCart.count + count, 0) > 0) {
                productinCart.count += count

                return {
                    ...oldShoppingCart,
                    [product.id]: productinCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart

            return {
                ...rest
            }
        })

    }

    return {
        onProductCountChange,
        shoppingCart
    }
}