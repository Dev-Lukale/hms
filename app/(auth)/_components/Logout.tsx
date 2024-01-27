import { Button } from "@/components/ui/button";

import React from "react";
import { signout } from "../actions";

type Props = {};

const Logout = async (props: Props) => {
  return (
    <form action={signout}>
      <Button type="submit">SignOut</Button>
    </form>
  );
};

export default Logout;
