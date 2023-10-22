import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./page/Home"
import Add from "./page/Add"
import View from "./page/View"
import About from "./page/About"
import Header from "./componets/layout/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" autoClose={500} />

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/add" Component={Add} />
          <Route path="/update/:id" Component={Add} />
          <Route path="/veiw/:id" Component={View} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
