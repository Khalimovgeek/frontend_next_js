import { Modal, Input, Button, Form, message } from "antd";
import { useState } from "react";

export default function AddClerkModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        // Simulate API call saving data
        setTimeout(() => {
          message.success("Clerk added successfully!");
          setLoading(false);
          form.resetFields();
          onClose();
        }, 1000);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div>
          <h2 className="text-xl font-bold text-gray-900">Add Clerk</h2>
          <p className="text-gray-500 text-xs font-normal mt-1">Add a new authorized person by providing details</p>
        </div>
      }
      open={isOpen}
      onCancel={handleCancel}
      footer={
        <div className="flex justify-end gap-3 p-4 bg-gray-50 border-t border-gray-100 -mx-6 -mb-6 rounded-b-xl">
          <Button onClick={handleCancel} className="rounded-full px-6 border-[#4A1F36] text-[#4A1F36] bg-transparent h-9">
            Cancel
          </Button>
          <Button 
            type="primary" 
            loading={loading}
            onClick={handleSubmit} 
            className="rounded-full px-6 bg-[#4A1F36] border-[#4A1F36] hover:bg-[#3d1a2c] h-9 font-semibold text-white"
          >
            Add & Save
          </Button>
        </div>
      }
      width={640}
      centered
    >
      {/* We wrapped everything in Ant Design's Form component */}
      <Form
        form={form}
        layout="vertical"
        requiredMark={false} // Hides default asterisk, we will style custom red labels
        className="py-6 grid grid-cols-2 gap-x-6 gap-y-2"
      >
        
        {/* Clerk Name Input */}
        <Form.Item
          name="clerkName"
          label={<span className="text-xs font-semibold text-gray-500">Clerk Name <span className="text-red-500">*</span></span>}
          rules={[
            { required: true, message: "Please enter the clerk's name" },
            { min: 3, message: "Name must be at least 3 characters" }
          ]}
        >
          <Input className="h-10 text-sm text-gray-900" placeholder="Enter clerk name" />
        </Form.Item>

        {/* Phone Number Input */}
        <Form.Item
          name="phoneNumber"
          label={<span className="text-xs font-semibold text-gray-500">Phone Number <span className="text-red-500">*</span></span>}
          rules={[
            { required: true, message: "Please enter phone number" },
            { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit phone number" }
          ]}
        >
          <Input 
            addonBefore={
              <div className="flex items-center gap-1">
                <span>🇮🇳</span> +91
              </div>
            }
            className="h-10 text-sm text-gray-900" 
            placeholder="9876543210"
          />
        </Form.Item>

        {/* Clerk ID Input */}
        <Form.Item
          name="clerkId"
          label={<span className="text-xs font-semibold text-gray-500">Clerk ID <span className="text-red-500">*</span></span>}
          rules={[
            { required: true, message: "Please enter a clerk ID" }
          ]}
        >
          <Input placeholder="Enter Clerk ID" className="h-10 text-sm" />
        </Form.Item>

      </Form>
    </Modal>
  );
}