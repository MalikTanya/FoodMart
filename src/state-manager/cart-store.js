import { create } from "zustand"

export const useCart = create((set) => {
    return {
        cartItems: [],
        totalPrice: 0,
        totalItems: 0,
        totalTax: 0,
        addToCart: (food) => {
            const cartItems = useCart.getState().cartItems

            const existingItemIndex = cartItems.findIndex((item) => item.id === food.id)
            if (existingItemIndex !== -1) {

                cartItems[existingItemIndex].quantity += 1

                console.log(cartItems[existingItemIndex])
                set((state) => ({
                    cartItems: cartItems,
                    totalPrice: state.totalPrice + food.price,
                    totalTax: state.totalTax + food.price / 20
                }));
            } else {
                food.quantity = 1;
                set((state) => ({
                    cartItems: [...state.cartItems, food],
                    totalPrice: state.totalPrice + food.price, // Update total price
                    totalItems: state.totalItems + 1,
                    totalTax: state.totalTax + food.price / 20
                }));
            }
        },
        removeFromCart: (id) => {
            const cartItems = useCart.getState().cartItems
            const itemToRemoveIndex = cartItems.findIndex((item) => item.id === id)

            if (itemToRemoveIndex !== -1) {
                cartItems[itemToRemoveIndex].quantity -= 1

                if (cartItems[itemToRemoveIndex].quantity == 0) {
                    set((state) => ({
                        cartItems: state.cartItems.filter((item) => item.id !== id),
                        totalPrice: state.totalPrice - cartItems[itemToRemoveIndex].price < 0 ? 0 : state.totalPrice - cartItems[itemToRemoveIndex].price, // Update total price
                        totalItems: state.totalItems - 1,
                        totalTax: state.totalTax - cartItems[itemToRemoveIndex].price < 0 ? 0 : cartItems[itemToRemoveIndex].price / 20
                    }));
                } else {
                    set((state) => ({
                        cartItems: cartItems,
                        totalPrice: state.totalPrice - cartItems[itemToRemoveIndex].price,
                        totalTax: state.totalTax - cartItems[itemToRemoveIndex].price / 20
                    }));
                }
            }
        },
        deleteFromCart: (id) => {
            const cartItems = useCart.getState().cartItems
            const itemToBeDeleted = cartItems.find((item) => item.id === id)
            set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== id),
                totalPrice: state.totalPrice - itemToBeDeleted.price * itemToBeDeleted.quantity, // Update total price
                totalItems: state.totalItems - 1 // Decrement total items
            }));
        }
    }
})