import { useState } from "react";
import { X, Copy } from "lucide-react";

export default function OrderDetailsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("Case & Customer Details");

  if (!isOpen) return null;

  const tabs = ["Case & Customer Details", "Address", "Products", "Digio eSign Documents"];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2 shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 pt-4 overflow-y-auto">
          {/* Top Info Section */}
          <div className="grid grid-cols-[180px_1fr] gap-y-3 text-[13px] mb-8">
            <div className="text-gray-500 font-medium">Order ID:</div>
            <div className="font-bold text-gray-900">2298</div>

            <div className="text-gray-500 font-medium">Tracking ID:</div>
            <div className="font-bold text-gray-900">EL767335963IN</div>

            <div className="text-gray-500 font-medium">Payment completed:</div>
            <div className="font-bold text-gray-900">27 Feb 2026 01:54 PM</div>

            <div className="text-gray-500 font-medium">Order placed:</div>
            <div className="font-bold text-gray-900">27 Feb 2026 02:01 PM</div>

            <div className="text-gray-500 font-medium">Assigned:</div>
            <div className="font-bold text-gray-900">3 Mar 2026 05:35 PM</div>

            <div className="text-gray-500 font-medium">Applied:</div>
            <div className="font-bold text-gray-900">26 Mar 2026 10:45 AM</div>

            <div className="text-gray-500 font-medium">Dispatched:</div>
            <div className="font-bold text-gray-900">27 Feb 2026 01:54 PM</div>

            <div className="text-gray-500 font-medium">Delivered:</div>
            <div className="font-bold text-gray-900">30 Mar 2026 06:03 PM</div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold transition-colors relative ${
                  activeTab === tab ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A1F36] rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="bg-[#F8F9FA] rounded-xl p-6">
            
            {/* Tab 1: Case & Customer */}
            {activeTab === "Case & Customer Details" && (
              <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                <div className="text-gray-500">Case Number:</div>
                <div className="font-bold text-gray-900">OS/300179/2024</div>
                
                <div className="text-gray-500">Legal Name:</div>
                <div className="font-bold text-gray-900">Anil philip</div>
                
                <div className="text-gray-500">Name:</div>
                <div className="font-bold text-gray-900">Anil philip</div>
                
                <div className="text-gray-500">Email:</div>
                <div className="font-bold text-gray-900">anilphilipka@gmail.com</div>
                
                <div className="text-gray-500">Phone:</div>
                <div className="font-bold text-gray-900">919495862301</div>
                
                <div className="text-gray-500 mt-2">Delivery Feedback:</div>
                <div className="font-bold text-gray-900 mt-2">• Issue: N/A</div>
              </div>
            )}

            {/* Tab 2: Address */}
            {activeTab === "Address" && (
              <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px] relative">
                <button className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50">
                  <Copy className="w-3.5 h-3.5" /> Copy Address
                </button>

                <div className="text-gray-500">Pincode:</div>
                <div className="font-bold text-gray-900">682028</div>
                
                <div className="text-gray-500">Address Line 1:</div>
                <div className="font-bold text-gray-900">67/67A flat no D 1st floor</div>
                
                <div className="text-gray-500">Address Line 2:</div>
                <div className="font-bold text-gray-900">attaniyathu road vennal</div>
                
                <div className="text-gray-500">City:</div>
                <div className="font-bold text-gray-900">kochi</div>
                
                <div className="text-gray-500">District:</div>
                <div className="font-bold text-gray-900">kochi</div>

                <div className="text-gray-500">State:</div>
                <div className="font-bold text-gray-900">kerala</div>

                <div className="text-gray-500">Country:</div>
                <div className="font-bold text-gray-900">India</div>
              </div>
            )}

            {/* Tab 3: Products */}
            {activeTab === "Products" && (
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm">Product 1</h4>
                <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                  <div className="text-gray-500">Type:</div>
                  <div className="font-bold text-gray-900">judgement</div>
                  
                  <div className="text-gray-500">Order Date:</div>
                  <div className="font-bold text-gray-900">attaniyathu road vennal</div>
                  
                  <div className="text-gray-500">File:</div>
                  <a href="#" className="font-semibold text-blue-500 hover:underline">N/A</a>
                </div>
              </div>
            )}

            {/* Tab 4: Digio eSign Documents */}
            {activeTab === "Digio eSign Documents" && (
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm">eSign 1</h4>
                <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                  <div className="text-gray-500">Digio ID:</div>
                  <div className="font-bold text-gray-900">DID260227135944268625QRGSUK5WP37</div>
                  
                  <div className="text-gray-500">Status:</div>
                  <div className="font-bold text-gray-900">Completed</div>
                  
                  <div className="text-gray-500">Signed Document:</div>
                  <a href="#" className="font-semibold text-blue-500 hover:underline">View Signed Document</a>

                  <div className="text-gray-500">Audit Log:</div>
                  <a href="#" className="font-semibold text-blue-500 hover:underline">View Audit Log</a>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}