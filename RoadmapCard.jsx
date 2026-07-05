export default function RoadmapCard({ roadmap }) {
  if (!roadmap) return null;

  return (
    <div className="card">
      <h3>90 Day Roadmap</h3>

      <h4>Month 1</h4>
      <ul>
        {roadmap.month1?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>Month 2</h4>
      <ul>
        {roadmap.month2?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>Month 3</h4>
      <ul>
        {roadmap.month3?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
