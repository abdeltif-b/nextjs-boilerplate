import { readHotels } from "@/app/go-demo/actions/read-hotels";
import { columns } from "@/app/go-demo/columns";
import { DataTable } from "@/app/go-demo/data-table";
import ErrorFallback from "@/components/base/error-boundary";
// import ErrorBoundary from "@/components/base/error-boundary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function DataTableWithData() {
  const data = await readHotels();

  return (
    <Card>
      <CardHeader>
        <CardTitle>All hotels</CardTitle>
      </CardHeader>
      <CardContent>
        <ErrorBoundary
          // fallback={<div>❌ Something went wrong</div>}
          FallbackComponent={ErrorFallback}
          // onReset={(details) => {
          //   console.log("details", details);
          //   // Reset the state of your app so the error doesn't happen again
          // }}
          // onError={(error) => console.log("error", error)}
        >
          <Suspense fallback={<p>Loading data...</p>}>
            <DataTable columns={columns} data={data.result} />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
}
