export default function RecruiterCard({
    summary,
    }) {
      if (!summary) return null;

        return (
            <div className="card">
                  <h3>Recruiter Snapshot</h3>

                        <p>{summary}</p>
                            </div>
                              );
                              }
