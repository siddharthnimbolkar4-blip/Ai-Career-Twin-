import { useState } from 'react';

import './App.css';

import UploadCard from './components/UploadCard';
import ScoreCard from './components/ScoreCard';
import StrengthsCard from './components/StrengthsCard';
import WeaknessCard from './components/WeaknessCard';
import SkillGapCard from './components/SkillGapCard';
import CareerCard from './components/CareerCard';
import InterviewCard from './components/InterviewCard';

import { parseResume } from './services/resumeParser';
import { analyzeResume } from './services/gemini';

import RoadmapCard from './components/RoadmapCard';
import ResumeSuggestionCard from './components/ResumeSuggestionCard';
import LinkedInCard from './components/LinkedInCard';
import TimelineCard from './components/TimelineCard';
import RecruiterCard from './components/RecruiterCard';

import { downloadReport } from './services/pdfGenerator';

function App() {
  const [fileInfo, setFileInfo] = useState(null);
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e) {
    try {
      const file = e.target.files[0];

      if (!file) return;

      setFileInfo({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        type: file.type,
      });

      const text = await parseResume(file);

      setResumeText(text);

      console.log('Resume Length:', text.length);

      if (!text || text.length < 50) {
        alert('Resume text could not be extracted properly.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to read file.');
    }
  }

  async function handleAnalyze() {
    if (!resumeText) {
      alert('Resume is still loading. Please wait.');
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(resumeText);

      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert('Analysis failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <UploadCard
        onUpload={handleUpload}
        fileInfo={fileInfo}
        onAnalyze={handleAnalyze}
      />

      {loading && (
        <div className="loading-screen">
          <div className="orb"></div>
          <h2>Building Your Career Twin</h2>
        </div>
      )}

      <div className="hero">
        <h1 className="hero-title">AI Career Twin</h1>

        <p className="hero-subtitle">
          Upload your resume. Discover your future.
        </p>
      </div>

      <div className="card upload-card">
        <h3>Your Career Twin</h3>

        <div className="avatar">🚀</div>

        <p>{analysis?.careerTitle || 'Career Twin'}</p>
      </div>

      <div className="badge">{analysis?.careerTitle || 'AI Candidate'}</div>

      {analysis && (
        <div className="dashboard">
          <button onClick={() => downloadReport(analysis)}>
            Download Report
          </button>

          <ScoreCard score={analysis.score} />

          <StrengthsCard strengths={analysis.strengths} />

          <WeaknessCard weaknesses={analysis.weaknesses} />

          <SkillGapCard skills={analysis.missingSkills} />

          <CareerCard careers={analysis.careerPaths} />

          <InterviewCard questions={analysis.interviewQuestions} />

          <RoadmapCard roadmap={analysis.roadmap} />

          <ResumeSuggestionCard suggestions={analysis.resumeSuggestions} />

          <LinkedInCard linkedin={analysis.linkedin} />

          <TimelineCard timeline={analysis.timeline} />

          <RecruiterCard summary={analysis.recruiterSummary} />
        </div>
      )}
    </div>
  );
}

export default App;
