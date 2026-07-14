"use client";

import React, { useState } from "react";
import { 
  Search, Upload, SlidersHorizontal, ChevronDown, Copy, 
  Eye, PenSquare, Trash2, Share2, Calendar, FileText, 
  Users, LayoutGrid, FileSearch, UserCircle, MoreHorizontal,
  ChevronRight, ChevronLeft
} from "lucide-react";

import FilterDrawer from "@/components/FilterDrawer";
import CreateTagModal from "@/components/CreateTagModal";
import OrderDetailsModal from "@/components/OrderDetailsModal";
import TagsQuickFilter from "@/components/TagsQuickFilter";
import ChooseTagMenu from "@/components/ChooseTagMenu";
import AddressCard from "@/components/AddressCard";
import AssignClerkModal from "@/components/AssignClerkModal";
import AddClerkModal from "@/components/AddClerkModal";
import ProductFilter from "@/components/ProductFilter";

const initialData = [
  {
    id: 1,
    user: { name: "Soji Abraham", phone: "91 80861 65790", ref: "OP/000251/2026" },
    court: { type: "Court Complex, Kunnamkullam", district: "Thrissur" },
    product: { type: "Judgement #584854", desc: "", price: "₹3,500" },
    date: { full: "7 Feb 2026", time: "12:57 PM", relative: "" },
    status: "cancelled",
    tags: [
      { name: "Subscription Pending", color: "bg-[#7498AA]" },
      { name: "Gouri", color: "bg-[#6EA29B]" },
      { name: "Add Case", color: "bg-[#AD9B82]" },
      { name: "Aadhaar Verified", color: "bg-[#C5A959]" }
    ],
    clerk: { name: "Shabarinath", hasActions: true, actions: ['edit', 'delete', 'share'] }
  },
  {
    id: 2,
    user: { name: "Shaman", phone: "91 80861 65790", ref: "OS/000850/2026" },
    court: { type: "District Court Thrissur", district: "Thrissur" },
    product: { type: "Interim Order #487565", desc: "", price: "$150" },
    date: { full: "7 Feb 2026", time: "12:57 PM", relative: "03 days since payment" },
    status: "order placed",
    tags: [
      { name: "Subscription Pending", color: "bg-[#7498AA]" },
      { name: "Gouri", color: "bg-[#6EA29B]" },
      { name: "Add Case", color: "bg-[#AD9B82]" },
      { name: "Aadhaar Verified", color: "bg-[#C5A959]" }
    ],
    clerk: { name: "", hasActions: false, actions: [] }
  },
  {
    id: 3,
    user: { name: "Gopalan", phone: "91 80861 65790", ref: "OS/000850/2026" },
    court: { type: "District Court Thrissur", district: "Thrissur" },
    product: { type: "Other", desc: "Joint Petition Filed Under Section 13 B", price: "₹2,500" },
    date: { full: "7 Feb 2026", time: "12:57 PM", relative: "11 days since payment" },
    status: "payment completed",
    tags: [
      { name: "Subscription Pending", color: "bg-[#7498AA]" },
      { name: "Gouri", color: "bg-[#6EA29B]" },
      { name: "Add Case", color: "bg-[#AD9B82]" },
      { name: "Aadhaar Verified", color: "bg-[#C5A959]" }
    ],
    clerk: { name: "Shabarinath", hasActions: true, actions: ['edit', 'delete'] }
  }
];

export default function Dashboard() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreateTagOpen, setIsCreateTagOpen] = useState(false);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const [isAssignClerkOpen, setIsAssignClerkOpen] = useState(false);
  const [isAddClerkOpen, setIsAddClerkOpen] = useState(false);

  const [tableData, setTableData] = useState(initialData);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [activeTagDropdownRow, setActiveTagDropdownRow] = useState<number | null>(null);
  const [activeAddressRow, setActiveAddressRow] = useState<number | null>(null);

  const [showProductFilter, setShowProductFilter] = useState(false);
  const [activeProductFilters, setActiveProductFilters] = useState<string[]>(["All"]);

  const filteredData = tableData.filter(row => {
    const matchesTags = activeFilters.length === 0 || row.tags.some(tag => activeFilters.includes(tag.name));
    const matchesProducts = activeProductFilters.includes("All") || activeProductFilters.some(filter => row.product.type.includes(filter));
    return matchesTags && matchesProducts;
  });

  const removeTag = (rowId: number, tagName: string) => {
    setTableData(prev => prev.map(row => row.id === rowId ? { ...row, tags: row.tags.filter(t => t.name !== tagName) } : row));
  };

  const addTagToRow = (rowId: number, tagToAdd: {name: string, color: string}) => {
    setTableData(prev => prev.map(row => {
      if (row.id === rowId) {
        if (row.tags.some(t => t.name === tagToAdd.name)) return row;
        return { ...row, tags: [...row.tags, tagToAdd] };
      }
      return row;
    }));
    setActiveTagDropdownRow(null);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'cancelled': return 'border-red-500 text-red-500';
      case 'order placed': return 'border-green-500 text-green-600';
      case 'payment completed': return 'border-yellow-500 text-yellow-600';
      default: return 'border-gray-500 text-gray-600';
    }
  };

  return (
    // Changed bg-gray-50 to bg-[#F5F5F5] to match the light gray surrounding
    <div className="flex h-screen bg-[#E5E5E5] font-sans text-sm">
      
      {/* MODALS */}
      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <CreateTagModal isOpen={isCreateTagOpen} onClose={() => setIsCreateTagOpen(false)} />
      <OrderDetailsModal isOpen={isOrderDetailsOpen} onClose={() => setIsOrderDetailsOpen(false)} />
      <AssignClerkModal isOpen={isAssignClerkOpen} onClose={() => setIsAssignClerkOpen(false)} onAddNewClick={() => { setIsAssignClerkOpen(false); setIsAddClerkOpen(true); }} />
      <AddClerkModal isOpen={isAddClerkOpen} onClose={() => setIsAddClerkOpen(false)} />

      {/* SIDEBAR */}
      <aside className="w-[72px] bg-[#111111] flex flex-col items-center py-4 justify-between shrink-0 z-20">
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Logo */}
          <div className="bg-[#4A1F36] w-full h-16 -mt-4 flex items-center justify-center mb-4 text-white">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
            </svg>
          </div>
          
          <nav className="flex flex-col gap-8 text-gray-400 w-full">
            
            {/* 1st Icon: With Yellow Marker */}
            <div className="relative w-full flex justify-center group cursor-pointer text-white">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#FFC107] rounded-r-md"></div>
              <LayoutGrid className="w-6 h-6" />
            </div>

            {/* 2nd Icon */}
            <div className="w-full flex justify-center hover:text-white cursor-pointer"><Users className="w-6 h-6" /></div>
            
            {/* 3rd Icon: Yellow Colored Icon */}
            <div className="w-full flex justify-center cursor-pointer text-[#FFC107]"><Users className="w-6 h-6" /></div>
            
            {/* Remaining Icons */}
            <div className="w-full flex justify-center hover:text-white cursor-pointer"><FileText className="w-6 h-6" /></div>
            <div className="w-full flex justify-center hover:text-white cursor-pointer"><FileSearch className="w-6 h-6" /></div>
            <div className="w-full flex justify-center hover:text-white cursor-pointer"><MoreHorizontal className="w-6 h-6" /></div>
          </nav>
        </div>
        <div className="text-gray-400 hover:text-white cursor-pointer bg-gray-200 rounded-full mb-2">
          <UserCircle className="w-10 h-10 text-gray-400" />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F2F2F2]">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Certified True Copy (47834)</h1>
            <p className="text-gray-500 text-sm mt-1">Manage Your CTC Orders Here</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 shadow-sm">
              <Upload className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => setIsFilterOpen(true)} className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 shadow-sm">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative ml-2">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search" className="pl-9 pr-4 py-2 bg-[#F5F5F5] border border-gray-200 rounded-full w-64 outline-none focus:border-gray-300" />
            </div>
          </div>
        </header>

        {/* WHITE CONTAINER FOR TABLE (With Padding & Shadow) */}
        <div className="flex-1 overflow-hidden p-6 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col flex-1 overflow-hidden">
            
            {/* TABS */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 shrink-0">
              <div className="flex bg-[#1E1E1E] rounded-full p-1 text-white text-sm font-medium">
                <button className="px-5 py-1.5 bg-white text-black rounded-full shadow">Orders (121)</button>
                <button className="px-5 py-1.5 text-gray-300 hover:text-white">Clerks (40) <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded ml-1">+</span></button>
                <button className="px-5 py-1.5 text-gray-300 hover:text-white">Courts (32)</button>
                <button className="px-5 py-1.5 text-gray-300 hover:text-white">Districts (14)</button>
                <button className="px-5 py-1.5 text-gray-300 hover:text-white">Eligible Users (11)</button>
              </div>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-50">
                <span className="text-xs text-gray-500 mr-2">Types</span>
                <span className="font-semibold mr-2 text-xs">ORDERS</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* TABLE WRAPPER (Allows horizontal scroll!) */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse min-w-[1400px]">
                <thead className="bg-[#F4F4F4] sticky top-0 z-10 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="p-4 pl-6 w-12">#</th>
                    <th className="p-4">User Info</th>
                    <th className="p-4">Court Complex</th>
                    
                    {/* Products Filter Header */}
                    <th className="p-4 w-[200px]">
                      <div className="flex items-center relative">
                        Products 
                        <button onClick={() => setShowProductFilter(!showProductFilter)} className={`ml-1 hover:text-black ${!activeProductFilters.includes("All") ? 'text-black' : 'text-gray-400'}`}>
                          <SlidersHorizontal className="w-3.5 h-3.5"/>
                        </button>
                        {showProductFilter && (
                          <ProductFilter currentFilters={activeProductFilters} onApply={(filters) => setActiveProductFilters(filters)} onClose={() => setShowProductFilter(false)} />
                        )}
                      </div>
                    </th>

                    <th className="p-4">Order Date <Calendar className="inline w-3.5 h-3.5 ml-1 text-gray-400"/></th>
                    <th className="p-4">Status <SlidersHorizontal className="inline w-3.5 h-3.5 ml-1 text-gray-400"/></th>
                    <th className="p-4">Order Details/ E-Sign</th>
                    
                    {/* Tags Filter Header */}
                    <th className="p-4 w-[280px]">
                      <div className="flex items-center relative">
                        Tags / Note 
                        <button onClick={() => setShowTagFilter(!showTagFilter)} className="ml-1 hover:text-black">
                          <SlidersHorizontal className="w-3.5 h-3.5"/>
                        </button>
                        {showTagFilter && (
                          <TagsQuickFilter currentFilters={activeFilters} onApply={(tags) => setActiveFilters(tags)} onClose={() => setShowTagFilter(false)} />
                        )}
                      </div>
                    </th>

                    <th className="p-4">Clerk <SlidersHorizontal className="inline w-3.5 h-3.5 ml-1 text-gray-400"/></th>
                    <th className="p-4 pr-6 text-center">Ecopy</th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-100">
                  {filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/50 align-top">
                      <td className="p-4 pl-6 text-gray-500 font-medium pt-5">{row.id}</td>
                      
                      {/* User Info */}
                      <td className="p-4 pt-5 relative">
                        <div className="font-bold text-gray-900 text-[14px]">{row.user.name}</div>
                        <div className="text-gray-500 text-[13px] mt-1 flex items-center gap-1.5">
                          {row.user.phone} <Copy className="w-4 h-4 cursor-pointer text-gray-600 hover:text-black"/>
                        </div>
                        <div className="text-gray-400 text-[13px] mt-0.5">{row.user.ref}</div>
                        <button onClick={() => setActiveAddressRow(activeAddressRow === row.id ? null : row.id)} className="mt-3 text-[12px] font-semibold bg-[#EAEAEA] text-gray-800 px-3 py-1.5 rounded-md flex items-center gap-1.5 hover:bg-gray-300 border border-transparent">
                          <Copy className="w-3.5 h-3.5" /> Copy Address
                        </button>
                        {activeAddressRow === row.id && <AddressCard user={row.user} onClose={() => setActiveAddressRow(null)} />}
                      </td>

                      {/* Court Complex */}
                      <td className="p-4 pt-5">
                        <div className="font-bold text-gray-900 text-[14px] leading-tight">{row.court.type}</div>
                        <div className="text-gray-500 text-[13px] mt-1.5">{row.court.district}</div>
                      </td>

                      {/* Products */}
                      <td className="p-4 pt-5">
                        <div className="font-bold text-gray-900 text-[14px]">{row.product.type}</div>
                        {row.product.desc && <div className="text-gray-500 text-[12px] mt-1 leading-tight w-40">{row.product.desc}</div>}
                        <div className="text-gray-500 text-[13px] mt-1.5">{row.product.price}</div>
                      </td>

                      {/* Date */}
                      <td className="p-4 pt-5">
                        <div className="font-bold text-gray-900 text-[14px]">{row.date.full}</div>
                        <div className="text-gray-500 text-[13px] mt-0.5">{row.date.time}</div>
                        {row.date.relative && (
                          <div className="text-[13px] mt-2 font-medium text-gray-500">
                            <span className="text-red-500">{row.date.relative.split(' ')[0]}</span> {row.date.relative.substring(3)}
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="p-4 pt-5">
                        <div className="flex flex-col items-start gap-3">
                          <div className="flex items-center justify-between border border-gray-200 rounded-md px-3 py-1.5 bg-[#F8F9FA] cursor-pointer w-[120px]">
                            <span className="text-gray-400 text-[12px] font-medium">Update status</span>
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className={`inline-flex px-3 py-0.5 rounded-full border text-[11px] font-bold lowercase tracking-wide bg-white ${getStatusStyle(row.status)}`}>
                            {row.status}
                          </span>
                        </div>
                      </td>

                      {/* View Buttons */}
                      <td className="p-4 pt-5">
                        <div className="flex flex-col gap-2 w-[100px]">
                          <button onClick={() => setIsOrderDetailsOpen(true)} className="flex items-center justify-center w-full gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 font-bold text-gray-800 shadow-sm text-[13px]">
                            View
                          </button>
                          <button className="flex items-center justify-center w-full gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 font-bold text-gray-800 shadow-sm text-[13px]">
                            <Eye className="w-4 h-4" /> E-sign
                          </button>
                        </div>
                      </td>

                      {/* Tags */}
                      <td className="p-4 pt-5">
                        <div className="flex gap-2 mb-3 relative">
                          <div onClick={() => setActiveTagDropdownRow(activeTagDropdownRow === row.id ? null : row.id)} className="flex-1 flex items-center justify-between border border-gray-200 rounded-md px-3 py-1.5 bg-white shadow-sm cursor-pointer hover:bg-gray-50">
                            <span className="text-gray-400 text-[13px]">Choose Tag</span>
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          </div>
                          {activeTagDropdownRow === row.id && <ChooseTagMenu onSelectTag={(tag) => addTagToRow(row.id, tag)} onCreateNewClick={() => { setActiveTagDropdownRow(null); setIsCreateTagOpen(true); }} />}
                          <button onClick={() => setIsCreateTagOpen(true)} className="p-1.5 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 bg-white">
                            <PenSquare className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {row.tags.map((tag, i) => (
                            <span key={i} className={`relative text-[11px] font-medium text-white px-2.5 py-0.5 rounded-full ${tag.color}`}>
                              {tag.name}
                              <button onClick={() => removeTag(row.id, tag.name)} className="absolute -top-1 -right-1 bg-[#222] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px] cursor-pointer hover:bg-red-500">×</button>
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Clerk */}
                      <td className="p-4 pt-5">
                        {row.clerk.hasActions ? (
                          <div>
                            <div className="font-bold text-gray-900 text-[14px] mb-2.5">{row.clerk.name}</div>
                            <div className="flex items-center gap-3 text-gray-800">
                              {row.clerk.actions.includes('edit') && <PenSquare className="w-4 h-4 cursor-pointer hover:text-gray-500" />}
                              {row.clerk.actions.includes('delete') && <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500" />}
                              {row.clerk.actions.includes('share') && <Share2 className="w-4 h-4 cursor-pointer hover:text-gray-500" />}
                            </div>
                          </div>
                        ) : (
                          <button onClick={() => setIsAssignClerkOpen(true)} className="bg-[#4A1F36] text-white px-4 py-1.5 rounded-md text-[13px] font-semibold hover:bg-[#3d1a2c] flex items-center gap-2 shadow-sm">
                            <UserCircle className="w-4 h-4" /> Assign
                          </button>
                        )}
                      </td>

                      {/* Ecopy */}
                      <td className="p-4 pr-6 pt-5 text-center">
                         <button className="bg-[#4A1F36] text-white px-4 py-1.5 rounded-md text-[13px] font-semibold hover:bg-[#3d1a2c] flex items-center justify-center w-full gap-2 shadow-sm">
                            <Upload className="w-4 h-4" /> Upload
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* NEW PAGINATION (Exactly like the screenshot) */}
            <div className="h-[72px] bg-white border-t border-gray-200 flex items-center justify-end px-6 shrink-0">
               
               {/* Numbers */}
               <div className="flex items-center gap-1.5 mr-10">
                 <button className="p-2 text-gray-400 hover:text-black transition-colors">
                    <ChevronLeft className="w-5 h-5"/>
                 </button>
                 
                 <button className="w-8 h-8 rounded-md bg-[#4A1F36] text-white font-bold text-[15px] flex items-center justify-center shadow-sm">1</button>
                 <button className="w-8 h-8 rounded-md text-black font-bold text-[15px] flex items-center justify-center hover:bg-gray-100">2</button>
                 <button className="w-8 h-8 rounded-md text-black font-bold text-[15px] flex items-center justify-center hover:bg-gray-100">3</button>
                 <button className="w-8 h-8 rounded-md text-black font-bold text-[15px] flex items-center justify-center hover:bg-gray-100">4</button>
                 <button className="w-8 h-8 rounded-md text-black font-bold text-[15px] flex items-center justify-center hover:bg-gray-100">5</button>
                 
                 <div className="flex gap-1 px-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                 </div>

                 <button className="h-8 px-2 rounded-md text-black font-bold text-[15px] flex items-center justify-center hover:bg-gray-100">4810</button>
                 
                 <button className="p-2 text-gray-500 hover:text-black transition-colors">
                    <ChevronRight className="w-5 h-5"/>
                 </button>
               </div>

               {/* Go To Page */}
               <div className="flex items-center gap-3">
                 <span className="text-[13px] font-bold text-gray-900">Go to</span>
                 <input type="text" className="w-16 h-8 border border-gray-300 rounded-md px-2 text-center text-[13px] font-semibold outline-none focus:border-gray-500 shadow-sm" />
                 <span className="text-[13px] font-bold text-gray-900">Page</span>
               </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}