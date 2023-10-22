import React, { useState, useEffect } from "react"
import { db } from "../firebase"
import { useNavigate, Link, useParams } from "react-router-dom"
import { collection, getDoc, doc } from "firebase/firestore"
import Card from "../componets/layout/Card"

const View = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(collection(db, "products"), id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct(docSnap.data())
      } else {
        setProduct({})
      }
    }
    fetchData()
  }, [id])
  const { name, price, quantity, description } = product
  return (
    <div>
      <Card
        name={name}
        price={price}
        quantity={quantity}
        description={description}
        showbutton="view"
      />
    </div>
  )
}

export default View
