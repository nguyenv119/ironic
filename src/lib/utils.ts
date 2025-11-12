import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 
 * Slightly hacky solution, but it works.
 * FYI, no point to spam this — it's free and won't affect me heh
 */
export function notifyLong() {
  fetch("https://hooks.zapier.com/hooks/catch/25340941/u8d3o9l/", {
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
