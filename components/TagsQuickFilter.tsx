import { useState } from "react";

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

export default function TagsQuickFilter({ 
  currentFilters, 
  onApply, 
  onClose 
}: { 
  currentFilters: string[], 
  onApply: (tags: string[]) => void,
  onClose: () => void 
}) {
  const [checkedTags, setCheckedTags] = useState<string[]>(currentFilters);

  const toggleTag = (tagName: string) => {
    setCheckedTags(prev => 
      prev.includes(tagName) ? prev.filter(t => t !== tagName) : [...prev, tagName]
    );
  };

  return (
    <div className="absolute top-10 right-0 w-[300px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col p-4 z-50">
      <div className="flex flex-col gap-3.5 max-h-[320px] overflow-y-auto pr-2">
        {AVAILABLE_TAGS.map((tag, idx) => {
          const isChecked = checkedTags.includes(tag.name);
          return (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleTag(tag.name)}>
              <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#4A1F36] border-[#4A1F36]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {isChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-white text-[11px] font-medium ${tag.color}`}>
                {tag.name}
              </span>
            </label>
          )
        })}
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
        <button 
          onClick={() => setCheckedTags([])}
          className="px-5 py-1.5 border border-[#4A1F36] text-[#4A1F36] rounded-full text-xs font-semibold hover:bg-gray-50"
        >
          Reset Filter
        </button>
        <button 
          onClick={() => { onApply(checkedTags); onClose(); }}
          className="px-5 py-1.5 bg-[#4A1F36] text-white rounded-full text-xs font-semibold hover:bg-[#3d1a2c]"
        >
          Apply
        </button>
      </div>
    </div>
  );
}