import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [pdfKey, setPdfKey] = useState(0);

  useEffect(() => {
    // Force re-render of PDF when component mounts
    setPdfKey(Date.now());
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="pt-24 min-h-screen bg-[color:var(--background)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[color:var(--text)] mb-6 text-center">resume</h1>
        
        {/* Mobile: Direct link to PDF */}
        <div className="md:hidden text-center mb-6">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-600 mb-4">tap below to view resume in a new tab</p>
            <a 
              href="/Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-none font-medium tracking-wider hover-lift inline-block text-sm"
            >
              view resume
            </a>
          </div>
        </div>

        {/* Desktop: Embedded PDF */}
        <div className="hidden md:flex justify-center mb-6">
          <div className="w-full max-w-4xl">
            <object 
              key={pdfKey}
              data={`/Resume.pdf?v=${pdfKey}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              type="application/pdf" 
              width="100%" 
              height="800px"
              className="border-2 border-gray-300 rounded-lg shadow-lg"
            >
              <iframe 
                key={pdfKey + 1}
                src={`/Resume.pdf?v=${pdfKey}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                width="100%" 
                height="800px"
                className="border-2 border-gray-300 rounded-lg shadow-lg"
                title="resume"
              >
                <p>your browser does not support pdfs. <a href="/Resume.pdf">download the pdf</a>.</p>
              </iframe>
            </object>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/Resume.pdf" 
            download="Pem_Tsering_Gurung_Resume.pdf"
            className="px-4 md:px-6 py-2.5 md:py-3 bg-black text-white rounded-none font-medium tracking-wider hover-lift inline-block text-sm md:text-base"
          >
            download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
