import { createClient } from "@/lib/supabase/server";
import Logout from "../../(auth)/_components/Logout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginProps = {};

const Login = async (props: LoginProps) => {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div>
      <p className="text-primary">Hello {data.user.email}</p>
      <Logout />
    </div>
  );
};

export default Login;
