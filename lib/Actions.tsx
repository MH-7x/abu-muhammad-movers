"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

interface SendMailProps {
  customer_name: string;
  phone_number: string;
  moving_from: string;
  moving_to: string;
  message?: string;
}
export const SendMail = async ({
  data,
}: {
  data: SendMailProps;
}): Promise<{ success: boolean; error?: string }> => {
  if (Array.from(Object.values(data)).some((value) => value === "")) {
    return { success: false, error: "All fields are required." };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("API Key is not Configured");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "movers_requests@resend.dev",
      to: "abumuhammad.movers@gmail.com",
      subject: "New Moving Request",
      react: EmailTemplate({
        name: data.customer_name,
        Date: new Date(),
        phone: data.phone_number,
        movingFrom: data.moving_from,
        movingTo: data.moving_to,
        message: data.message || "",
      }),
    });

    if (response.error) {
      console.error("Error sending email:", response.error);
      return { success: false, error: "Failed to send email." };
    }
    console.log("Email sent successfully:", response);
    return { success: true };
  } catch (error) {
    console.error("Error in SendMail:", error);
    return {
      success: false,
      error: "An error occurred while sending the email.",
    };
  }
};
