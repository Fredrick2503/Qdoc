import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Document Intelligence</h1>
      <Link to="/viewer" className="text-blue-500 underline">Go to Viewer</Link>
    </div>
  );
}
