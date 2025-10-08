import React from "react";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-lg font-bold">Leonardo DiCaprio — Fan Page</div>
          <p className="text-xs text-gray-400 mt-2 max-w-sm">This site is an informational fan page and is not affiliated with Leonardo DiCaprio. For official updates, check verified sources.</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fan Project</p>
          <p>Privacy • Terms • Credits</p>
        </div>
      </div>
    </footer>
  );
}
