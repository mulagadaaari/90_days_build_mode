function CourseCard({ name, score, label }) {
  return (
    <li style={{ marginBottom: "15px" }}>
      <div style={{ fontSize: "14px" }}>
        {name} — {score}% ({label})
      </div>

      <div style={{
        height: "8px",
        backgroundColor: "#eee",
        borderRadius: "5px",
        marginTop: "5px"
      }}>
        <div style={{
          width: `${score}%`,
          height: "100%",
          backgroundColor: "#4CAF50",
          borderRadius: "5px"
        }} />
      </div>
    </li>
  )
}

export default CourseCard