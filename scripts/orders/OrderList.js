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
let customerProducts = []
let customerOP = []

export const OrderList = () => {
  // if (authHelper.isUserLoggedIn()) {
  if (authHelper.isUserLoggedIn()) {
     (getOrders())
      .then(getProducts)
      .then(getOrderProducts)
      .then(() => {
        customerOrders = useOrders()
        customerProducts = useProducts()
        customerOP = useOrderProducts()
        // debugger
        customerOrders = customerOrders.filter(order =>order.customerId === parseInt(authHelper.getCurrentUserId()))
        // console.log("Yum", customerOrders)
        const CustomerOrderHistory = customerOrders.map(orders => {
          let orderProductArray = customerOP.filter(orderProd => orderProd.orderId === orders.id)
           filteredProd = orderProductArray.map(opa => {
            return customerProducts.find(products => products.id === opa.productId)
          })
          return Order(orders, filteredProd)
        })
        render(CustomerOrderHistory)
      })

      }
  }

// STEP BY STEP ORDER HISTORY
// Get information from orders
// Get order products (Line 22)
// Get products for product name (Line 21)
// Get current use ID (Line 28)
// Get customer orders and then filter for order.id to currentUserID (Line 28)
  // const renderToDom = (orderCollection) => {
  
//   for (const order of orderCollection) {
//   const orderRelationship = orderProductsJoinTable.filter(orderProducts => orders.customerId === customerOrders.customerId)
//   }
// }

const render = (cusOrderHistory) => {
  // const ordersHtmlRepresentation = customerOrders.map(order => Order(order)).join("")

  contentContainer.innerHTML = `CustomerOrderHistory
  <div id="orders__modal" class="modal--parent">
        <div class="modal--content">
        <h3>Previous Orders</h3>
        <div>
        <h5>Ordered on</h5>
        ${cusOrderHistory.statusId}
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
