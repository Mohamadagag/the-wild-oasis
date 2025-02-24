import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function MobileNavigation() {
  const session = await auth();

  return (
    <nav className="relative md:hidden py-5">
      <div className="flex justify-center">
        <ul className="flex gap-10 items-center">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <img
                  alt={session.user.name}
                  src={session.user.image}
                  className="h-8 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
