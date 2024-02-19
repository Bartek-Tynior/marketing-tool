import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type NavbarLinkProps = {
  href: URL | string;
  children: String;
  target: HTMLAttributeAnchorTarget | undefined;
};

export default function NavbarLink({ href, children, target }: NavbarLinkProps) {
    return (
        <Link
            href={href}
            target={target}
        >
            {children}
        </Link>
    );
}
