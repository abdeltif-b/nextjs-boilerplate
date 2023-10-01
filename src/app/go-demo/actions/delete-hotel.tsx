"use server";
import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";

export const deleteHotel = async (hotelId: Number) => {
  try {
    const response = await fetch(`http://localhost:8080/hotels/${hotelId}`, {
      method: "DELETE",
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  revalidateTag("readHotels");
};
