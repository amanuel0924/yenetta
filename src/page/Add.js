import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import classes from "./Add.module.css"
import { db } from "../firebase"
import { useNavigate, Link } from "react-router-dom"
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore"

const Add = () => {
  const [data, setData] = useState({})
  const [name, setNameState] = useState("")
  const [price, setPriceState] = useState("")
  const [quantity, setQuantityState] = useState("")
  const [description, setDescriptionState] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setData(filteredData)
    })
    return () => {
      setData({})
    }
  }, [id])

  useEffect(() => {
    const obj = Array.isArray(data)
      ? data.find((obj) => obj.id === id)
      : { name: "", price: "", quantity: "", description: "" }
    if (obj) {
      setNameState(obj.name)
      setPriceState(+obj.price)
      setQuantityState(+obj.quantity)
      setDescriptionState(obj.description)
    }
    return () => {
      setNameState("")
      setPriceState("")
      setQuantityState("")
      setDescriptionState("")
    }
  }, [data, id])

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
    if (!id) {
      try {
        await addDoc(collection(db, "products"), {
          name: name,
          price: +price,
          description: description,
          quantity: +quantity,
        })
        toast.success("added sucssusfuly")
        setNameState("")
        setPriceState("")
        setQuantityState("")
        setDescriptionState("")
        navigate("/")
      } catch (err) {
        toast.error(err)
      }
    } else {
      const docRef = doc(db, "products", id)
      try {
        await updateDoc(docRef, {
          name: name,
          price: +price,
          description: description,
          quantity: +quantity,
        })
        toast.success("updated successfully")
        setNameState("")
        setPriceState("")
        setQuantityState("")
        setDescriptionState("")
        navigate("/")
      } catch (err) {
        toast.error("Error updating document: ", err)
      }
    }
  }

  return (
    <div className={classes.container}>
      <form className={classes.wrapper} onSubmit={onSubmitHandeler}>
        <header>
          <h2>{id ? "update" : "Add"}</h2>
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
            value={name || ""}
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
            value={price || "0" || ""}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            onChange={handleQuantityChange}
            value={quantity || "0" || ""}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            rows="4"
            cols="30"
            minLength="3"
            maxLength="150"
            placeholder="description........"
            onChange={handleDescriptionChange}
            value={description || ""}
            required
          />
        </div>
        <div className={classes.btncontainer}>
          <button className={classes.btn} type="submit">
            {`${id ? "update" : "Add"}`}
          </button>
          <Link to="/">
            <button
              style={{ backgroundColor: "#f5fafa" }}
              className={classes.btn}
              type="submit"
            >
              Cancle
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Add
