import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import SignOut from "./components/sign-out";

export default async function Home() {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data?.session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          Welcome, <strong>{user?.email ?? "Guest"}</strong>!
        </div>

        <div className="flex gap-2 text-sm mt-1">
          {user ? <SignOut /> : <LinkButton href="/auth/sign-in">Login</LinkButton>}
        </div>
      </div>
    </main>
  );
}

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-black hover:text-black/30 transition duration-100 ease-in-out"
    >
      {children}
    </Link>
  );
};
