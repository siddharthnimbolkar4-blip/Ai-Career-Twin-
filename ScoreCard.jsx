export default function ScoreCard({ score }) {
  const percentage = score || 0;

  return (
    <div className="card score-card">
      <div
        className="score-ring"
        style={{
          background: `conic-gradient(
                                                        #00d4ff ${
                                                          percentage * 3.6
                                                        }deg,
                                                                    rgba(255,255,255,.08) 0deg
                                                                              )`,
        }}
      >
        <div className="score-inner">
          <h2>{score}</h2>
        </div>
      </div>

      <p>Resume Score</p>
    </div>
  );
}
