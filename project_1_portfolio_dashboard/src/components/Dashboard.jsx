import CourseCard from "./CourseCard"
import { useState } from "react"

function Dashboard() {

  const [data] = useState({
    Google: [
      { name: "Google Advanced Data Analytics Capstone", score: 100 },
      { name: "Google Data Analytics Capstone: Complete a Case Study", score: 100 },
      { name: "Analyze Data to Answer Questions", score: 99.53 },
      { name: "Ask Questions to Make Data-Driven Decisions", score: 92.87 },
      { name: "Regression Analysis", score: 91.60 },
      { name: "Machine Learning", score: 91.55 },
      { name: "Foundations of Data Science", score: 89.55 },
      { name: "Prepare Data for Exploration", score: 89.06 },
      { name: "Process Data from Dirty to Clean", score: 89.18 },
      { name: "Data Analysis with R Programming", score: 85.87 },
      { name: "The Power of Statistics", score: 85.84 },
      { name: "Data Storytelling Concepts", score: 85 }
    ],

    IBM: [
      { name: "Introduction to Software Engineering", score: 70 },
      { name: "Introduction to Cloud Computing", score: 80 },
      { name: "HTML, CSS & JavaScript", score: 88 },
      { name: "Git and GitHub", score: 81.78 }
    ],

    Packt: [
      { name: "Advanced Pivot Tables in Excel", score: 90.82 },
      { name: "Power BI Data Preparation", score: 90.41 },
      { name: "Python for Data Analysis", score: 88.88 }
    ],

    Coursera: [
      { name: "Python Program (UST)", score: 100 },
      { name: "Public Speaking with Canva", score: 100 },
      { name: "Animated Social Media Posts", score: 100 },
      { name: "Google Analytics", score: 100 },
      { name: "Google Sheets Operations", score: 90 },
      { name: "Excel Data Analysis", score: 80 },
      { name: "BigQuery", score: 80 },
      { name: "Marketing Dashboard in Data Studio", score: 80 },
      { name: "Word Advanced Formatting", score: 80 },
      { name: "WordPress Website", score: 80 },
      { name: "Charts with Google Sheets", score: 87.50 },
      { name: "Promotional Video Canva", score: 83.33 }
    ],

    Edureka: [
      { name: "Data Storytelling with Power BI", score: 89.60 }
    ]
  })
  const [selectedPlatform, setSelectedPlatform] = useState("All")

const allCourses =
  selectedPlatform === "All"
    ? Object.values(data).flat()
    : data[selectedPlatform] || []


const totalCourses = allCourses.length

const averageScore =
  totalCourses > 0
    ? (allCourses.reduce((sum, course) => sum + course.score, 0) / totalCourses).toFixed(2)
    : "0.00"

const highestScore =
  totalCourses > 0
    ? Math.max(...allCourses.map(course => course.score))
    : 0

const totalPlatforms = Object.keys(data).length
const sortedCourses = [...allCourses].sort((a, b) => b.score - a.score)

const getPerformanceLabel = (score) => {
  if (score >= 90) return "Excellent"
  if (score >= 75) return "Good"
  return "Needs Improvement"
}


  return (
  <div style={{
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial"
  }}>

    <h2>📊 Skill-Based Performance Dashboard</h2>

    {/* Filter Buttons */}
    <div style={{ marginTop: "15px" }}>
      <button onClick={() => setSelectedPlatform("All")}>All</button>

      {Object.keys(data).map((platform) => (
        <button
          key={platform}
          onClick={() => setSelectedPlatform(platform)}
          style={{ marginLeft: "10px" }}
        >
          {platform}
        </button>
      ))}
    </div>

    {/* KPI Section */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginTop: "30px",
      marginBottom: "40px"
    }}>
      {[
        { label: "Total Courses", value: totalCourses },
        { label: "Average Score", value: `${averageScore}%` },
        { label: "Highest Score", value: `${highestScore}%` },
        { label: "Platforms", value: totalPlatforms }
      ].map((item, index) => (
        <div key={index} style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "14px", color: "#777" }}>
            {item.label}
          </div>
          <div style={{ fontSize: "22px", fontWeight: "bold", marginTop: "8px" }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>

    {/* Course Display */}
    {selectedPlatform === "All"
      ? Object.entries(data).map(([provider, courses]) => (
          <div key={provider} style={{
            marginBottom: "40px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>
            <h3>{provider}</h3>
            <ul>
              {[...courses]
                .sort((a, b) => b.score - a.score)
                .map((course, i) => (
                 <CourseCard
  key={`${provider}-${course.name}`}
  name={course.name}
  score={course.score}
  label={getPerformanceLabel(course.score)}
/
                ))}
            </ul>
          </div>
        ))
      : (
          <div style={{
            marginBottom: "40px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>
            <h3>{selectedPlatform}</h3>
            <ul>
              {sortedCourses.map((course) => (
                <CourseCard
                  key={`${selectedPlatform}-${course.name}`}
                  name={course.name}
                  score={course.score}
                />
              ))}
            </ul>
          </div>
        )
    }

  </div>
)