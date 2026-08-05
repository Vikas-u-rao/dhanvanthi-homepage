"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientInquirySchema, type ClientInquiryInput } from "@/lib/validation";
import { toast } from "sonner";
import { CheckCircle2, RefreshCw } from "lucide-react";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClientInquiryInput>({
    resolver: zodResolver(clientInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ClientInquiryInput) => {
    if (!agreed) {
      toast.error("Please agree to be contacted to proceed.");
      return;
    }
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your enquiry...");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you! Your enquiry has been sent successfully.", {
          id: toastId,
          description: "Our experts will contact you shortly.",
          duration: 5000,
        });
        setIsSuccess(true);
        setAgreed(false);
        reset();
      } else {
        toast.error(result.message || "Failed to send enquiry. Please try again.", {
          id: toastId,
        });
      }
    } catch {
      toast.error("An error occurred. Please check your connection and try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#f2f6df] py-12 md:py-20 px-4 md:px-8 relative flex flex-col items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 w-full items-stretch">

        {/* Left Side: Text Description */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-5 lg:pr-8">
          <h2 className="font-bavicka text-[#638038] text-[32px] md:text-[38px] leading-tight font-medium">
            Enquire About <br />
            Dhanvanti Valley
          </h2>
          <p className="font-urbanist text-[#999] text-[15px] md:text-[17px] leading-relaxed font-medium">
            Interested in this project? Fill out the form, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full lg:w-[60%] bg-white border border-[#638038]/50 rounded-[10px] p-6 md:p-10 shadow-lg flex flex-col">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-6 animate-in fade-in zoom-in-95 duration-500">
              <CheckCircle2 className="size-16 text-[#638038]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-chopin text-[#638038] text-[24px] font-semibold">
                  Submission Successful
                </h3>
                <p className="font-urbanist text-[#666] text-[16px] max-w-md">
                  Thank you for your interest in Dhanvanti Valley. Our sales experts have received your request and will get in touch with you shortly via phone or email.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row items-center mt-4">
                <a
                  href="/brochure.pdf"
                  download="Dhanvanti_Valley_Brochure.pdf"
                  className="bg-[#ca9731] hover:bg-[#b08125] text-white hover:shadow-md active:scale-95 transition-all duration-300 font-urbanist font-medium text-[14px] px-6 py-3 rounded-[6px] cursor-pointer flex items-center gap-2"
                >
                  Download E-Brochure (PDF)
                </a>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#638038] hover:bg-[#536c2e] text-white hover:shadow-md active:scale-95 transition-all duration-300 font-urbanist font-medium text-[14px] px-6 py-3 rounded-[6px] cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">

                {/* Row 1: First Name | Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="font-chopin text-[#638038] text-[14px] font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter First Name"
                      {...register("firstName")}
                      className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-4 py-3.5 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs mt-1 font-inter">{errors.firstName.message}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="font-chopin text-[#638038] text-[14px] font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter Last Name"
                      {...register("lastName")}
                      className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-4 py-3.5 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs mt-1 font-inter">{errors.lastName.message}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Email | Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-chopin text-[#638038] text-[14px] font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      {...register("email")}
                      className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-4 py-3.5 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 font-inter">{errors.email.message}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-chopin text-[#638038] text-[14px] font-semibold">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter Phone Number"
                      {...register("phone")}
                      className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-4 py-3.5 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1 font-inter">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: Message (full width) */}
                <div className="flex flex-col gap-1.5 w-full">
                  <label htmlFor="message" className="font-chopin text-[#638038] text-[14px] font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your Message here (minimum 10 characters)..."
                    rows={4}
                    {...register("message")}
                    className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-4 py-3.5 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 font-inter">{errors.message.message}</span>
                  )}
                </div>

                {/* Row 4: Checkbox (left) + Submit (right) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2 w-full">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="accent-[#638038] size-4 cursor-pointer"
                    />
                    <span className="font-urbanist text-[#666] text-[13px] font-medium leading-snug">
                      I agree to be contacted regarding Dhanvanti Valley
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ca9731] hover:bg-[#b08125] text-white hover:shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 font-urbanist font-medium text-[14px] px-8 py-3.5 rounded-[6px] whitespace-nowrap cursor-pointer w-full sm:w-auto text-center flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Your Message"
                    )}
                  </button>
                </div>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
