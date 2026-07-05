export default function LinkedInCard({
    linkedin,
    }) {
      if (!linkedin) return null;

        return (
            <div className="card">
                  <h3>LinkedIn Optimizer</h3>

                        <p>
                                <strong>Headline:</strong>
                                      </p>

                                            <p>{linkedin.headline}</p>

                                                  <br />

                                                        <p>
                                                                <strong>About:</strong>
                                                                      </p>

                                                                            <p>{linkedin.about}</p>

                                                                                  <br />

                                                                                        <p>
                                                                                                <strong>Keywords:</strong>
                                                                                                      </p>

                                                                                                            <ul>
                                                                                                                    {linkedin.keywords?.map((item, i) => (
                                                                                                                              <li key={i}>{item}</li>
                                                                                                                                      ))}
                                                                                                                                            </ul>
                                                                                                                                                </div>
                                                                                                                                                  );
                                                                                                                                                  }
