import { Card } from "@/components/ui/card";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar />

      <Card className="p-10 flex-grow rounded-none bg-background">{children}</Card>
    </Card>
  );
}
