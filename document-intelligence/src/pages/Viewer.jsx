import React, { useState } from "react";
import PDFViewer from "../components/PDFViewer";

export default function Viewer() {
  const [pdfFile, setPdfFile] = useState("/module4.pdf");
  // const pdfFile = "/module4.pdf";


  return (
    <div className="">
      {/* <h2 className="text-xl font-semibold mb-4">PDF Viewer</h2> */}
      <PDFViewer fileUrl={"/module4.pdf"} />
    </div>
  );
}
