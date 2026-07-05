export default function StrengthsCard({
    strengths,
    }) {
      return (
          <div className="card">
                <h3>Strengths</h3>

                      <ul>
                              {strengths?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                                ))}
                                                      </ul>
                                                          </div>
                                                            );
                                                            }
