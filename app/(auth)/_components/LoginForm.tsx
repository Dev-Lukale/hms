"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import { signin } from "../actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import SubmitButton from "@/components/SubmitButton";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = async (values: z.infer<typeof formSchema>) => {
    const loginError = await signin(values);

    if (loginError) {
      const message = loginError.loginError.message;
      toast.error(message, { duration: 4000 });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formSubmit)}
        className="p-0 m-0 space-y-8"
      >
        <div className="mb-10">
          <h3 className="text-3xl font-extrabold text-secondary-foreground/80">
            Sign in
          </h3>
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="email"
                    placeholder="You@example.com"
                    className="w-full text-sm  px-4 py-3 rounded-md outline-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Enter password"
                    type="password"
                    className="w-full text-sm  px-4 py-3 rounded-md outline-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-4 text-right">
            <Link
              href="/"
              className="text-primary text-sm font-semibold hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-primary-foreground bg-primary hover:bg-primary/80 focus:outline-none"
          disabled={form.formState.isSubmitting}
        >
         
          {form.formState.isSubmitting ? "Submitting..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
