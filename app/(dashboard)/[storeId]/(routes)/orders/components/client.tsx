"use client";


import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrdersClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrdersClientProps> = ({ data }) => {

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          discrption="Manage orders for your store"
          title={`Orders(${data.length})`}
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
