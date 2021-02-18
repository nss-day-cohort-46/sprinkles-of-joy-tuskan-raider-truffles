console.log("Welcome to Sprinkles of Joy!")

import "./customers/RegisterForm.js"
import "./orders/OpenCart.js"
import "./orders/OrderList.js"
import { CustomerNav } from "./customers/CustomerNav.js"
import { CategorySelect } from "./categories/CategorySelect.js"
import { LoginForm } from "./customers/LoginForm.js"
import { ProductList } from "./products/ProductList.js"
import { getProducts } from "./products/ProductProvider.js"


LoginForm()
CustomerNav()
CategorySelect()
ProductList()
getProducts()
// console.log("Hey There", getProducts())