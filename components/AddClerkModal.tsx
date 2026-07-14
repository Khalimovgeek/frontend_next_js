import { Modal, Input, Button, Space } from "antd";

export default function AddClerkModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Modal
      title={
        <div>
          <h2 className="text-xl font-bold text-gray-900">Add Clerk</h2>
          <p className="text-gray-400 text-xs font-normal mt-1">Add a new authorized person by providing details</p>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={
        <div className="flex justify-end gap-3 p-4 bg-gray-50 border-t border-gray-100 -mx-6 -mb-6 rounded-b-xl">
          <Button onClick={onClose} className="rounded-full px-6 border-[#4A1F36] text-[#4A1F36] bg-transparent">Cancel</Button>
          <Button disabled className="rounded-full px-6 bg-gray-300 text-white border-transparent">Add & Save</Button>
        </div>
      }
      width={640}
      centered
    >
      <div className="py-6 grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2">Clerk Name <span className="text-red-500">*</span></label>
          <Input defaultValue="Gangadharan" className="h-10 text-sm font-semibold text-gray-900" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2">Phone Number <span className="text-red-500">*</span></label>
          
          <div className="flex">
            <div className="cursor-pointer px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-lg flex items-center text-sm font-semibold text-gray-900">
              <span>🇮🇳</span> +91
            </div>
            <Input placeholder="Phone number" className="h-10 text-sm font-semibold text-gray-900 rounded-l-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2">Clerk ID <span className="text-red-500">*</span></label>
          <Input placeholder="Enter Clerk ID" className="h-10 text-sm" />
        </div>
      </div>
    </Modal>
  );
}