import { X } from "lucide-react";

export default function FilterDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[400px] bg-white z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Filter Users</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">District</label>
            <select className="w-full bg-[#F5F5F5] border-none text-sm rounded-md px-3 py-2.5 outline-none appearance-none cursor-pointer text-gray-400">
              <option>Choose District</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Court Establishment</label>
            <select className="w-full bg-[#F5F5F5] border-none text-sm rounded-md px-3 py-2.5 outline-none appearance-none cursor-pointer text-gray-400">
              <option>Choose Court Establishment</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Product</label>
            <select className="w-full bg-[#F5F5F5] border-none text-sm rounded-md px-3 py-2.5 outline-none appearance-none cursor-pointer text-black">
              <option>All</option>
            </select>
          </div>

          <label className="flex items-center gap-3 cursor-pointer mt-4">
            <div className="w-4 h-4 rounded bg-[#5A2D43] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900">Test Users</span>
          </label>
        </div>

        <div className="p-6 border-t border-gray-100 flex items-center justify-center gap-4">
          <button className="px-6 py-2 border border-[#5A2D43] text-[#5A2D43] rounded-full text-sm font-semibold hover:bg-gray-50 w-full">
            Reset Filter
          </button>
          <button className="px-6 py-2 bg-[#5A2D43] text-white rounded-full text-sm font-semibold hover:bg-[#4a2436] w-full">
            Apply Filter
          </button>
        </div>
      </div>
    </>
  );
}