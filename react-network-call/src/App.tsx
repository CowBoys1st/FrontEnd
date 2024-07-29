import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Users from "./pages/users"
import CreateUser from "./pages/create"

function App() {
  return (
    <div className="bg-teal-50 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={ <CreateUser />} />
        
      </Routes>
    </div>
  )
}

export default App
