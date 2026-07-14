import { Tag, PenLine, Trash2 } from "lucide-react";

const AVAILABLE_TAGS = [
  { name: "Subscription Pending", color: "bg-[#7498AA]" },
  { name: "Nakul", color: "bg-[#9EBAA4]" },
  { name: "Follow up case for Details", color: "bg-[#C3887B]" },
  { name: "Add Case", color: "bg-[#AD9B82]" },
  { name: "Aadhaar Verified", color: "bg-[#C5A959]" },
  { name: "Autopay Concern", color: "bg-[#9D8CB3]" },
  { name: "Background Check for Case", color: "bg-[#7B95A6]" },
  { name: "Call Back", color: "bg-[#D29E9F]" },
  { name: "Case Added", color: "bg-[#A6B4B9]" },
  { name: "Gouri", color: "bg-[#6EA29B]" },
];

export default function ChooseTagMenu({ 
  onSelectTag, 
  onCreateNewClick 
}: { 
  onSelectTag: (tag: {name: string, color: string}) => void,
  onCreateNewClick: () => void 
}) {
  return (
    <div className="absolute top-10 left-0 w-[260px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col p-2 z-50">
      <div className="p-2">
        <button 
          onClick={onCreateNewClick} // <-- This connects to the main page
          className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 w-full transition-colors"
        >
          <Tag className="w-4 h-4 text-gray-600" /> Create New Tag
        </button>
      </div>
      
      <div className="border-t border-gray-100 my-1"></div>
      
      <div className="flex flex-col gap-3 p-2 max-h-[250px] overflow-y-auto">
        {AVAILABLE_TAGS.map((tag, idx) => (
          <div key={idx} className="flex justify-between items-center group cursor-pointer" onClick={() => onSelectTag(tag)}>
            <span className={`px-2.5 py-0.5 rounded-full text-white text-[11px] font-medium ${tag.color} hover:opacity-80 transition-opacity`}>
              {tag.name}
            </span>
            <div className="flex gap-2.5 text-gray-400">
              <PenLine className="w-3.5 h-3.5 hover:text-gray-700 transition-colors" />
              <Trash2 className="w-3.5 h-3.5 hover:text-red-500 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}