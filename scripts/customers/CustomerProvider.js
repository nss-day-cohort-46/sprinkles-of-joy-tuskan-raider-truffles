import { bakeryAPI } from "../Settings.js"

let customers = []

export const useCustomers = () => customers.slice()

export const getCustomers = () => {
  return fetch(`${bakeryAPI.baseURL}/customers`)
    .then(response => response.json())
    .then(parsedResponse => {
      customers = parsedResponse
    })
}
export const getCustomer = (id) => {
  return fetch(`${bakeryAPI.baseURL}/customers/${id}`)
    .then(response => response.json())
}

export const customerLogin = (email, password) => {
  return fetch(`${bakeryAPI.baseURL}/customers?email=${email}&password=${password}`)
    .then(res => res.json())
    .then(user => user.length ? user[0] : false)
}

export const saveContact = (note) => {
  let stringifiedObj = JSON.stringify(note)
  // debugger
  return fetch('http://localhost:8088/contactInfo', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: stringifiedObj
  })
  // .then(getCustomer) // fetch the notes collection containing the newly added note
  // .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}

// const dispatchStateChangeEvent = () => {
//   const noteStateChangedEvent = new CustomEvent("noteStateChanged")

//   eventHub.dispatchEvent(noteStateChangedEvent)
// }