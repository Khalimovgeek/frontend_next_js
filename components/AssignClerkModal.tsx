import { X, Plus, ChevronDown } from "lucide-react";

export default function AssignClerkModal({ 
  isOpen, 
  onClose, 
  onAddNewClick 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onAddNewClick: () => void 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[460px] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        

        <div className="my-3 flex justify-end items-center gap-4 shrink-0 ml-4">
                <button 
                onClick={onAddNewClick} 
                className="flex items-center  bg-[#4A1F36] text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-[#3d1a2c] transition-colors shadow-sm"
                >
                <Plus className="w-4 h-4" /> Add New
                </button>
                <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">
                <X className="w-6 h-6 mx-2" />
                </button>
            </div>
        <div className="flex justify-between items-start p-6 pb-2 pt-6">
          

        
            <div>
            <h2 className="text-[19px] font-bold text-gray-900 leading-tight">
              Assign Authorized Personnel
            </h2>
            <p className="text-gray-500 text-[13px] mt-1.5">
              Select the person who is authorized to collect CTC document.
            </p>
          </div>
          

          {/* Right Side: Buttons */}
          

        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 pt-5 space-y-5">
          
          {/* Clerk List */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                {/* Purple Checkbox */}
                <div className="w-4 h-4 rounded-[4px] border-[1.5px] border-[#4A1F36] flex items-center justify-center bg-white transition-colors">
                  {/* Invisible checkmark ready for state logic later */}
                  <svg className="w-3 h-3 text-white hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shadow-sm">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Shaman${item}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
                
                {/* Name */}
                <span className="text-[14px] font-medium text-gray-800">Shaman</span>
              </label>
            ))}
          </div>

          {/* Dropdown */}
          <div className="pt-2">
            <label className="block text-[13px] font-bold text-gray-500 mb-2">More Clerks</label>
            <div className="flex items-center justify-between bg-[#F8F9FA] border border-gray-200 rounded-md px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] text-gray-400 font-medium">Choose Clerks</span>
              <ChevronDown className="w-4 h-4 text-gray-800" />
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="px-6 pb-6 pt-2 flex items-center justify-center gap-4">
          <button onClick={onClose} className="px-6 py-2.5 border border-[#4A1F36] text-[#4A1F36] rounded-full text-sm font-semibold hover:bg-gray-50 w-full transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-[#4A1F36] text-white rounded-full text-sm font-semibold hover:bg-[#3d1a2c] w-full transition-colors shadow-sm">
            Assign Personnel
          </button>
        </div>

      </div>
    </div>
  );
}