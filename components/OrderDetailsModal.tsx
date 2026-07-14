import { Modal, Tabs } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function OrderDetailsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    {
      key: "1",
      label: "Case & Customer Details",
      children: (
        <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px] text-gray-700">
          <div className="text-gray-400 font-medium">Case Number:</div>
          <div className="font-bold text-gray-900">OS/300179/2024</div>
          <div className="text-gray-400 font-medium">Legal Name:</div>
          <div className="font-bold text-gray-900">Anil philip</div>
          <div className="text-gray-400 font-medium">Name:</div>
          <div className="font-bold text-gray-900">Anil philip</div>
          <div className="text-gray-400 font-medium">Email:</div>
          <div className="font-bold text-gray-900">anilphilipka@gmail.com</div>
          <div className="text-gray-400 font-medium">Phone:</div>
          <div className="font-bold text-gray-900">919495862301</div>
          <div className="text-gray-400 font-medium mt-2">Delivery Feedback:</div>
          <div className="font-bold text-gray-900 mt-2">• Issue: N/A</div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Address",
      children: (
        <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px] relative">
          <button className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50">
            <CopyOutlined /> Copy Address
          </button>
          <div className="text-gray-400 font-medium">Pincode:</div>
          <div className="font-bold text-gray-900">682028</div>
          <div className="text-gray-400 font-medium">Address Line 1:</div>
          <div className="font-bold text-gray-900">67/67A flat no D 1st floor</div>
          <div className="text-gray-400 font-medium">Address Line 2:</div>
          <div className="font-bold text-gray-900">attaniyathu road vennal</div>
          <div className="text-gray-400 font-medium">City:</div>
          <div className="font-bold text-gray-900">kochi</div>
          <div className="text-gray-400 font-medium">District:</div>
          <div className="font-bold text-gray-900">kochi</div>
          <div className="text-gray-400 font-medium">State:</div>
          <div className="font-bold text-gray-900">kerala</div>
          <div className="text-gray-400 font-medium">Country:</div>
          <div className="font-bold text-gray-900">India</div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Products",
      children: (
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-sm">Product 1</h4>
          <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
            <div className="text-gray-400 font-medium">Type:</div>
            <div className="font-bold text-gray-900">judgement</div>
            <div className="text-gray-400 font-medium">Order Date:</div>
            <div className="font-bold text-gray-900">attaniyathu road vennal</div>
            <div className="text-gray-400 font-medium">File:</div>
            <a href="#" className="font-semibold text-blue-500 hover:underline">N/A</a>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "Digio eSign Documents",
      children: (
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-sm">eSign 1</h4>
          <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
            <div className="text-gray-400 font-medium">Digio ID:</div>
            <div className="font-bold text-gray-900">DID260227135944268625QRGSUK5WP37</div>
            <div className="text-gray-400 font-medium">Status:</div>
            <div className="font-bold text-gray-900">Completed</div>
            <div className="text-gray-400 font-medium">Signed Document:</div>
            <a href="#" className="font-semibold text-blue-500 hover:underline">View Signed Document</a>
            <div className="text-gray-400 font-medium">Audit Log:</div>
            <a href="#" className="font-semibold text-blue-500 hover:underline">View Audit Log</a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Modal
      title={<span className="text-2xl font-bold text-gray-900">Order Details</span>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={720}
      centered
    >
      <div className="py-4">
        {/* Top Metadata section */}
        <div className="grid grid-cols-[180px_1fr] gap-y-3 text-[13px] mb-6">
          <div className="text-gray-400 font-medium">Order ID:</div>
          <div className="font-bold text-gray-900">2298</div>
          <div className="text-gray-400 font-medium">Tracking ID:</div>
          <div className="font-bold text-gray-900">EL767335963IN</div>
          <div className="text-gray-400 font-medium">Payment completed:</div>
          <div className="font-bold text-gray-900">27 Feb 2026 01:54 PM</div>
          <div className="text-gray-400 font-medium">Order placed:</div>
          <div className="font-bold text-gray-900">27 Feb 2026 02:01 PM</div>
          <div className="text-gray-400 font-medium">Assigned:</div>
          <div className="font-bold text-gray-900">3 Mar 2026 05:35 PM</div>
          <div className="text-gray-400 font-medium">Applied:</div>
          <div className="font-bold text-gray-900">26 Mar 2026 10:45 AM</div>
          <div className="text-gray-400 font-medium">Dispatched:</div>
          <div className="font-bold text-gray-900">27 Feb 2026 01:54 PM</div>
          <div className="text-gray-400 font-medium">Delivered:</div>
          <div className="font-bold text-gray-900">30 Mar 2026 06:03 PM</div>
        </div>

        {/* Ant Design Tabs */}
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          tabBarStyle={{ marginBottom: 24 }}
        />
      </div>
    </Modal>
  );
}