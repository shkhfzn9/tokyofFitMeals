import { Outfit, DM_Sans } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Tokyo Fit Meals — Nutrition-Backed Meal Subscriptions",
  description:
    "Premium Japanese-inspired healthy meal bowls delivered fresh daily. Science-backed nutrition plans for weight loss, heart health, and muscle gain. Subscribe for ₹180/meal.",
  keywords:
    "healthy meals, meal subscription, fitness food, weight loss meals, protein bowls, Japanese food, Tokyo meals, diet plan",
  openGraph: {
    title: "Tokyo Fit Meals — Eat Clean. Live Strong.",
    description:
      "Fresh, chef-crafted meal bowls designed by nutritionists. Subscription plans starting ₹180/bowl.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
