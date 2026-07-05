export default function WeaknessCard({
    weaknesses,
    }) {
      return (
          <div className="card">
                <h3>Weaknesses</h3>

                      <ul>
                              {weaknesses?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                                ))}
                                                      </ul>
                                                          </div>
                                                            );
                                                            }
