import { options } from "@/app/api/auth/[...nextauth]/options";
import { readHotels } from "@/app/go-demo/actions/read-hotels";
import DataTableWithData from "@/app/go-demo/datatable";
import CreateHotelForm from "@/app/go-demo/forms/create-hotel";
import { getServerSession } from "next-auth";

export default async function Page() {
  const data = await readHotels();
  const session = await getServerSession(options);

  return (
    <div className="container mx-auto py-10">
      {session?.user?.name}
      <div className="grid grid-cols-2 gap-4">
        <DataTableWithData />
        <CreateHotelForm />
      </div>
    </div>
  );
}
