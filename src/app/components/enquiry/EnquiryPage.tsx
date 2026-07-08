import React, { useState } from "react";
import { toast } from "sonner";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agree: checked }));
    if (errors.agree) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.agree;
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const toastId = toast.loading("Sending your enquiry...");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            subject: "New Property Enquiry - Dhanvanti Valley"
          })
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Thank you! Your enquiry has been sent successfully.", {
            id: toastId,
            description: "Our experts will contact you shortly.",
            duration: 5000
          });
          
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            agree: false
          });
        } else {
          toast.error(result.message || "Failed to send enquiry. Please try again.", { id: toastId });
        }
      } catch (error) {
        toast.error("An error occurred. Please check your connection and try again.", { id: toastId });
      }
    } else {
      toast.error("Please resolve the errors in the form before submitting.");
    }
  };

  return (
    <section className="w-full bg-[#f2f6df] py-12 md:py-20 px-4 md:px-8 relative flex flex-col items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-stretch">
        
        {/* Left Side: Text Description */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-6 lg:pr-8 select-none">
          <h2 className="font-bavicka text-[#638038] text-[36px] md:text-[42px] leading-tight font-medium">
            Enquire About <br />
            Dhanvanti Valley
          </h2>
          <p className="font-urbanist text-[#999] text-[16px] md:text-[18px] leading-relaxed font-medium">
            Interested in this project? Fill out the form, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        {/* Right Side: Interactive Form Container */}
        <div className="w-full lg:w-[60%] bg-white border border-[#638038]/50 rounded-[10px] p-6 md:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            
            {/* Grid for Name inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-chopin text-[#638038] text-[16px] font-semibold">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1 font-inter">{errors.firstName}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-chopin text-[#638038] text-[16px] font-semibold">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1 font-inter">{errors.lastName}</span>}
              </div>
            </div>

            {/* Grid for Contact inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-chopin text-[#638038] text-[16px] font-semibold">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 font-inter">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-urbanist text-[#638038] text-[16px] font-semibold">
                  Phone
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1 font-inter">{errors.phone}</span>}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="font-chopin text-[#638038] text-[16px] font-semibold">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message here.."
                rows={4}
                className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all resize-none"
              />
              {errors.message && <span className="text-red-500 text-xs mt-1 font-inter">{errors.message}</span>}
            </div>

            {/* Checkbox and Submit Button Container */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-4 w-full">
              <div className="flex gap-3 items-center">
                <input 
                  type="checkbox" 
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={(e) => handleCheckboxChange(e.target.checked)}
                  className="size-[20px] cursor-pointer accent-[#638038] border border-gray-300 rounded-sm"
                />
                <label htmlFor="agree" className="font-urbanist text-[#999] text-[15px] cursor-pointer select-none">
                  I agree with <span className="underline cursor-pointer text-[#638038] font-semibold">Terms of Use</span> and <span className="underline cursor-pointer text-[#638038] font-semibold">Privacy Policy</span>
                </label>
              </div>

              <button 
                type="submit"
                className="bg-[#ca9731] hover:bg-[#b08125] text-white hover:shadow-md active:scale-95 transition-all duration-300 font-urbanist font-medium text-[14px] px-8 py-3.5 rounded-[6px] whitespace-nowrap cursor-pointer w-full sm:w-auto text-center"
              >
                Send Your Message
              </button>
            </div>
            {errors.agree && <span className="text-red-500 text-xs font-inter">{errors.agree}</span>}

          </form>
        </div>

      </div>
    </section>
  );
}
