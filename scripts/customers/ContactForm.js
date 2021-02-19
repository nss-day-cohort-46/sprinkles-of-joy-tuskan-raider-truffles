const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".contactBox")


const contactForm = () => {
  return contentTarget.innerHTML = `
<dialog open>  
  <form>
      <fieldset>
        <label for="dateOf">Date</label>
        <input type="date" name="noteDate" id="noteDate"></input>
        <label for="customerEmail">Email: </label>
        <input type="text" id="customerEmail" name="customerEmail">
      </fieldset>

      <fieldset>
        <label for="phoneNumber">Phone Number</label>
        <input type="int" name="phoneNumber" id="phoneNumber"></input>
        </fieldset>
        <label for="entryNotes">Message</label>
        <input type="text" name="message" id="message"></input>
      </fieldset>
          <button id="submit">Submit Contact</button>
    </form>
</dialog>
        `
}

// const ContactForm = () => {
//   render()
// }

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "contactForm") {
    clickEvent.preventDefault()
    // ContactForm()
    console.log("Please hear me")
  //   const phoneNumber = document.querySelector("#phoneNumber").value
  //   const message = document.querySelector("message").value
  //   const date = document.querySelector("#noteDate").value
  //   const email = document.querySelector("#customerEmail").value

  //   const newContact = {
  //     "message": message,
  //     "date": date,
  //     "phoneNumber": phoneNumber,
  //     "intuition": intuition,
  //     "criminalId": parseInt(criminalId)
  // }
    
  }
})