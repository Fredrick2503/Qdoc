// // // // // // // import { useState, useEffect } from 'react';
// // // // // // // import { Document, Page } from 'react-pdf';
// // // // // // // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // // // // // // import { pdfjs } from 'react-pdf';

// // // // // // // export default function PDFViewer({ file }) {
// // // // // // //   const [numPages, setNumPages] = useState(null);

// // // // // // //   const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const scrollY = window.scrollY;
// // // // // // //       console.log("Scrolled to:", scrollY);
// // // // // // //     };

// // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col items-center">
// // // // // // //       <Document file={file} onLoadSuccess={onLoadSuccess}>
// // // // // // //         {Array.from(new Array(numPages), (el, index) => (
// // // // // // //           <Page
// // // // // // //             key={`page_${index + 1}`}
// // // // // // //             pageNumber={index + 1}
// // // // // // //             renderTextLayer={true}
// // // // // // //             className="my-2"
// // // // // // //           />
// // // // // // //         ))}
// // // // // // //       </Document>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import { Document, Page, pdfjs } from 'react-pdf';
// // // // // // import 'react-pdf/dist/Page/TextLayer.css';
// // // // // // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // // // // // import { useState } from 'react';

// // // // // // // ✅ Fix PDF.js worker error
// // // // // // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // // // // // function PDFViewer({ fileUrl }) {
// // // // // //   const [numPages, setNumPages] = useState(null);

// // // // // //   function onLoadSuccess({ numPages }) {
// // // // // //     setNumPages(numPages);
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="border rounded bg-white p-2">
// // // // // //       <Document file={fileUrl} onLoadSuccess={onLoadSuccess}>
// // // // // //         {Array.from(new Array(numPages), (_, index) => (
// // // // // //           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
// // // // // //         ))}
// // // // // //       </Document>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default PDFViewer;
// // // // // import { Document, Page, pdfjs } from 'react-pdf';
// // // // // import 'react-pdf/dist/Page/TextLayer.css';
// // // // // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // // // // import { useState } from 'react';

// // // // // // ✅ Tell PDF.js where to find the worker
// // // // // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // // // // function PDFViewer({ fileUrl }) {
// // // // //   const [numPages, setNumPages] = useState(null);

// // // // //   function onDocumentLoadSuccess({ numPages }) {
// // // // //     setNumPages(numPages);
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-white border rounded p-4 shadow">
// // // // //       <Document
// // // // //         file={fileUrl}
// // // // //         onLoadSuccess={onDocumentLoadSuccess}
// // // // //         loading={<div className="text-gray-500">Loading PDF...</div>}
// // // // //         error={<div className="text-red-500">Error loading PDF</div>}
// // // // //         noData={<div className="text-gray-500">No PDF file specified.</div>}
// // // // //       >
// // // // //         {Array.from(new Array(numPages), (el, index) => (
// // // // //           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
// // // // //         ))}
// // // // //       </Document>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default PDFViewer;


// // // // import { Document, Page, pdfjs } from 'react-pdf';
// // // // import 'react-pdf/dist/Page/TextLayer.css';
// // // // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // // // import { useEffect, useState } from 'react';

// // // // pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

// // // // function PDFViewer({ fileUrl }) {
// // // //   const [pdfFile, setPdfFile] = useState(null);
// // // //   const [numPages, setNumPages] = useState(null);
// // // //   const [selectedText, setselectedText] = useState(null);

// // // //   useEffect(() => {
// // // //     fetch(fileUrl)
// // // //       .then(res =>res.blob())
// // // //       .then(blob => {
// // // //         console.log(blob);

// // // //         const file = new File([blob], 'sample.pdf', { type: 'application/pdf' });
// // // //         setPdfFile(file);
// // // //       });
// // // //   }, [fileUrl]);
// // // //   useEffect(() => {
// // // //   const handleMouseUp = () => {
// // // //     const selectedtext = window.getSelection().toString();
// // // //     if (selectedtext.trim()) {
// // // //       setselectedText(selectedtext);
// // // //       alert(`Selected text: ${selectedtext}`);
// // // //     }
// // // //   };
// // // //   document.addEventListener("mouseup", handleMouseUp);
// // // //   return () => document.removeEventListener("mouseup", handleMouseUp);
// // // // }, []);

// // // //   function onLoadSuccess({ numPages }) {
// // // //     setNumPages(numPages);
// // // //   }

// // // //   return (
// // // //     <div className="p-4 bg-white shadow rounded">
// // // //       {pdfFile ? (
// // // //         <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
// // // //           {Array.from(new Array(numPages), (el, index) => (
// // // //             <Page key={index} pageNumber={index + 1} />
// // // //           ))}
// // // //         </Document>
// // // //       ) : (
// // // //         <div>No PDF file specified.</div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default PDFViewer;

// // // // // import { useEffect, useState } from 'react';
// // // // // import { Document, Page } from 'react-pdf';
// // // // // import { pdfjs } from 'pdfjs-dist';
// // // // // import 'react-pdf/dist/Page/TextLayer.css';
// // // // // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // // // // // import './PDFViewer.css'; // Optional: for custom styling

// // // // // // Use a reliable CDN for the worker
// // // // // pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

// // // // // export default function PDFViewer({ fileUrl }) {
// // // // //   const [pdfFile, setPdfFile] = useState(null);
// // // // //   const [numPages, setNumPages] = useState(null);
// // // // //   const [selectedText, setSelectedText] = useState('');
// // // // //   const [summary, setSummary] = useState('');
// // // // //   const [loadingSummary, setLoadingSummary] = useState(false);

// // // // //   useEffect(() => {
// // // // //     fetch(fileUrl)
// // // // //       .then(res => res.blob())
// // // // //       .then(blob => {
// // // // //         const file = new File([blob], 'document.pdf', { type: 'application/pdf' });
// // // // //         setPdfFile(file);
// // // // //       });
// // // // //   }, [fileUrl]);

// // // // //   useEffect(() => {
// // // // //     const handleMouseUp = () => {
// // // // //       const text = window.getSelection().toString();
// // // // //       if (text.trim()) {
// // // // //         setSelectedText(text);
// // // // //         setSummary('');
// // // // //       }
// // // // //     };
// // // // //     document.addEventListener("mouseup", handleMouseUp);
// // // // //     return () => document.removeEventListener("mouseup", handleMouseUp);
// // // // //   }, []);

// // // // //   const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

// // // // //   const handleSummarize = async () => {
// // // // //     if (!selectedText) return;
// // // // //     setLoadingSummary(true);
// // // // //     try {
// // // // //       const response = await fetch('/api/summarize', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify({ text: selectedText }),
// // // // //       });
// // // // //       const data = await response.json();
// // // // //       setSummary(data.summary);
// // // // //     } catch (err) {
// // // // //       console.error('Summarization failed:', err);
// // // // //       setSummary('Failed to summarize text.');
// // // // //     }
// // // // //     setLoadingSummary(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex">
// // // // //       <div className="w-3/4 p-4 overflow-y-auto h-screen bg-white">
// // // // //         {pdfFile ? (
// // // // //           <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
// // // // //             {Array.from(new Array(numPages), (_, index) => (
// // // // //               <Page
// // // // //                 key={`page_${index + 1}`}
// // // // //                 pageNumber={index + 1}
// // // // //                 renderTextLayer
// // // // //                 renderAnnotationLayer
// // // // //                 className="my-4 shadow"
// // // // //               />
// // // // //             ))}
// // // // //           </Document>
// // // // //         ) : (
// // // // //           <div className="text-gray-500">No PDF loaded.</div>
// // // // //         )}
// // // // //       </div>

// // // // //       <div className="w-1/4 p-4 border-l bg-gray-50 h-screen overflow-y-auto">
// // // // //         <h2 className="text-lg font-semibold mb-2">AI Assistant</h2>

// // // // //         {selectedText ? (
// // // // //           <div>
// // // // //             <p className="text-sm text-gray-600 mb-2">Selected Text:</p>
// // // // //             <div className="p-2 bg-white border rounded text-sm max-h-40 overflow-y-auto">
// // // // //               {selectedText}
// // // // //             </div>

// // // // //             <button
// // // // //               onClick={handleSummarize}
// // // // //               disabled={loadingSummary}
// // // // //               className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // // //             >
// // // // //               {loadingSummary ? 'Summarizing...' : 'Summarize'}
// // // // //             </button>

// // // // //             {summary && (
// // // // //               <div className="mt-4">
// // // // //                 <p className="text-sm font-medium text-green-600">Summary:</p>
// // // // //                 <p className="text-sm bg-white border p-2 rounded mt-1 text-gray-800">
// // // // //                   {summary}
// // // // //                 </p>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ) : (
// // // // //           <p className="text-gray-500 text-sm">Select text in the document to start.</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // import { useEffect, useState } from 'react';
// // // import { Document, Page, pdfjs } from 'react-pdf';
// // // // import 'pdfjs-dist/web/pdf_viewer.css';
// // // import 'react-pdf/dist/Page/TextLayer.css';
// // // import 'react-pdf/dist/Page/AnnotationLayer.css'; // Optional: for custom styling

// // // // ✅ Correct worker import for react-pdf v6 + pdfjs-dist v3
// // // pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// // // export default function PDFViewer({ fileUrl }) {
// // //   const [pdfFile, setPdfFile] = useState(null);
// // //   const [numPages, setNumPages] = useState(null);
// // //   const [selectedText, setSelectedText] = useState('');
// // //   const [summary, setSummary] = useState('');
// // //   const [loadingSummary, setLoadingSummary] = useState(false);

// // //   useEffect(() => {
// // //     fetch(fileUrl)
// // //       .then(res => res.blob())
// // //       .then(blob => {
// // //         const file = new File([blob], 'document.pdf', { type: 'application/pdf' });
// // //         setPdfFile(file);
// // //       });
// // //   }, [fileUrl]);

// // //   useEffect(() => {
// // //     const handleMouseUp = () => {
// // //       const text = window.getSelection().toString();
// // //       if (text.trim()) {
// // //         setSelectedText(text);
// // //         setSummary('');
// // //       }
// // //     };
// // //     document.addEventListener("mouseup", handleMouseUp);
// // //     return () => document.removeEventListener("mouseup", handleMouseUp);
// // //   }, []);

// // //   const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

// // //   const handleSummarize = async () => {
// // //     if (!selectedText) return;
// // //     setLoadingSummary(true);
// // //     try {
// // //       const response = await fetch('/api/summarize', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ text: selectedText }),
// // //       });
// // //       const data = await response.json();
// // //       setSummary(data.summary);
// // //     } catch (err) {
// // //       console.error('Summarization failed:', err);
// // //       setSummary('Failed to summarize text.');
// // //     }
// // //     setLoadingSummary(false);
// // //   };

// // //   return (
// // //     <div className="flex">
// // //       <div className="w-3/4 p-4 overflow-y-auto h-screen bg-white">
// // //         {pdfFile ? (
// // //           <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
// // //             {Array.from(new Array(numPages), (_, index) => (
// // //               <Page
// // //                 key={`page_${index + 1}`}
// // //                 pageNumber={index + 1}
// // //                 renderTextLayer
// // //                 renderAnnotationLayer
// // //                 className="my-4 shadow"
// // //               />
// // //             ))}
// // //           </Document>
// // //         ) : (
// // //           <div className="text-gray-500">No PDF loaded.</div>
// // //         )}
// // //       </div>

// // //       <div className="w-1/4 p-4 border-l bg-gray-50 h-screen overflow-y-auto">
// // //         <h2 className="text-lg font-semibold mb-2">AI Assistant</h2>

// // //         {selectedText ? (
// // //           <div>
// // //             <p className="text-sm text-gray-600 mb-2">Selected Text:</p>
// // //             <div className="p-2 bg-white border rounded text-sm max-h-40 overflow-y-auto">
// // //               {selectedText}
// // //             </div>

// // //             <button
// // //               onClick={handleSummarize}
// // //               disabled={loadingSummary}
// // //               className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
// // //             >
// // //               {loadingSummary ? 'Summarizing...' : 'Summarize'}
// // //             </button>

// // //             {summary && (
// // //               <div className="mt-4">
// // //                 <p className="text-sm font-medium text-green-600">Summary:</p>
// // //                 <p className="text-sm bg-white border p-2 rounded mt-1 text-gray-800">
// // //                   {summary}
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <p className="text-gray-500 text-sm">Select text in the document to start.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // import 'react-pdf/dist/Page/TextLayer.css';
// // import 'react-pdf/dist/Page/AnnotationLayer.css';

// // pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// // export default function PDFViewer({ fileUrl }) {
// //   const [pdfFile, setPdfFile] = useState(null);
// //   const [numPages, setNumPages] = useState(null);
// //   const [pageNumber, setPageNumber] = useState(1);
// //   const [scale, setScale] = useState(1.2); // zoom level

// //   useEffect(() => {
// //     fetch(fileUrl)
// //       .then(res => res.blob())
// //       .then(blob => {
// //         const file = new File([blob], 'document.pdf', { type: 'application/pdf' });
// //         setPdfFile(file);
// //       });
// //   }, [fileUrl]);

// //   const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

// //   const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
// //   const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));
// //   const zoomIn = () => setScale(prev => prev + 0.2);
// //   const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));

// //   return (
// //     <div className="flex flex-col h-screen bg-gray-100">
// //       {/* Controls */}
// //       <div className="flex items-center justify-between p-3 bg-white border-b shadow">
// //         <div className="space-x-2">
// //           <button onClick={goToPrevPage} className="px-3 py-1 border rounded">← Prev</button>
// //           <button onClick={goToNextPage} className="px-3 py-1 border rounded">Next →</button>
// //         </div>
// //         <div className="text-sm text-gray-600">
// //           Page {pageNumber} of {numPages}
// //         </div>
// //         <div className="space-x-2">
// //           <button onClick={zoomOut} className="px-3 py-1 border rounded">➖ Zoom Out</button>
// //           <button onClick={zoomIn} className="px-3 py-1 border rounded">➕ Zoom In</button>
// //         </div>
// //       </div>

// //       {/* PDF Display */}
// //       <div className="flex-grow overflow-y-auto p-4">
// //         {/* {pdfFile && (
// //           <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
// //             <Page
// //               pageNumber={pageNumber}
// //               scale={scale}
// //               renderTextLayer
// //               renderAnnotationLayer
// //               className="mx-auto shadow bg-white rounded"
// //             />
// //           </Document>
// //         )} */}
// //         {pdfFile ? (
// //           <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
// //             {Array.from(new Array(numPages), (_, index) => (
// //               <Page
// //                 key={`page_${index + 1}`}
// //                 pageNumber={index + 1}
// //                 renderTextLayer
// //                 renderAnnotationLayer
// //                 className="my-4 shadow w-full bg-white rounded"
// //               />
// //             ))}
// //           </Document>
// //         ) : (
// //           <div className="text-gray-500">No PDF loaded.</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// export default function PDFViewer({ fileUrl }) {
//   const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
//   const [selectedText, setSelectedText] = useState('');
//   const [summary, setSummary] = useState('');
//   const [loadingSummary, setLoadingSummary] = useState(false);

//   const defaultLayout = defaultLayoutPlugin();

//   useEffect(() => {
//     fetch(fileUrl)
//       .then((res) => res.blob())
//       .then((blob) => {
//         const url = URL.createObjectURL(blob);
//         setPdfBlobUrl(url);
//       });
//   }, [fileUrl]);

//   useEffect(() => {
//     const handleMouseUp = () => {
//       const text = window.getSelection().toString();
//       if (text.trim()) {
//         setSelectedText(text);
//         setSummary('');
//       }
//     };
//     document.addEventListener('mouseup', handleMouseUp);
//     return () => document.removeEventListener('mouseup', handleMouseUp);
//   }, []);

//   const handleSummarize = async () => {
//     if (!selectedText) return;
//     setLoadingSummary(true);
//     try {
//       const response = await fetch('/api/summarize', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: selectedText }),
//       });
//       const data = await response.json();
//       setSummary(data.summary);
//     } catch (err) {
//       console.error('Summarization failed:', err);
//       setSummary('Failed to summarize text.');
//     }
//     setLoadingSummary(false);
//   };

//   return (
//     <div className="flex">
//       <div className="w-3/4 p-4 overflow-y-auto h-screen bg-white">
//         {pdfBlobUrl ? (
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//             <Viewer fileUrl={pdfBlobUrl} plugins={[defaultLayout]} />
//           </Worker>
//         ) : (
//           <div className="text-gray-500">Loading PDF...</div>
//         )}
//       </div>

//       <div className="w-1/4 p-4 border-l bg-gray-50 h-screen overflow-y-auto">
//         <h2 className="text-lg font-semibold mb-2">AI Assistant</h2>

//         {selectedText ? (
//           <div>
//             <p className="text-sm text-gray-600 mb-2">Selected Text:</p>
//             <div className="p-2 bg-white border rounded text-sm max-h-40 overflow-y-auto">
//               {selectedText}
//             </div>

//             <button
//               onClick={handleSummarize}
//               disabled={loadingSummary}
//               className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               {loadingSummary ? 'Summarizing...' : 'Summarize'}
//             </button>

//             {summary && (
//               <div className="mt-4">
//                 <p className="text-sm font-medium text-green-600">Summary:</p>
//                 <p className="text-sm bg-white border p-2 rounded mt-1 text-gray-800">
//                   {summary}
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-sm">Select text in the document to start.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState ,useRef} from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import ReactMarkdown from 'react-markdown';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';
import remarkGfm from 'remark-gfm';

export default function PDFViewer({ fileUrl }) {
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [prompt, setPrompt] = useState('');
  const [fulldoc, setfulldoc] = useState('');
  const [output, setoutput] = useState('');
  const [response, setresponse] = useState('');
  const [loadingoutput, setLoadingoutput] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const typedResponse = useTypewriter(response);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const extractTextFromPDF = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      fullText += strings.join(' ') + '\n\n';
    }

    return fullText;
  };
  // Fetch PDF as Blob
  useEffect(() => {
    if (pdfUrl) {
      fetch(pdfUrl)
        .then((res) => res.blob())
        .then(async (blob) => {
          const url = URL.createObjectURL(blob);
          setPdfBlobUrl(url);
          const text = await extractTextFromPDF(blob);
          setfulldoc(text);
        });
    }
  }, [pdfUrl]);

  // Listen to mouseup for text selection
  // useEffect(() => {
  //   const handleMouseUp = () => {
  //     const text = window.getSelection().toString();
  //     if (text.trim()) {
  //       console.log(text);

  //       setSelectedText(text);
  //       setoutput('');
  //     }
  //   };
  //   document.addEventListener('mouseup', handleMouseUp);
  //   return () => document.removeEventListener('mouseup', handleMouseUp);
  // }, []);
  useEffect(() => {
    const handleMouseUp = (e) => {
      const pdfArea = document.getElementById("pdf-container");
      if (pdfArea && pdfArea.contains(e.target)) {
        const text = window.getSelection().toString();
        if (text.trim()) {
          setSelectedText(text);
          setoutput('');
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);



  const handleFile = (file) => {
    if (file.type === 'application/pdf') {
      const blobUrl = URL.createObjectURL(file);
      setPdfUrl(blobUrl);
      setFileName(file.name);
    } else {
      alert('Only PDF files are supported.');
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const reset = () => {
    setPdfUrl(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Summarize Handler
  const handleSummarize = async () => {
    if (!selectedText) return;
    setLoadingoutput(true);
    try {
      const response = await fetch('http://localhost:8000/summarize', {
        method: 'POST',
        body: JSON.stringify({ text: selectedText }),
      });
      const data = await response.json();
      setoutput(data.output || 'No output returned.');
    } catch (err) {
      console.error('Summarization failed:', err);
      setoutput('Failed to summarize.');
    }
    setLoadingoutput(false);
  };
  const handlePrompt = async () => {
    try {
      console.log(selectedText, prompt);
      setresponse("Loading...");
      const text = selectedText || fulldoc;
      const response = await fetch('https://verbose-adventure-g4pqgg9r54j4cv4xr-8000.app.github.dev/prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedText: text, prompt: prompt }),
      });
      const data = await response.json();
      console.log(data);

      setresponse(data.response || 'No output returned.');
      setSelectedText(null);
    } catch (err) {
      console.error('Summarization failed:', err);
      setresponse('Failed to summarize.');
    }
  };

  return (pdfUrl ? (
    <div className="flex">
      {/* PDF Panel */}
      <div className="w-3/4  bg-white h-screen overflow-y-auto" id='pdf-container'>
        {pdfBlobUrl ? (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        ) : (
          <div className="text-gray-500">Loading PDF...</div>
        )}
      </div>

      {/* AI Sidebar */}
      <div className="w-1/4 p-4 bg-gray-50 border-l h-svh overflow-y-scroll flex justify-evenly flex-col">
        {/* <h2 className="text-lg font-bold mb-2">AI Assistant</h2> */}
        <div className="mt-4 bg-transparent p-3 rounded-lg text-md text-gray-800 whitespace-pre-wrap min-h-[80%] overflow-y-auto bottom-0 ">
          {response && <ReactMarkdown remarkPlugins={[remarkGfm]}>{typedResponse}</ReactMarkdown>}</div>
        <div className="p-2 border max-h-[15%] min-h-fit   bottom-0 bg-white rounded-lg shadow text-sm text-gray-800 whitespace-pre-wrap">
          <textarea name="" id="" value={prompt} onChange={(e) => setPrompt(e.target.value)} className='w-full h-full text-lg border-none bg-transparent outline-none  ' placeholder='Ask anything' ></textarea><br />
        </div>
        <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700' onClick={handlePrompt} >Send</button>
        {/* {selectedText ? (
          <>
            <p className="text-sm text-gray-600 mb-1">Selected Text:</p>
            <div className="p-2 border bg-white rounded text-sm max-h-40 overflow-y-auto">
              {selectedText}
            </div>

            <button
              onClick={handleSummarize}
              disabled={loadingoutput}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {loadingoutput ? 'Summarizing...' : 'Summarize'}
            </button>

            {output && (
              <div className="mt-4">
                <p className="text-sm font-medium text-green-600">output:</p>
                <p className="text-sm border bg-white p-2 rounded mt-1 text-gray-800">
                  {output}
                </p>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-sm mt-4">Select text in the PDF to summarize.</p>
        )} */}
      </div>
    </div>
  ) : (
          <>



      <div className="p-4 max-w-3xl mx-auto w-full h-svh flex flex-col justify-center items-center">
        <label
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={handleInputChange}
            className="hidden"
          />
          <p className="text-gray-700">
            <strong>Click to upload</strong> or <strong>drag & drop</strong> a PDF file here
          </p>
        </label>

        {fileName && (
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-700">📄 {fileName}</p>
            <button
              onClick={reset}
              className="text-red-600 hover:underline text-sm"
            >
              ❌ Clear
            </button>
          </div>
        )}
</div>




        {/* <div className='w-full h-svh flex flex-col justify-center items-center p-2 border-2 border-black rounded-xl' >
          <input type="file" accept="application/pdf" onChange={handleFileChange} className="" ></input>
            <div className='flex flex-col justify-center items-center p-2 border-2 border-black rounded-xl' >
              <p className="text-gray-500">Upload a PDF file to view.</p>
            </div>
        </div> */}
      </>
      )
      );
}


      export function useTypewriter(text, speed = 20) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

      setDisplayedText('');
      let i = 0;
    const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

      return displayedText;
}



