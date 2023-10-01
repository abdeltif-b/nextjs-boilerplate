"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ModeToggle } from "@/components/base/mode-toggle";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <Image src="/next.svg" width={70} height={25} alt="Logo" className="block dark:hidden" />
      <Image src="/vercel.svg" width={70} height={25} alt="Logo" className="hidden dark:block" />
    </>
  );
};
const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/go-demo" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Go demo</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export const NavMenu = () => {
  return (
    <>
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/go-demo" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Go demo</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
      {/* <AuthButton /> */}
    </>
  );
};
