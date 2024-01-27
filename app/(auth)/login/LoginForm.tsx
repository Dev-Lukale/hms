import { Button } from "@/components/ui/button";
import { login } from "../actions";

const LoginForm = ({ searchParams }: { searchParams: { message: string } }) => {

  console.log(searchParams)
  return (
    <form action={login} className="p-0 m-0 space-y-8">
      <div className="space-y-4">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
      </div>
      {/* {error && <FormMessage></FormMessage>} */}

      <Button className="w-full mt-8" type="submit">
        Submit
      </Button>
      {searchParams?.message && (
        <p className="mt-4 p-4 text-primary text-center">
          {searchParams.message}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
