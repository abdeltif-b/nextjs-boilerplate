"use server";
import { hotelSchema } from "@/lib/types";
import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";

export const createHotel = async (newHotel: unknown) => {
  // validate input
  const validation = hotelSchema.safeParse(newHotel);

  if (!validation.success) {
    return { error: getErrorMessage(validation.error) };
  }

  // save input
  try {
    const response = await fetch("http://localhost:8080/hotels", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(validation.data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(errorResponse);
      // TODO add error validation from server
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  setTimeout(() => console.log("heeh"), 3000);
  revalidateTag("readHotels");
};
