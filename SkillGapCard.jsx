export default function SkillGapCard({
    skills,
    }) {
      return (
          <div className="card">
                <h3>Missing Skills</h3>

                      <ul>
                              {skills?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                                ))}
                                                      </ul>
                                                          </div>
                                                            );
                                                            }
