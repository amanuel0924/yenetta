import React, { useState, useEffect } from "react"
import { db } from "../firebase"
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProductList(filteredData)
    })
  }, [])
  const onDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete?")) {
        toast.success("succesfuly deleted")
        const prodoc = doc(db, "products", id)
        await deleteDoc(prodoc)
      }
    } catch (err) {
      toast.error(err)
    }
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="row">No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td style={{ color: item.quantity > 0 ? "green" : "red" }}>
                  {item.quantity > 0 ? "inStock" : "outStock"}
                </td>
                <td>
                  <Link to={`/veiw/${item.id}`}>
                    <button className="detail">
                      <i className="fa-solid fa-info"></i>
                    </button>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <button className="update">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <Link>
                    <button
                      className="delete"
                      onClick={() => {
                        onDelete(item.id)
                      }}
                    >
                      <i className="fa fa-trash-can"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
