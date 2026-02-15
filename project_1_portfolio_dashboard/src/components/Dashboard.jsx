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

  return (
    <div>
      <h2>📊 Skill-Based Performance Dashboard</h2>

      {Object.entries(data).map(([provider, courses], index) => (
        <div key={index} style={{ marginTop: "30px" }}>
          <h3>{provider}</h3>
          <ul>
            {courses.map((course, i) => (
              <li key={i}>
                {course.name} — {course.score}%
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  )
}

export default Dashboard
