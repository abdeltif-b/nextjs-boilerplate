import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function CreateHotelButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Creating..." : "Create"}
    </Button>
  );
}
