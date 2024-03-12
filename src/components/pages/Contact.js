import { useState } from "react"; // Import useState
import { validateEmail, validatePhoneNumber, toTitleCase } from "../utils/helpers"; // Import helper files

// Builds the Contact component
export default function Contact() {

  const defaultErrorMessage =
    "I'm sorry. This form does not currently send emails, but input validation functions correctly.";

  // Variables and setters for form inputs
  const [inputs, setInputs] = useState({}); // Object to take care of all single line textboxes
  const [message, setMessage] = useState(""); // State variable to take care of the text area
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage); // State variable for the error message.

  // Event handler for all the text boxes when their value changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Event handler for the text area for when it's value changes
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Event handler for onBlur, i.e. focus leaves the control.
  // Performs validation of the form inputs
  const handleLostFocus = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    // If the field is blank, tell the user that it's required.
    if (inputValue === "") {
      setErrorMessage(`${toTitleCase(inputName)} is required.`);
      return;
    }

    // If there's something in the email text box, check to see if it's a valid email address
    if (inputName === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Invalid Email Address.");
        return;
      }
    }

    // If there's something in the phone number text box, check to see if it's a valid phone number
    if (inputName === "phone") {
      if (!validatePhoneNumber(inputValue)) {
        setErrorMessage("Invalid Phone Number.");
        return;
      }
    }

    // If all are good, clear the error message
    if (
      inputs.name &&
      message &&
      validatePhoneNumber(inputs.phone) &&
      validateEmail(inputs.email)
    ) {
      setErrorMessage("");
    }
  };

  // Event handler for submitting the form, i.e. clicking the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    // If all form inputs are good...
    if (inputs.name && message && validatePhoneNumber(inputs.phone) && validateEmail(inputs.email)) {
      // This is where we would actually send an email, but that's not required for this challenge.
      // In fact, the requirements state: "Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page."
      
      // So, we'll just set an error message for now.
      setErrorMessage(defaultErrorMessage);
    }
  };

  // Builds the Contact page
  return (
    <div className="sections">
      <section id="Contact">
        <h2>Contact</h2>
        <p>
          <form onSubmit={handleSubmit}>
            
            <label for="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="email">Email:</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="email">Phone Number:</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleLostFocus}
              rows="10"
            />
            <br />

            <input type="submit" text="Submit" />

          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </p>
      </section>
    </div>
  );
}
