export default function ResumeSuggestionCard({
    suggestions,
    }) {
      if (!suggestions) return null;

        return (
            <div className="card">
                  <h3>Resume Improvements</h3>

                        {suggestions.map((item, i) => (
                                <div key={i}>
                                          <p>
                                                      <strong>Current:</strong>
                                                                </p>

                                                                          <p>{item.old}</p>

                                                                                    <p>
                                                                                                <strong>Improved:</strong>
                                                                                                          </p>

                                                                                                                    <p>{item.new}</p>

                                                                                                                              <hr />
                                                                                                                                      </div>
                                                                                                                                            ))}
                                                                                                                                                </div>
                                                                                                                                                  );
                                                                                                                                                  }
