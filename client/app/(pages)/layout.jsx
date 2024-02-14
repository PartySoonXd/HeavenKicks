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
