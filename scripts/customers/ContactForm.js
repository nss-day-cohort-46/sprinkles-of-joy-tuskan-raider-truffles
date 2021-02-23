import { saveContact } from "./CustomerProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".contactBox")


export const ContactForm = () => {
  return contentTarget.innerHTML = `
<dialog open>  
  <form class="contact_form">
      <fieldset>
        <label for="dateOf">Date</label>
        <input type="date" name="noteDate" id="noteDate"></input>

        <label for="firstName">First Name: </label>
        <input type="text" id="firstName" name="firstName">

        <label for="lastName">Last Name: </label>
        <input type="text" id="lastName" name="lastName">

        <label for="customerEmail">Email: </label>
        <input type="text" id="customerEmail" name="customerEmail">

        <label for="phoneNumber">Phone Number</label>
        <input type="int" name="phoneNumber" id="phoneNumber"></input>

        <label for="entryNotes">Message</label>
        <textarea name="message" id="message"></textarea>

       
    </fieldset>    
        <button id="submit">Submit Contact</button>
    </form>
</dialog>
        `
}



eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "contactForm") {
    clickEvent.preventDefault()
    ContactForm()
  
    // console.log("Please hear me")
    
  }
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "submit") {
    clickEvent.preventDefault()
    const phoneNumber = document.querySelector("#phoneNumber").value
    const message = document.querySelector("#message").value
    const date = document.querySelector("#noteDate").value
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#customerEmail").value

    const newContact = {
      "message": message,
      "date": date,
      "phoneNumber": phoneNumber,
      "email": email,
      "firstName": firstName,
      "lastName": lastName
      }
      saveContact(newContact)
      .then(contentTarget.innerHTML = "")
    }

})
