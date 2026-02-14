function App() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#111", color: "white", padding: "20px" }}>
        <h2>M AARI</h2>
        <p>Dashboard</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <h1>Data Portfolio Dashboard</h1>
        </div>

        {/* Content */}
        <div>
          <p>Welcome to my analytics dashboard.</p>
        </div>

      </div>

    </div>
  )
}

export default App
