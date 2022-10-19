import { getStoredCart } from "../utilities/fakedb"

export const ProductsandcardLoader=async()=>{
    const productsData=await fetch("products.json")
    const products=await productsData.json()

    const savedCart=getStoredCart()
   const priviesCart=[]
    for(const id in savedCart){
       const addedProduct=products.find(product=>product.id===id)
       if(addedProduct){
        const quantity=savedCart[id]
        addedProduct.quantity=quantity
        priviesCart.push(addedProduct)
       }
    }

return {products,priviesCart}
}