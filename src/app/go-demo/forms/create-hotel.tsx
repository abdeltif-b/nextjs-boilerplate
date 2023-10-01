"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createHotel } from "@/app/go-demo/actions/create-hotel";
import { useRef } from "react";
import CreateHotelButton from "@/app/go-demo/forms/create-hotel-button";
import { hotelSchema } from "@/lib/types";
import toast from "react-hot-toast";

export default function CreateHotelForm() {
  const ref = useRef<HTMLFormElement>(null);

  const formAction = async (FormData: FormData) => {
    // form validation

    const validation = hotelSchema.safeParse({
      name: FormData.get("name"),
      country: FormData.get("country"),
    });

    console.log("validation--", validation);
    if (!validation.success) {
      // throw new Error("Failed to fetch data");
      console.log(validation);
      toast.error("failed to parse data", { duration: Infinity });
      return;
    }

    // send to server
    const response = await createHotel(validation.data);

    if (response?.error) {
      toast.error(response.error, { duration: Infinity });
      return;
    }

    // reset the form
    ref.current?.reset();
  };

  return (
    <Card>
      <form ref={ref} action={(FormData) => formAction(FormData)}>
        <CardHeader>
          <CardTitle>Create a new hotel</CardTitle>
          <CardDescription>Please input the name and the country of the hotel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" placeholder="Name of the hotel" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Input name="country" placeholder="Country of the hotel" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <CreateHotelButton />
        </CardFooter>
      </form>
    </Card>
  );
}
