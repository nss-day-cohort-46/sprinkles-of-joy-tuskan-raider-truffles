import { authHelper } from "../auth/authHelper.js"
// import { getCustomer } from "../customers/CustomerProvider.js"
import { getProducts, useProducts } from "../products/ProductProvider.js"
import { Order } from "./Order.js"
import { getOrderProducts, useOrderProducts } from "./OrderProductProvider.js"
import { getOrders, useOrders } from "./OrderProvider.js"

getOrderProducts()

const eventHub = document.querySelector("#container")
const contentContainer = document.querySelector(".userOrders")

let customerOrders = []
let customerProduts = []
let customerOP = []

export const OrderList = () => {
  // if (authHelper.isUserLoggedIn()) {
  if (authHelper.getCurrentUserId()) {
     (getOrders())
      .then(getProducts)
      .then(getOrderProducts)
      .then(() => {
        customerOrders = useOrders()
        customerProduts = useProducts()
        customerOP = useOrderProducts()
        debugger
        customerOrders = customerOrders.filter(order =>order.id === authHelper.getCurrentUserId())
        console.log("Yum", customerOrders)
        // CustomerOrderHistory = customerOrders1.map()
        render()
      })

      }
  }

// const renderToDom = (orderCollection) => {
  
//   for (const order of orderCollection) {
//   const orderRelationship = orderProductsJoinTable.filter(orderProducts => orders.customerId === customerOrders.customerId)
//   }
// }

const render = () => {
  const ordersHtmlRepresentation = customerOrders.map(order => Order(order)).join("")

  contentContainer.innerHTML = `
  <div id="orders__modal" class="modal--parent">
        <div class="modal--content">
        <h3>Previous Orders</h3>
        <div>
        <h5>Ordered on</h5>
        ${ordersHtmlRepresentation}
        </div>
        <button id="modal--close">Close</button>
        </div>
    </div>
      `
}

eventHub.addEventListener("showPastOrders", () => {
  // console.log("heard")
  OrderList()
})

eventHub.addEventListener("click", event => {
  if (event.target.id === "modal--close") {
    closeModal()
  }
})

const closeModal = () => {
  contentContainer.innerHTML = ""
}
