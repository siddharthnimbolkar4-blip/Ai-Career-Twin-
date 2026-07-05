export default function CareerCard({
    careers,
    }) {
      return (
          <div className="card">
                <h3>Career Paths</h3>

                      <ul>
                              {careers?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                                ))}
                                                      </ul>
                                                          </div>
                                                            );
                                                            }
