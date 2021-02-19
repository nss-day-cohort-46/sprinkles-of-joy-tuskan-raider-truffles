import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []
export const ProductList = () => {
  // debugger
  getProducts()
    .then(getCategories)
    .then(() => {
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      render(bakeryProducts, bakeryCategories)
      
    })
}

const render = (bakeryProducts, bakeryCategories) => {
    const productArray = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)
    return Product(product, productCategory)

  }).join("")

  contentTarget.innerHTML = `${productArray}`
}

eventHub.addEventListener("categorySelected", event =>{
  // debugger
  getProducts()
  .then(getCategories)
  .then (()=> {
    const chosenCategory = parseInt(event.detail.selectedCategory)
    const products = useProducts()
    const categories = useCategories()
    if(chosenCategory === 0){
      render(bakeryProducts, bakeryCategories)
    }
    else {
    const productFilter = products.filter( product => product.categoryId === chosenCategory)
    const productCategory = categories.filter(category => category.id === chosenCategory)
    render(productFilter, productCategory)}
  })
})
