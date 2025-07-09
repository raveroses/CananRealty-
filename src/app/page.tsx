import Home from "./home/page";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function page() {
  return (
    <div className={`${poppins.className}`}>
      <Home />
    </div>
  );
}
