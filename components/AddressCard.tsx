import { X } from "lucide-react";

export default function AddressCard({ user, onClose }: { user: any, onClose: () => void }) {
  return (
    <div className="absolute top-12 left-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 w-[260px] z-50 animate-in fade-in zoom-in-95">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 text-[13px]">{user.name}</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-black -mt-1 -mr-1">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[13px] text-gray-600 leading-[1.5]">
        67/67A flat no D 1st floor,<br />
        attaniyathu road vennala,<br />
        Kochi, Kerala, 654321<br />
        {user.phone}
      </p>
    </div>
  );
}