"use server";

import { getErrorMessage } from "@/lib/utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const readHotels = async () => {
  try {
    const res = await fetch("http://localhost:8080/hotels", { next: { tags: ["readHotels"] }, cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    await sleep(5000);

    return res.json();
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
