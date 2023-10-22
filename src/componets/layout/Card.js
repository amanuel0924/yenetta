import React from "react"
import classes from "./Card.module.css"
import { Link } from "react-router-dom"

function Card(props) {
  const price = `$${Number(props.price).toFixed(2)}`
  const quantityStatus = props.quantity > 0 ? true : false
  const stockClass = quantityStatus ? classes.instock : classes.outstock
  const stocKvalue = quantityStatus ? "inStock" : "outStock"

  return (
    <section className={classes["blog-card"]}>
      <div className={classes["blog-content"]}>
        <div>
          <p className={`${classes.price} ${classes.lable}`}>{price}</p>
          <p className={`${classes.quantity} ${classes.lable}`}>
            {" "}
            <i className="fa fa-box"></i>
            {props.quantity}
          </p>
          <p className={`${stockClass} ${classes.lable}`}>{stocKvalue}</p>
        </div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.showbutton === "view" ? (
          <Link to="/">
            <button className={`${classes.btn} ${classes.lable}`}>
              <i class="fa-regular fa-circle-left"></i>
              <p>Back</p>
            </button>
          </Link>
        ) : (
          <div className={classes.btncontainer}>
            <Link to={`/veiw/${props.id}`}>
              <button className={classes.detail}>
                <i className="fa-solid fa-info"></i>
              </button>
            </Link>
            <Link to={`/update/${props.id}`}>
              <button className={classes.update}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </Link>
            <Link>
              <button
                className={classes.delete}
                onClick={() => {
                  props.onDelete(props.id)
                }}
              >
                <i className="fa fa-trash-can"></i>
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
export default Card
