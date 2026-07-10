import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Dhanvanti Valley",
  description: "Interested in this project? Fill out the form, and our real estate experts will get back to you with more details.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
