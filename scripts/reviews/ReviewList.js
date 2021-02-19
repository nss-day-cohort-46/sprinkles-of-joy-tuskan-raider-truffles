import { ReviewForm } from "./ReviewForm.js"

const eventHub = document.querySelector("#container")


eventHub.addEventListener("showNewReviewForm", customEvent => {
    console.log("heard")
    ReviewForm()
})