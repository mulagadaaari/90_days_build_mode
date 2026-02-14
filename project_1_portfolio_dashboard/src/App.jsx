import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Header />
        <Dashboard />
      </div>

    </div>
  )
}

export default App
