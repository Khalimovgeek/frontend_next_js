import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Certified True Copy | Dashboard",
  description: "Manage Your CTC Orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {/* We set the global primary color token here */}
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4A1F36", // Brand Plum Color
                borderRadius: 6,         // Matches your rounded UI
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}