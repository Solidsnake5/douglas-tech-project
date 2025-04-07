"use client"

const FormButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-[#6DD3E1] w-full p-4 text-white rounded-md shadow-xl hover:bg-black transition-colors duration-300"
    >
      {props.text}
    </button>
  )
}

export default FormButton

