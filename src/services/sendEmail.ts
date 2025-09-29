import { baseService } from "./base";

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(
  payload: EmailPayload,
): Promise<{ success: boolean }> {
  return baseService<EmailPayload>({
    payload,
    method: "POST",
    endPoint: "/email/send",
    errorMessage: "Oops! We had a little trouble getting a response from the server. How about trying us on WhatsApp? We’re ready to help you there!",
  });
}