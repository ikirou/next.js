import { HeaderNavigation, NavbarTop } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Phone",
  description: "Generated by IKI",
};
export default function AddProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarTop />
        <HeaderNavigation />
        {children}
      </body>
    </html>
  );
}
