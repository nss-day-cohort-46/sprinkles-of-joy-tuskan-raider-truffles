import { bakeryAPI } from "../Settings.js"


let reviews = []

export const useReviews = () => reviews.slice()

export const getReviews = () => {
    return fetch(`${bakeryAPI.baseURL}/reviews`)
      .then(response => response.json())
      .then(parsedResponse => {
        reviews = parsedResponse
      })
  }




export const saveReview = (newReview) => {
    // debugger
    return fetch('http://localhost:8088/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
}