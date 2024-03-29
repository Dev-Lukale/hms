"use server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient(cookieStore: ReturnType<typeof cookies>) {
  return await createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}
