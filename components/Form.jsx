"use client"

import { useRef } from "react"
import FormButton from "./FormButton"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const Form = () => {
  const form = useRef()

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    fname: "",
    lname: "",
    phone: "",
    message: "",
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    fname: false,
    lname: false,
    phone: false,
  })

  let formisInvalid = null

  const phoneIsInvalid = didEdit.phone && isNaN(enteredValues.phone)
  const phoneIsTooShort = didEdit.phone && enteredValues.phone.length <= 9
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@")
  const fnameIsInvalid = didEdit.fname && enteredValues.fname.length < 2
  const lnameIsInvalid = didEdit.lname && enteredValues.lname.length < 2
  const emailIsEmpty = enteredValues.email == ""
  const fnameIsEmpty = enteredValues.fname == ""
  const lnameIsEmpty = enteredValues.lname == ""
  const phoneIsEmpty = enteredValues.phone == ""

  if (emailIsEmpty || fnameIsEmpty || lnameIsEmpty || phoneIsEmpty) {
    formisInvalid = true
  }

  function handleInputCange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }))

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier, value) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (formisInvalid) {
      console.log("Form is invalid")
      return
    }

    if (emailIsInvalid || fnameIsInvalid || lnameIsInvalid || phoneIsInvalid) {
      console.log("Invalid form data")
      return
    }
    //reset vals to false so the  form error messages dissapear
    didEdit.email = false
    didEdit.lname = false
    didEdit.fname = false
    didEdit.phone = false

    //make sure http req is not sent if form data is invalid
    console.log("Sending HTTP Req")
    console.log(enteredValues)

    //reset form data after submission. Dont reset if form is invalid
    setEnteredValues({
      email: "",
      fname: "",
      lname: "",
      phone: "",
      message: "",
    })

    emailjs
      .sendForm("service_w98doyd", "template_om7x2o7", form.current, {
        publicKey: "0SE603wddNMqUJfVq",
      })
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        },
      )
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="bg-white w-full p-10 rounded-lg  shadow-xl">
      <h3 className="mb-6 text-3xl">We want to hear from you</h3>
      {formisInvalid && <p className="mb-6 text-red-400">Please fill out all input fields</p>}

      <div className="flex justify-between mb-4">
        <div className="w-2/4  mr-4 flex flex-col">
          <input
            className="w-full mr-4 border border-gray-300 focus:outline-none focus:border-primary rounded-md p-4"
            name="fname"
            placeholder="First Name"
            id="fname"
            type="text"
            onChange={(e) => handleInputCange("fname", e.target.value)}
            value={enteredValues.fname}
            onBlur={() => handleInputBlur("fname")}
          ></input>

          <div>{fnameIsInvalid && <p className="text-red-700 ">Please enter a valid First name</p>}</div>
        </div>

        <div className="w-2/4 ">
          <input
            className="w-full p-4 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
            name="lname"
            placeholder="Last Name"
            id="lname"
            type="text"
            onChange={(e) => handleInputCange("lname", e.target.value)}
            value={enteredValues.lname}
            onBlur={() => handleInputBlur("lname")}
          ></input>
          <div>{lnameIsInvalid && <p className="text-red-700 ">Please enter a valid Last name</p>}</div>
        </div>
      </div>

      <div className="mb-4">
        <input
          className="w-full  p-4 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
          name="email"
          placeholder="Email"
          id="email"
          type="text"
          onChange={(e) => handleInputCange("email", e.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
        ></input>
        <div>{emailIsInvalid && <p className="text-red-700 ">Please enter a valid email address</p>}</div>
      </div>
      <div className="mb-4">
        <input
          className="w-full p-4 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
          name="phone"
          placeholder="Phone Number"
          id="number"
          type="tel"
          required
          inputMode="numeric"
          onChange={(e) => handleInputCange("phone", e.target.value)}
          value={enteredValues.phone}
          onBlur={() => handleInputBlur("phone")}
        />
        <div>{phoneIsInvalid && <p className="text-red-700 ">Please enter a valid phone number</p>}</div>
        <div>{phoneIsTooShort && <p className="text-red-700 ">Number must be at least 9 digits</p>}</div>
      </div>
      <div className="mb-4">
        <textarea
          className="w-full h-48 p-4 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
          name="message"
          placeholder="Tell us about your needs"
          id="info"
          type="text"
          value={enteredValues.message}
          onChange={(e) => handleInputCange("message", e.target.value)}
        ></textarea>
      </div>
      <FormButton text="Submit" onClick={handleSubmit} />
    </form>
  )
}

export default Form

