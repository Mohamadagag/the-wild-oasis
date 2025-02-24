import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import MobileNavigation from "./MobileNavigation";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto">
        <Logo />
        <MobileNavigation />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
