import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/class"} >Class</Link>
      <Link href={"/blogs"} >Blogs</Link>
      <Link href={"/blogdetail"} >Blog Details</Link>
      <Link href={"/sign-in"} >Sign In</Link>
      <Link href={"/sign-up"} >Sign Up</Link>
      <UserButton  />
    </div>
  );
}