import { HiSearch } from "react-icons/hi";

export default function ToolboxHeader() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">The Toolbox</h1>
          <p className="text-gray-600 mt-2">
            Mix and match hooks and templates to build a solution that works the way you do.
          </p>
          <div className="mt-4 space-x-2">
            <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">tools</span>
            <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">quickstart</span>
            <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">idea</span>
          </div>
        </div>
        <HiSearch className="w-6 h-6 text-gray-500" />
      </div>
    </header>
  );
}
