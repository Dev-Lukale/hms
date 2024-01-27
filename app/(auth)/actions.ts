"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/actions";

export async function signin(values: { email: string; password: string }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };

  const { error } = await supabase.auth.signInWithPassword(values);

  if (error ) {
    return { loginError: error };
  }

  //   revalidatePath("/dashboard");
  return redirect("/dashboard");
}

export async function signout(formData: FormData) {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);
  const { error } = await supabase.auth.signOut();

  if (error) {
    return redirect(
      "/dashboard?message=Error logging you out,please try again"
    );
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}

// export async function signup(formData: FormData) {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     return redirect("/login?message=Could not authenticate user");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }
