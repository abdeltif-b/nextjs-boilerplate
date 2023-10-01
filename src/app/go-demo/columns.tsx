"use client";

import { deleteHotel } from "@/app/go-demo/actions/delete-hotel";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Hotel = {
  id: number;
  name: string;
  country: string;
};

const handleDeleteHotel = async (item: any) => {
  await deleteHotel(item.id);
};

export const columns: ColumnDef<Hotel>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Country
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item: any = row.original;

      return (
        <Button variant="secondary" className="h-8 w-8 p-0" onClick={() => handleDeleteHotel(item)}>
          <TrashIcon />
        </Button>
      );
    },
  },
];
