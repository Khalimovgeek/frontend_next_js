import { X, ChevronDown } from "lucide-react";

export default function AddClerkModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Add Clerk</h2>
            <p className="text-gray-500 text-xs mt-1">Add a new authorized person by providing details</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-12 grid grid-cols-2 gap-6">
          
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Clerk Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              defaultValue="Gangadharan" 
              className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm font-semibold text-gray-900 outline-none focus:border-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Phone Number <span className="text-red-500">*</span></label>
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden focus-within:border-gray-400">
              <div className="flex items-center gap-1 bg-white px-3 py-2.5 border-r border-gray-200 cursor-pointer hover:bg-gray-50">
                <span>🇮🇳</span>
                <span className="text-sm font-medium text-gray-600">+91</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="flex-1 px-3 py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Clerk ID <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="Enter Clerk ID" 
              className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 placeholder:text-gray-300"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50/50">
          <button onClick={onClose} className="px-6 py-2 border border-[#4A1F36] text-[#4A1F36] rounded-full text-sm font-semibold hover:bg-white w-32 bg-transparent">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#B0B0B0] text-white rounded-full text-sm font-semibold cursor-not-allowed w-32">
            Add & Save
          </button>
        </div>

      </div>
    </div>
  );
}