import { getProducts, useProducts } from "../products/ProductProvider.js"
import { saveReview } from "./ReviewProvider.js"
import {authHelper} from "../auth/authHelper.js"

const contentTarget = document.querySelector(".userCart")
const eventHub = document.querySelector("#container")

export const ReviewForm = () => {
    // console.log("got to here")
    let bakeryProducts = []
    getProducts()
      .then(() => {
        bakeryProducts = useProducts()
        render()
        
      })
const render = () => {
   contentTarget.innerHTML =  ` 
        <form>
            <fieldset><legend>Review:</legend>
            <label for="dateOf">Date</label>
            <input type="date" name="reviewDate" id="reviewDate"></input><br>
            <label for="productReview">Product:</label><br>
            <select class="productDropdown" id="productSelect">
                <option value="0">Select Product to Review...</option>
                ${bakeryProducts.map(product =>`<option value="${product.id}">${product.name}</option>`)}
            </select>
            <fieldset class="rating">
                <legend>Please rate:</legend>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1" title="Sucks big time">1 star</label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2" title="Kinda bad">2 stars</label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3" title="Meh">3 stars</label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4" title="Pretty good">4 stars</label>
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5" title="Rocks!">5 stars</label>
            </fieldset>
            <label for="reviewMessage">Review:</label><br>
            <textarea name="reviewMessage" id="reviewMessage" placeholder="Write your review here!"></textarea>
            </fieldset>
                <button id="submitReview">Submit Review</button>
        </form>
  `
}
}
eventHub.addEventListener("click", event => {
  if (event.target.id === "submitReview") {
    event.preventDefault()

      const date = document.querySelector("#reviewDate").value
      const productId = document.querySelector("#productSelect").value
      const rating = document.querySelector("input[name=rating]:checked").value
      const review = document.querySelector("#reviewMessage").value
      const authUserId = authHelper.getCurrentUserId()
      
     
            const newReview = {
                "date": date,
                "productId": productId,
                "rating": rating,
                "message": review,
                "customerId": parseInt(authUserId)
        
              }
              saveReview(newReview)
            
            }
})