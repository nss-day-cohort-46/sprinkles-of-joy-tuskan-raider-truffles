import { authHelper } from "../auth/authHelper.js"
import { getCustomer } from "../customers/CustomerProvider.js"
import { LoginForm } from "./LoginForm.js"



const eventHub = document.querySelector("#container")
const userNav = document.querySelector(".userNav")
const logoutTarget = document.querySelector(".form__logout")
const userCart = document.querySelector(".userCart")


export const CustomerNav = () => {
  if (authHelper.isUserLoggedIn()) {
    getCustomer(authHelper.getCurrentUserId())
      .then(userObject => {
        render(userObject)
      })
  }
}

const render = (customer) => {
  userNav.innerHTML = `
    <h3>Welcome ${customer.name}!</h3>
    <ul class="userNav__links">
    <li class="userNav__link" <a href="#" id="userNav--showCart">My Cart</a></li>
    <li class="userNav__link" <a href="#" id="userNav--newReview">New Review</a></li>
    <li class="userNav__link" <a href="#" id="userNav--pastOrders">Order History</a></li>
    </ul>

    <button id="customerLogout">Logout</button>
  `
}

eventHub.addEventListener("userLoggedIn", event => {
  CustomerNav()
})

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("userNav--")) {
    const [idPrefix, idSuffix] = event.target.id.split("--")
    let customEvent
    switch (idSuffix) {
      case "showCart":
        customEvent = new CustomEvent("showCustomerCart")
        break;
      case "newReview":
        customEvent = new CustomEvent("showNewReviewForm")
        break;
      case "pastOrders":
        customEvent = new CustomEvent("showPastOrders")
        break;
    }
    eventHub.dispatchEvent(customEvent)
  }
})



eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "customerLogout") {
    authHelper.clearUserSession("")
    logoutTarget.innerHTML = ""
    userNav.innerHTML = ""
    userCart.innerHTML = ""
    LoginForm()
  }
})
