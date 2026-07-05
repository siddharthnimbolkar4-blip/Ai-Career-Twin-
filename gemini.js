import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("Your_API_Key_here");

export async function analyzeResume(resumeText) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
  });

  const prompt = `
  Analyze this resume.
  
  Return ONLY valid JSON.
  
  {
    "score": 0,
    
      "strengths": [],
        "weaknesses": [],
          "missingSkills": [],
            "careerPaths": [],
              "interviewQuestions": [],
              
                "roadmap": {
                    "month1": [],
                        "month2": [],
                            "month3": []
                              },
                              
                                "resumeSuggestions": [
                                    {
                                          "old": "",
                                                "new": ""
                                                    }
                                                      ],
                                                      
                                                        "linkedin": {
                                                            "headline": "",
                                                                "about": "",
                                                                    "keywords": []
                                                                      },
                                                                      
                                                                        "timeline": [],
                                                                        
                                                                          "recruiterSummary": ""
                                                                          }
                                                                          
                                                                          Rules:
                                                                          
                                                                          - score must be a number
                                                                          - strengths must be short bullet points
                                                                          - weaknesses must be short bullet points
                                                                          - missingSkills must contain only skill names
                                                                          - careerPaths must contain only job titles
                                                                          - roadmap must contain practical learning steps
                                                                          - resumeSuggestions must contain before and after examples
                                                                          - linkedin headline should be recruiter friendly
                                                                          - linkedin about should be 100-150 words
                                                                          - timeline should predict career progression
                                                                          - recruiterSummary should be 3-4 sentences
                                                                          - return valid JSON only
                                                                          - no markdown
                                                                          - no explanations
                                                                          
                                                                          Resume:
                                                                          ${resumeText}
                                                                          `;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleaned = text
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .trim();

  return JSON.parse(cleaned);
}
