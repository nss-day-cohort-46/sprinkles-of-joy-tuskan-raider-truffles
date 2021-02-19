const contentTarget = document.querySelector(".userCart")

export const ReviewForm = () => {
    console.log("got to here")
   contentTarget.innerHTML =  ` 
        <form>
            <fieldset>
            <label for="dateOf">Date</label>
            <input type="date" name="reviewDate" id="reviewDate"></input>
            <label for="productReview">Product:</label><br>
            <input type="text" name="productReview" id="productReview"></input><br>
            <label for="reviewMessage">Review:</label><br>
            <textarea name="reviewMessage" id="reviewMessage" placeholder="Write your review here!"></textarea>
            </fieldset>
                <button id="submitReview">Submit Review</button>
        </form>
  `
}