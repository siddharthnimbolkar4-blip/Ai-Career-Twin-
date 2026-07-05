# Ai Career Twin v2

AI-powered resume analyzer that generates career insights, skill-gap analysis, interview preparation, and personalized learning roadmaps.

# Development Statistics

# Approximate Project Journey

- Project crashes encountered: 15+
- Full rewrites: 3
- Major architecture changes: 4
- PDF parsing approaches tested: 2
- UI redesign iterations: 5+
- Debugging hours: Countless ☕

# Final Outcome:

- TXT Support ✅
- PDF Support ✅
- DOCX Support ✅
- AI Analysis ✅
- Resume Scoring ✅
- Career Roadmap ✅
- PDF Report Generation ✅

#  What Went Wrong During Development

This project was not built in one attempt.

The final version is the result of multiple crashes, debugging sessions, and architectural changes.

Problem #1 — PDF Parsing Broke The Entire App

Initial implementation used:

- pdfjs-dist

# Issue:

- Vite + StackBlitz had worker-loading conflicts.
- The app repeatedly crashed and disconnected from port 5173.
- Development server became unstable.

# Lesson:

Before adding advanced libraries, verify they work with your environment.

Fix:

- Replaced the original implementation.
- Simplified the parsing architecture.
- Tested each file format independently.

---

# Problem 2 — White Screen With No Errors

Issue:

The application rendered a blank screen even though the terminal showed no build errors.

Cause:

Multiple JSX syntax issues:

- Missing braces
- Invalid JSX structure
- Components rendering outside conditionals

Lesson:

A successful build does not guarantee a successful render.

Fix:

- Rebuilt components incrementally.
- Verified each component individually.

---

# Problem 3 — Gemini Returned Unexpected Data

Issue:

The Resume Score was not displaying.

Cause:

The UI expected:

score

but Gemini returned:

resumeScore

Lesson:

Never assume API response formats.

Fix:

Added response normalization and debugging logs.

---

# Problem 4 — Trying To Build Too Many Features At Once

Issue:

Adding PDF parsing, DOCX parsing, UI redesign, score visualizations, and report generation simultaneously caused repeated failures.

Lesson:

Ship working versions first.

Fix:

Feature development was separated into phases and tested individually.

---

# Problem 5 — UI Over Engineering

Issue:

Several redesigns looked visually impressive but broke usability.

Lesson:

A beautiful interface is useless if the core workflow fails.

Fix:

Prioritized stability before visual polish.

---

# Key Takeaways

1. Build features incrementally.
2. Test every integration independently.
3. Validate API responses.
4. Avoid introducing multiple new dependencies simultaneously.
5. Stability is more important than feature count.
6. Debugging is part of building.

This project taught me more through failures than through successful code.

