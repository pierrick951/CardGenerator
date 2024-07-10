import { create } from "zustand";


interface priceType {
    price:number,
    setPrice: (newPrice : number ) => void;
} 


const usePrice = create<priceType>((set) =>({
    price:0,
    setPrice: (newPrice: number) => set({price: newPrice})
    
}))

export default usePrice;