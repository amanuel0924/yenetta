import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import classes from "./Add.module.css"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

const Add = () => {
  const [data, setData] = useState({})
  const [name, setNameState] = useState("")
  const [price, setPriceState] = useState("")
  const [quantity, setQuantityState] = useState("")
  const [description, setDescriptionState] = useState("")

  const handleNameChange = (event) => {
    setNameState(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPriceState(+event.target.value)
  }
  const handleQuantityChange = (event) => {
    setQuantityState(+event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescriptionState(event.target.value)
  }

  const onSubmitHandeler = async (event) => {
    event.preventDefault()
    try {
      await addDoc(collection(db, "products"), {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
      })
      toast.success("added sucssusfuly")

      setNameState("")
      setPriceState("")
      setQuantityState("")
      setDescriptionState("")
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <form className={classes.wrapper} onSubmit={onSubmitHandeler}>
      <header>
        <h2>title</h2>
      </header>
      <div>
        <input
          type="text"
          pattern="[A-Za-z0-9\s]+"
          name="productName"
          minLength="1"
          maxLength="20"
          placeholder="Product Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="price"
          min="0"
          max="10000000"
          step="1"
          pattern="\d+(\.\d{1,2})?"
          placeholder="Price"
          onChange={handlePriceChange}
          value={price}
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="quantity"
          min="0"
          max="10000"
          placeholder="Quantity"
          pattern="\d+"
          onChange={handleQuantityChange}
          value={quantity}
          required
        />
      </div>
      <div>
        <textarea
          name="description"
          rows="4"
          cols="30"
          minLength="10"
          maxLength="80"
          placeholder="description........"
          onChange={handleDescriptionChange}
          value={description}
          required
        />
      </div>

      <button className={classes.btn} type="submit">
        Add
      </button>
    </form>
  )
}

export default Add
