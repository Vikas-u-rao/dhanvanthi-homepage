"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { 
  Download, 
  LogOut, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Mail, 
  Phone, 
  Calendar,
  User,
  Clock,
  Eye,
  EyeOff
} from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;

  message: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  createdAt: string;
  updatedAt: string;
}

export default function AdminInquiriesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedInquiries, setExpandedInquiries] = useState<Record<string, boolean>>({});

  // Filters & Sorting state

  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByDate, setSortByDate] = useState<"desc" | "asc">("desc");

  // Load inquiries
  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/inquiries");
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
        setIsAuthenticated(true);
      } else if (response.status === 401) {
        setIsAuthenticated(false);
      } else {
        toast.error("Failed to load inquiries.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Check auth state on mount
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return undefined;
    };

    const authCookie = getCookie("admin_password");
    if (authCookie) {
      fetchInquiries();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      toast.error("Please enter the password.");
      return;
    }

    // Set cookie
    document.cookie = `admin_password=${encodeURIComponent(password)}; path=/; max-age=86400; SameSite=Strict`;
    
    // Attempt fetch
    setIsLoading(true);
    try {
      const response = await fetch("/api/inquiries");
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
        setIsAuthenticated(true);
        toast.success("Welcome back, Administrator!");
      } else {
        // Clear cookie if incorrect
        document.cookie = "admin_password=; path=/; max-age=0; SameSite=Strict";
        toast.error("Incorrect password.");
      }
    } catch (error) {
      toast.error("An error occurred during verification.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    document.cookie = "admin_password=; path=/; max-age=0; SameSite=Strict";
    setIsAuthenticated(false);
    setInquiries([]);
    setPassword("");
    toast.info("Logged out successfully.");
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const originalInquiries = [...inquiries];
    // Optimistic UI update
    setInquiries(prev => 
      prev.map(item => item.id === id ? { ...item, status: newStatus as any } : item)
    );

    try {
      const response = await fetch(`/api/inquiry/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        // Revert UI on error
        setInquiries(originalInquiries);
        const err = await response.json();
        toast.error(err.message || "Failed to update status.");
      } else {
        toast.success("Inquiry status updated.");
      }
    } catch (error) {
      setInquiries(originalInquiries);
      toast.error("Network error. Could not update status.");
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedInquiries(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filtered & Sorted Inquiries
  const filteredInquiries = inquiries
    .filter(item => {
      const matchesStatus = 
        filterStatus === "all" || 
        item.status === filterStatus;

      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery) ||
        item.message.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortByDate === "desc" ? dateB - dateA : dateA - dateB;
    });

  // Export CSV
  const handleExportCSV = () => {
    if (filteredInquiries.length === 0) {
      toast.info("No inquiries to export.");
      return;
    }

    const escapeCsv = (str: string) => {
      if (!str) return "";
      return `"${str.replace(/"/g, '""')}"`;
    };

    const headers = ["Name", "Phone", "Email", "Message", "Status", "Date"];
    const rows = filteredInquiries.map(inq => [
      escapeCsv(inq.name),
      escapeCsv(inq.phone),
      escapeCsv(inq.email),
      escapeCsv(inq.message),
      escapeCsv(inq.status),
      escapeCsv(new Date(inq.createdAt).toLocaleString("en-IN")),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Dhanvanti_Valley_Inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV export downloaded successfully.");
  };

  // Guard state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#f2f6df] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#638038] border-t-transparent rounded-full animate-spin"></div>
          <p className="font-urbanist text-[#638038] font-semibold text-lg">Loading Admin panel...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-[#f2f6df] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl border border-[#638038]/30 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
          <h2 className="font-bavicka text-[40px] text-[#638038] font-bold mb-2 text-center">Dhanvanti Valley</h2>
          <p className="font-urbanist text-[#999] text-sm text-center mb-6 font-medium">Administrator Access Gate</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-chopin text-sm font-semibold text-[#394d23]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[rgba(99,128,56,0.06)] border border-[#638038]/30 focus:border-[#638038] outline-hidden px-4 py-3 rounded-[6px] font-urbanist text-[#394d23] placeholder-gray-400 text-[15px] w-full transition-all"
                placeholder="Enter Administrator Password"
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-[#638038] hover:bg-[#536c2e] text-white py-3.5 rounded-[6px] font-urbanist font-medium text-[15px] transition-all cursor-pointer shadow-md active:scale-95 disabled:opacity-50"
            >
              Verify & Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9f5] flex flex-col font-urbanist">
      
      {/* Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#394d23] text-white px-6 py-4 flex justify-between items-center shadow-md select-none">
        <div className="flex flex-col">
          <h1 className="font-chopin text-[22px] md:text-[26px] font-medium tracking-tight">
            Dhanvanti Valley
          </h1>
          <span className="text-white/70 text-[12px] uppercase tracking-widest font-semibold">
            Inquiry Control Center
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 flex items-center gap-2 px-4 py-2.5 rounded-[6px] text-sm font-semibold transition-all cursor-pointer"
        >
          <LogOut className="size-4" />
          <span>Logout</span>
        </button>
      </header>

      {/* Control Panels */}
      <main className="flex-grow p-4 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
        
        {/* Filters/Tools Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          <div className="flex flex-wrap gap-4 items-center flex-grow">
            
            {/* Search Input */}
            <div className="relative min-w-[240px] flex-grow md:flex-grow-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
              <input
                type="text"
                placeholder="Search name, email, phone, msg..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#638038] focus:outline-hidden w-full text-gray-700 bg-gray-50/50"
              />
            </div>

            {/* Filter Status */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:border-[#638038] focus:outline-hidden text-gray-700 cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="CLOSED">Closed</option>
            </select>

            {/* Sort Date */}
            <select
              value={sortByDate}
              onChange={(e) => setSortByDate(e.target.value as any)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:border-[#638038] focus:outline-hidden text-gray-700 cursor-pointer"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>

          </div>

          {/* Export Button */}
          <button
            onClick={handleExportCSV}
            className="bg-[#638038] hover:bg-[#536c2e] active:scale-95 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="size-4" />
            <span>Export CSV ({filteredInquiries.length})</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-grow flex flex-col">
          {isLoading ? (
            <div className="flex-grow flex flex-col items-center justify-center py-20 gap-4 text-gray-500">
              <div className="w-10 h-10 border-4 border-[#638038] border-t-transparent rounded-full animate-spin"></div>
              <span>Fetching matching inquiries...</span>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center py-24 text-gray-400 gap-2 select-none">
              <User className="size-12 opacity-50" />
              <p className="font-semibold text-lg">No inquiries match your criteria</p>
              <p className="text-sm">Try widening your filters or search terms.</p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-200 text-gray-500 font-semibold text-[13px] uppercase select-none">
                    <th className="py-4 px-6 font-bold">Contact / Submitter</th>
                    <th className="py-4 px-6 font-bold">Message Content</th>
                    <th className="py-4 px-6 font-bold">Status Status</th>
                    <th className="py-4 px-6 font-bold">Date Received</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {filteredInquiries.map((inq) => {
                    const isExpanded = expandedInquiries[inq.id] || false;
                    const truncatedMessage = inq.message.length > 80 
                      ? `${inq.message.substring(0, 80)}...`
                      : inq.message;

                    // Color indicator for statuses
                    const statusColorMap = {
                      NEW: "bg-red-50 text-red-700 border-red-200/60",
                      CONTACTED: "bg-amber-50 text-amber-700 border-amber-200/60",
                      CLOSED: "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                    };

                    return (
                      <tr 
                        key={inq.id} 
                        className={`hover:bg-gray-50/50 transition-colors ${
                          inq.status === "NEW" ? "bg-amber-50/5" : ""
                        }`}
                      >
                        {/* Submitter info */}
                        <td className="py-4 px-6 max-w-[280px]">
                          <div className="flex flex-col gap-1">
                            <div className="font-semibold text-gray-900 flex items-center gap-1.5">
                              <User className="size-3.5 text-gray-400" />
                              <span>{inq.name}</span>
                            </div>
                            <div className="text-gray-500 text-xs flex items-center gap-1.5">
                              <Mail className="size-3 text-gray-400" />
                              <a href={`mailto:${inq.email}`} className="hover:underline hover:text-[#638038]">
                                {inq.email}
                              </a>
                            </div>
                            <div className="text-gray-500 text-xs flex items-center gap-1.5">
                              <Phone className="size-3 text-gray-400" />
                              <a href={`tel:${inq.phone}`} className="hover:underline hover:text-[#638038]">
                                {inq.phone}
                              </a>
                            </div>
                          </div>
                        </td>

                        {/* Message content */}
                        <td className="py-4 px-6 max-w-[350px]">
                          <div className="flex flex-col gap-1.5 items-start">
                            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                              {isExpanded ? inq.message : truncatedMessage}
                            </p>
                            {inq.message.length > 80 && (
                              <button
                                onClick={() => toggleExpand(inq.id)}
                                className="text-xs text-[#638038] font-bold hover:underline inline-flex items-center gap-0.5 cursor-pointer mt-1"
                              >
                                {isExpanded ? (
                                  <>
                                    <span>Read Less</span>
                                    <ChevronDown className="size-3" />
                                  </>
                                ) : (
                                  <>
                                    <span>Read More</span>
                                    <ChevronRight className="size-3" />
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        </td>

                        {/* Status update picker */}
                        <td className="py-4 px-6">
                          <div className="relative inline-block w-40">
                            <select
                              value={inq.status}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                              className={`w-full border rounded-lg px-2.5 py-1.5 text-xs font-bold focus:outline-hidden cursor-pointer transition-all ${
                                statusColorMap[inq.status]
                              }`}
                            >
                              <option value="NEW" className="bg-white text-red-700">🔴 NEW</option>
                              <option value="CONTACTED" className="bg-white text-amber-700">🟡 CONTACTED</option>
                              <option value="CLOSED" className="bg-white text-emerald-700">🟢 CLOSED</option>
                            </select>
                          </div>
                        </td>

                        {/* Creation date */}
                        <td className="py-4 px-6 text-gray-500 text-xs max-w-[150px]">
                          <div className="flex flex-col gap-1.5">
                            <span className="font-medium text-gray-700 flex items-center gap-1.5">
                              <Calendar className="size-3.5 text-gray-400" />
                              <span>{new Date(inq.createdAt).toLocaleDateString("en-IN")}</span>
                            </span>
                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                              <Clock className="size-3 text-gray-300" />
                              <span>{new Date(inq.createdAt).toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' })}</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>
      
      {/* Footer copyright */}
      <footer className="py-6 border-t border-gray-200 text-center text-xs text-gray-400 bg-white select-none">
        &copy; {new Date().getFullYear()} Dhanvanti Valley Admin Panel. All Rights Reserved.
      </footer>

    </div>
  );
}
