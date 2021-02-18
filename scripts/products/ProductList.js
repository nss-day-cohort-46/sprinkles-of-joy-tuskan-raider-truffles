import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")
// debugger
let bakeryProducts = []
let bakeryCategories = []

export const ProductList = () => {
  getProducts()
  .then(getCategories)
  .then(() => {
    bakeryProducts = useProducts()
    bakeryCategories = useCategories()
  })
  render()
}
// debugger
const render = () => {
  const htmlProducts = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)
    console.log(product)
    return Product(product, productCategory)
  }).join("")
  
  contentTarget.innerHTML = `${htmlProducts}`
}
