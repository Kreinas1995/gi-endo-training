// File: /src/components/checklist/SkillsChecklist.jsx
import './ChecklistPrint.css'

export default function SkillsChecklist({ items = [], title }) {
  return (
    <div className="checklist-container">
      <h2>{title}</h2>
      <table className="checklist-table">
        <thead><tr><th>Skill</th><th>Attempt 1</th><th>Attempt 2</th><th>Supervisor Sign-off</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item}</td>
              <td>___</td>
              <td>___</td>
              <td>___________</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.print()} className="no-print">🖨 Print Checklist</button>
    </div>
  )
}
