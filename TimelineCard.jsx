export default function TimelineCard({
    timeline
    }) {

      if(!timeline) return null;

        return(
            <div className="card">

                  <h3>
                          Future Career Simulation
                                </h3>

                                      {timeline.map((item,index)=>(
                                              <div
                                                        key={index}
                                                                  className="timeline-step"
                                                                          >
                                                                                    {item}
                                                                                            </div>
                                                                                                  ))}

                                                                                                      </div>
                                                                                                        );
                                                                                                        }
