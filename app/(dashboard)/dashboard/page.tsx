import { createClient } from "@/lib/supabase/server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginProps = {};

const Dashboard = async (props: LoginProps) => {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
