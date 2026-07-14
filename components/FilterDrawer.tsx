import { Drawer, Select, Checkbox, Button } from "antd";

export default function FilterDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Drawer
      title={<span className="text-xl font-bold text-gray-900">Filter Users</span>}
      placement="right"
      onClose={onClose}
      open={isOpen}
      size={400}
      footer={
        <div className="flex gap-4 py-2">
          <Button 
            className="w-full h-10 border-[#5A2D43] text-[#5A2D43] rounded-full font-semibold hover:bg-gray-50"
            onClick={onClose}
          >
            Reset Filter
          </Button>
          <Button 
            type="primary"
            className="w-full h-10 bg-[#5A2D43] border-[#5A2D43] text-white rounded-full font-semibold hover:bg-[#4a2436]"
            onClick={onClose}
          >
            Apply Filter
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">District</label>
          <Select
            placeholder="Choose District"
            className="w-full h-11"
            options={[{ value: "thrissur", label: "Thrissur" }]}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">Court Establishment</label>
          <Select
            placeholder="Choose Court Establishment"
            className="w-full h-11"
            options={[{ value: "court1", label: "Court Establishment 1" }]}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">Product</label>
          <Select
            placeholder="All"
            className="w-full h-11"
            options={[{ value: "all", label: "All" }]}
          />
        </div>

        <div className="pt-2">
          <Checkbox className="text-sm font-semibold text-gray-900">
            Test Users
          </Checkbox>
        </div>
      </div>
    </Drawer>
  );
}