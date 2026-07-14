import { useState } from "react";

const PRODUCT_OPTIONS = ["All", "Judgement", "Interim Order", "Other"];

export default function ProductFilter({ 
  currentFilters, 
  onApply, 
  onClose 
}: { 
  currentFilters: string[], 
  onApply: (filters: string[]) => void,
  onClose: () => void 
}) {
  const [selected, setSelected] = useState<string[]>(currentFilters.length ? currentFilters : ["All"]);

  const toggleOption = (option: string) => {
    if (option === "All") {
      setSelected(["All"]);
      return;
    }
    
    let newSelection = selected.filter(item => item !== "All"); // Remove 'All' if a specific item is clicked
    
    if (newSelection.includes(option)) {
      newSelection = newSelection.filter(item => item !== option);
    } else {
      newSelection.push(option);
    }

    if (newSelection.length === 0) newSelection = ["All"]; // Default back to All if everything is unchecked
    
    setSelected(newSelection);
  };

  return (
    <div className="absolute top-10 left-0 w-[380px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col p-5 z-50">
      
      <div className="flex flex-col gap-4 mb-8">
        {PRODUCT_OPTIONS.map((option) => {
          const isChecked = selected.includes(option);
          return (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#5A2D43] border-[#5A2D43]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                {isChecked && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[14px] text-gray-800">{option}</span>
            </label>
          )
        })}
      </div>

      <div className="flex items-center justify-between gap-3 pt-2">
        <button 
          onClick={() => { setSelected(["All"]); onApply(["All"]); onClose(); }}
          className="px-5  py-2 border border-[#4A1F36] text-[#4A1F36] rounded-full text-sm font-semibold hover:bg-gray-50 w-full transition-colors"
        >
          Reset Filter
        </button>
        <button 
          onClick={() => { onApply(selected); onClose(); }}
          className="px-5 py-2 bg-[#4A1F36] text-white rounded-full text-sm font-semibold hover:bg-[#3d1a2c] w-full transition-colors"
        >
          Apply
        </button>
      </div>

    </div>
  );
}