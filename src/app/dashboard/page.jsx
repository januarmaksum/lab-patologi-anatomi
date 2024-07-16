import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("./Dashboard"));

export const metadata = {
  title: "Dashboard - RSABHK",
};

export default function DashboardPage() {
  return <Dashboard />;
}
