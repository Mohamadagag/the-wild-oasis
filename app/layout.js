import Header from "./_components/Header";
import { ReservtionProvider } from "./_components/ReservationContext";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "Luxurious cabins located in the heart of the italian Dolomites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-5 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservtionProvider>{children}</ReservtionProvider>
            {/* {children} */}
          </main>
        </div>
      </body>
    </html>
  );
}
