import { authHelper } from "../auth/authHelper.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"
import { getProducts, useProducts } from "../products/ProductProvider.js"
import { ReviewForm } from "./ReviewForm.js"
import { getReviews, useReviews } from "./ReviewProvider.js"
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".reviewBox")

eventHub.addEventListener("showNewReviewForm", customEvent => {
    customEvent.preventDefault()
    // console.log("heard")
    ReviewForm()
})

eventHub.addEventListener("showProductReview", customEvent => {
    customEvent.preventDefault()
    // debugger
    const productId = customEvent.detail.productReview
    
    // console.log("heard2")
    ProductReviews(productId)
    // debugger   
})
let reviewedProduct = ""
let allReviews = []
let allCategories = []
let allProducts = []
let filterReviews = []
let allCustomers = []

const ProductReviews = (productId) => {
    getProducts()
        .then(getReviews)
        .then (getCategories) 
        .then (getCustomers)           
        .then (() => {
        allProducts = useProducts()
        allReviews = useReviews()
        allCategories = useCategories()
        allCustomers = useCustomers ()
        reviewedProduct = allProducts.find(prod => parseInt(prod.id) === productId)
        // debugger
        filterReviews = allReviews.filter(review => parseInt(review.productId) === reviewedProduct.id)
        const reviews = filterReviews.find(rev => parseInt(rev.productId) === reviewedProduct.id)
        const categories = allCategories.find(cat=> cat.id === reviewedProduct.categoryId)
        // debugger
        // const user = allCustomers.find(user => user.id === parseInt(reviews.customerId))
        return contentTarget.innerHTML += `
        <dialog open>
        <div><button id="reviewClose">x</button></div>
        <div>
        <h4>Reviews for: ${reviewedProduct.name} ${categories.name}</h4>
        
        <div>${filterReviews.map(review => `<div>${review.date}<br>Rating: ${review.rating}<br>Message: ${review.message}</dive>`).join("")}</div>
        </div>
        </dialog>
        `
            
        
    })
    eventHub.addEventListener("click", event => {
        if (event.target.id === "reviewClose") {
          closeReview()
        }
      })
      
      const closeReview= () => {
        contentTarget.innerHTML = ""
      }
           // debugger
        }