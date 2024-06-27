import "@/app/styles/main.scss";

import UserProvider from "../components/UserProvider/UserProvider";
import { Suspense } from "react";

export const metadata = {
  title: "HeavenKicks",
  description: "HeavenKicks E-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Suspense>
          <UserProvider>
            {children}
          </UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
