import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getZapierWebhookUrl() {
  const zapierWebhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
  if (!zapierWebhookUrl) {
    throw new Error("NEXT_PUBLIC_ZAPIER_WEBHOOK_URL is not set");
  }
  return zapierWebhookUrl;
}

export function notifyLong() {
  fetch(getZapierWebhookUrl(), {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page_name: "ironic",
    }),
  })
    .then(() => {
      console.log(`Sent message to Long`);
    })
    .catch((error) => console.error(`Error sending message to Long: ${error}`));
}
