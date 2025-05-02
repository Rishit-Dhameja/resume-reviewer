import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function App() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [analyzed, setAnalyzed] = useState(false);
    const [error, setError] = useState(null);
  
    const handleFileUpload = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        // Check if file is PDF or DOCX
        if (selectedFile.type === 'application/pdf' || 
            selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          setFile(selectedFile);
          setError(null);
        } else {
          setError("Please upload a PDF or DOCX file.");
          setTimeout(() => setError(null), 3000);
        }
      }
    };
  
    const analyzeResume = () => {
      if (!file) return;
      
      setLoading(true);
      
      // Simulate API call to AI service
      setTimeout(() => {
        setLoading(false);
        setAnalyzed(true);
      }, 2000);
    };
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-blue-700 text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-md mr-2">
                <FileText className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold">AI-Powered Resume Reviewer</h1>
            </div>
            <div className="ml-auto">
              <button className="bg-white text-blue-700 px-4 py-2 rounded font-medium">
                MY ACCOUNT
              </button>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="bg-white py-12 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-blue-700 font-medium mb-3">Fast. Easy. Effective.</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get Your Resume <br />Reviewed by AI
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Upload your resume and let our AI analyze it to help you stand out. 
                  Get instant feedback on your skills, experience, and formatting.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer font-medium text-gray-900 transition-colors">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Resume
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                      onChange={handleFileUpload}
                    />
                  </label>
                  
                  <button 
                    onClick={analyzeResume}
                    disabled={!file || loading}
                    className={`flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                      !file || loading 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-700 text-white hover:bg-blue-800'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze with AI'
                    )}
                  </button>
                </div>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                
                {file && !error && (
                  <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-md flex items-center gap-2">
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 max-w-md">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <img src="/api/placeholder/64/64" alt="placeholder avatar" className="rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">John Developer</h3>
                        <p className="text-gray-600">Software Engineer</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Summary</h4>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4 mt-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6 mt-1"></div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">React.js</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">JavaScript</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Node.js</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">MongoDB</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Experience</h4>
                        <div className="p-3 border-l-2 border-blue-500">
                          <p className="font-medium">Senior Developer</p>
                          <p className="text-sm text-gray-600">TechCorp Inc. | 2021 - Present</p>
                          <div className="h-2 bg-gray-200 rounded w-full mt-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-5/6 mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {analyzed && (
                    <div className="absolute -right-4 -top-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="md:w-1/2">
                <img src="/api/placeholder/500/400" alt="Resume editing illustration" className="rounded-lg shadow-lg" />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Enhance your resume with our AI technology
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Optimize for ATS systems
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Our AI identifies keywords that will help your resume pass through 
                        Applicant Tracking Systems and reach human recruiters.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Professional language improvements
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Get suggestions for stronger action verbs, clearer descriptions, 
                        and more impactful statements of your achievements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Format and layout analysis
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Our AI evaluates the visual structure of your resume and suggests 
                        improvements for better readability and professional appearance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Industry-specific recommendations
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Get tailored advice based on your industry, role, and career level to 
                        make your resume stand out to the right employers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Apply with confidence
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Get a comprehensive score and actionable feedback to improve your 
                        resume and increase your chances of landing interviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sample Analysis Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              See how our AI analyzes your resume
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <FileText className="w-5 h-5 text-blue-700" />
                  </div>
                  Sample Resume
                </h3>
                
                <div className="border border-gray-200 rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-lg">John Developer</h4>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                  
                  <div className="mt-4">
                    <h5 className="font-medium">Professional Summary</h5>
                    <p className="text-sm text-gray-700 mt-1">
                      Experienced software developer with 5 years of experience creating web applications
                      using JavaScript, React, and Node.js. Strong problem-solving skills and team collaboration.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium">Experience</h5>
                    <div className="mt-2">
                      <p className="font-medium text-sm">Senior Developer - TechCorp Inc.</p>
                      <p className="text-xs text-gray-600">2021 - Present</p>
                      <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-1">
                        <li>Developed frontend applications using React.js</li>
                        <li>Collaborated with UX designers to implement user-friendly interfaces</li>
                        <li>Improved application performance by 30%</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium">Skills</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">JavaScript</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React.js</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML/CSS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <div className="bg-blue-700 p-2 rounded-full mr-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  AI Analysis Results
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-800 flex items-center">
                      <span className="inline-block w-6 h-6 bg-blue-700 text-white rounded-full text-xs flex items-center justify-center mr-2">1</span>
                      Overall Score
                    </h4>
                    <div className="mt-2 flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>
                      </div>
                      <span className="ml-3 font-bold">80%</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 flex items-center">
                      <span className="inline-block w-6 h-6 bg-blue-700 text-white rounded-full text-xs flex items-center justify-center mr-2">2</span>
                      Strengths
                    </h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Clear professional summary with key skills highlighted</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Quantifiable achievement (30% performance improvement)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Good use of technical keywords relevant to software development</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 flex items-center">
                      <span className="inline-block w-6 h-6 bg-blue-700 text-white rounded-full text-xs flex items-center justify-center mr-2">3</span>
                      Areas to Improve
                    </h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span className="text-sm">Add more quantifiable achievements to showcase impact</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span className="text-sm">Include education section with relevant degrees/certifications</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span className="text-sm">Expand skills section with more specific technologies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 flex items-center">
                      <span className="inline-block w-6 h-6 bg-blue-700 text-white rounded-full text-xs flex items-center justify-center mr-2">4</span>
                      Expert Recommendations
                    </h4>
                    <div className="mt-2 p-3 bg-white rounded border border-blue-200">
                      <p className="text-sm font-medium text-blue-800">Suggested Summary Improvement:</p>
                      <p className="text-sm text-gray-700 mt-1">
                        "Innovative Software Engineer with 5+ years of experience developing high-performance web applications 
                        using JavaScript, React.js, and Node.js. Demonstrated success in optimizing application performance by 30% 
                        and collaborating cross-functionally with design and product teams. Passionate about creating intuitive user 
                        interfaces and solving complex technical challenges."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Trusted by job seekers worldwide
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The AI feedback transformed my resume completely. I received more interview 
                  calls in one week than I did in the previous month!"
                </p>
                <p className="font-medium">- Sarah J., Software Engineer</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The industry-specific suggestions were spot on. The AI understood exactly what 
                  recruiters in my field are looking for."
                </p>
                <p className="font-medium">- Michael T., Marketing Manager</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a recent graduate, I had no idea how to make my resume stand out. This tool 
                  gave me exactly the guidance I needed to land my first job."
                </p>
                <p className="font-medium">- Emma L., Recent Graduate</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your resume with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Upload your resume now and get instant AI-powered feedback to help you 
              land more interviews and job offers.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Analyze My Resume Now
            </button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">AI-Powered Resume Reviewer</h2>
              <p className="text-gray-400 mb-6">
                Get expert AI feedback to improve your resume and land more interviews
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} AI Resume Reviewer. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }