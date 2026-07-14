import { Modal, Checkbox, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function AssignClerkModal({ 
  isOpen, 
  onClose, 
  onAddNewClick 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onAddNewClick: () => void 
}) {
  return (
    <Modal
      title={
        <div className="flex justify-between items-start w-full pr-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Assign Authorized Personnel</h2>
            <p className="text-gray-400 text-xs font-normal mt-1 leading-tight">Select the person who is authorized to collect CTC document.</p>
          </div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={onAddNewClick}
            className="bg-[#4A1F36] border-[#4A1F36] hover:bg-[#3d1a2c]"
          >
            Add New
          </Button>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={[
        <div key="actions" className="flex justify-end gap-3 px-2 pt-4">
          <Button key="cancel" onClick={onClose} className="rounded-full px-6 h-9 border-[#4A1F36] text-[#4A1F36]">Cancel</Button>,
          <Button key="assign" type="primary" onClick={onClose} className="rounded-full px-6 h-9 bg-[#4A1F36] border-[#4A1F36]">Assign Personnel</Button>
        </div>
      ]}
      width={460}
      centered
    >
      <div className="py-4 space-y-5">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <Checkbox />
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shadow-sm">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Shaman${item}`} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-[14px] font-medium text-gray-800">Shaman</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <label className="block text-[13px] font-bold text-gray-500 mb-2">More Clerks</label>
          <Select 
            placeholder="Choose Clerks" 
            className="w-full h-11"
            options={[]}
          />
        </div>
      </div>
    </Modal>
  );
}