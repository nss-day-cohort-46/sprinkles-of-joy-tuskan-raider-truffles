import { ReviewForm } from "./ReviewForm.js"

const eventHub = document.querySelector("#container")


eventHub.addEventListener("showNewReviewForm", customEvent => {
    customEvent.preventDefault()
    console.log("heard")
    ReviewForm()
})

