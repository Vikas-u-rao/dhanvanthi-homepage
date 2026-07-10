import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientInquirySchema, type ClientInquiryInput } from "@/lib/validation";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import { ChevronDown, CheckCircle2, RefreshCw } from "lucide-react";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const turnstileRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ClientInquiryInput>({
    resolver: zodResolver(clientInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      project: "",
      message: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (data: ClientInquiryInput) => {
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
        reset();
      } else {
        toast.error(result.message || "Failed to send enquiry. Please try again.", {
          id: toastId,
        });
        // Reset turnstile token to force re-verification
        setValue("turnstileToken", "");
        turnstileRef.current?.reset();
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection and try again.", {
        id: toastId,
      });
      setValue("turnstileToken", "");
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Standard Cloudflare testing sitekey (always passes)
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

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
        <div className="w-full lg:w-[60%] bg-white border border-[#638038]/50 rounded-[10px] p-6 md:p-10 shadow-lg min-h-[450px] flex flex-col justify-center">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-6 select-none animate-in fade-in zoom-in-95 duration-500">
              <CheckCircle2 className="size-16 text-[#638038]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-chopin text-[#638038] text-[24px] font-semibold">
                  Submission Successful
                </h3>
                <p className="font-urbanist text-[#666] text-[16px] max-w-md">
                  Thank you for your interest in Dhanvanti Valley. Our sales experts have received your request and will get in touch with you shortly via phone or email.
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 bg-[#638038] hover:bg-[#536c2e] text-white hover:shadow-md active:scale-95 transition-all duration-300 font-urbanist font-medium text-[14px] px-6 py-3 rounded-[6px] cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
              
              {/* Grid for Name and Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-chopin text-[#638038] text-[16px] font-semibold">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter Full Name"
                    {...register("name")}
                    className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 font-inter">{errors.name.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="project" className="font-chopin text-[#638038] text-[16px] font-semibold">
                    Project Phase (Optional)
                  </label>
                  <div className="relative w-full">
                    <select 
                      id="project"
                      {...register("project")}
                      className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 pr-12 rounded-[6px] font-chopin text-[#394d23] text-[14px] w-full transition-all appearance-none cursor-pointer"
                    >
                      <option value="">General Inquiry / Any Project</option>
                      <option value="The Meadows">The Meadows (Villas)</option>
                      <option value="The Orchards">The Orchards (Estates)</option>
                      <option value="The Ridge">The Ridge (Apartments)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#638038]">
                      <ChevronDown className="size-4" />
                    </div>
                  </div>
                  {errors.project && (
                    <span className="text-red-500 text-xs mt-1 font-inter">{errors.project.message}</span>
                  )}
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
                    placeholder="Enter your Email"
                    {...register("email")}
                    className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 font-inter">{errors.email.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-urbanist text-[#638038] text-[16px] font-semibold">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="Enter Phone Number"
                    {...register("phone")}
                    className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1 font-inter">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="font-chopin text-[#638038] text-[16px] font-semibold">
                  Message
                </label>
                <textarea 
                  id="message"
                  placeholder="Enter your Message here (minimum 10 characters)..."
                  rows={4}
                  {...register("message")}
                  className="bg-[rgba(99,128,56,0.12)] border border-transparent focus:border-[#638038] outline-hidden px-5 py-4 rounded-[6px] font-chopin text-[#394d23] placeholder-[#638038] text-[14px] w-full transition-all resize-none"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 font-inter">{errors.message.message}</span>
                )}
              </div>

              {/* Turnstile Container */}
              <div className="flex flex-col gap-2">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={turnstileSiteKey}
                  onSuccess={(token) => setValue("turnstileToken", token, { shouldValidate: true })}
                  onError={() => {
                    toast.error("Spam protection widget error. Please reload the page.");
                    setValue("turnstileToken", "");
                  }}
                  onExpire={() => setValue("turnstileToken", "")}
                />
                {errors.turnstileToken && (
                  <span className="text-red-500 text-xs font-inter">{errors.turnstileToken.message}</span>
                )}
              </div>

              {/* Submit Button Container */}
              <div className="flex justify-end items-center gap-6 mt-2 w-full">
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
          )}
        </div>

      </div>
    </section>
  );
}
