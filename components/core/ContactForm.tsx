"use client";
import React from "react";
import { Button } from "../ui/button";
import { Send, X } from "lucide-react";
import { SendMail } from "@/lib/Actions";
import { toast } from "sonner";
import { CheckCheckIcon } from "lucide-react";
const ContactForm = ({ forHome = false }: { forHome?: boolean }) => {
  const handleSubmit = async () => {
    const form = document.querySelector("form");
    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await SendMail({
        data: data as {
          customer_name: string;
          phone_number: string;
          moving_from: string;
          moving_to: string;
          message?: string;
        },
      });
      if (response.success) {
        form.reset();
        toast("Your request has been sent successfully!", {
          description: (
            <span className="text-stone-600">We will contact you shortly.</span>
          ),
          style: {
            backgroundColor: "#ECD920",
            color: "#1c1716",
          },
          icon: <CheckCheckIcon />,
        });
      } else {
        toast.error(response.error || "Failed to send your request.", {
          icon: <X />,
        });
      }
    }
  };
  return (
    <div
      className={`bg-gradient-to-r from-primary to-[#1c1716] min-h-96 rounded-4xl md:p-8 p-5 ${
        forHome ? "md:ml-16" : "w-full max-w-xl xl:w-5/12"
      }`}
    >
      <h3 className="text-2xl text-[#ECD920] text-center">Get A Free Quote</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="mt-5 text-primary-foreground flex flex-col gap-y-4"
      >
        <input
          name="customer_name"
          placeholder="Your Name.."
          type="text"
          required
          aria-label="Customer Name"
          aria-required="true"
          className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920]"
        />
        <input
          name="phone_number"
          placeholder="Phone Number.."
          aria-label="Phone Number"
          aria-required="true"
          type="number"
          required
          className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920]"
        />
        <div className="grid grid-cols-2 gap-x-4">
          <select
            className="text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] bg-gray-200"
            name="moving_from"
            required
            aria-label="Moving From"
          >
            <option defaultChecked value={""}>
              Moving From?
            </option>
            <option value="Dubai">Dubai</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Ajman">Ajman</option>
          </select>
          <select
            className="text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] bg-gray-200"
            name="moving_to"
            required
            aria-label="Moving To"
          >
            <option defaultChecked value={""}>
              Moving From?
            </option>
            <option value="Dubai">Dubai</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Ajman">Ajman</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="other details like date, items to move, etc.."
          aria-label="Message"
          className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] min-h-32"
        ></textarea>
        <Button
          type="submit"
          className="w-full bg-[#ECD920] text-primary hover:bg-[#ecd720d5]"
          size={"lg"}
        >
          SEND NOW <Send />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
