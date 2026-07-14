import { X } from "lucide-react";

export default function CreateTagModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const colors = [
    "bg-[#5C89A0]", "bg-[#8EAC94]", "bg-[#CD7666]", "bg-[#A7977F]", 
    "bg-[#CDA64B]", "bg-[#9A87B7]", "bg-[#6A889C]", "bg-[#C48C90]", 
    "bg-[#95A5A6]", "bg-[#5D9B91]", "bg-[#4A1F36]"
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="p-6 relative">
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-xl font-bold text-gray-900">Support Tags</h2>
          <p className="text-gray-400 text-xs mt-1 mb-6">Create new tags here</p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2">New Tag Name</label>
              <input 
                type="text" 
                placeholder="Enter Tag Name" 
                className="w-full bg-[#F5F5F5] border-none text-sm rounded-md px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#5A2D43]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2">Choose Tag Color</label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color, idx) => (
                  <button key={idx} className={`w-6 h-6 rounded-full ${color} cursor-pointer hover:ring-2 ring-offset-1 ring-gray-400`} />
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 mt-6">
              <label className="block text-xs text-gray-400 mb-2">Preview</label>
              <div className="h-8"></div> {/* Empty space for preview */}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 border border-[#5A2D43] text-[#5A2D43] rounded-full text-sm font-semibold hover:bg-gray-50 w-32">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#B0B0B0] text-white rounded-full text-sm font-semibold cursor-not-allowed w-32">
            Add Tag
          </button>
        </div>

      </div>
    </div>
  );
}