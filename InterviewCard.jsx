export default function InterviewCard({
    questions,
    }) {
      return (
          <div className="card">
                <h3>Interview Questions</h3>

                      <ul>
                              {questions?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                                ))}
                                                      </ul>
                                                          </div>
                                                            );
                                                            }
