"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
type ButtonProps = {
  btnText: string;
  className?: string;
};

const SubmitButton = ({ btnText, className }: ButtonProps) => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button className={`${className} `}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
