import "@/app/styles/globals.scss";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import UserProvider from "../components/UserProvider/UserProvider";

export const metadata = {
  title: "HeavenKicks",
  description: "HeavenKicks E-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <UserProvider>
          <div className="container">
            <Header/>
            {children}
          </div>
          <Newsletter/>
        </UserProvider>
      </body>
    </html>
  );
}
