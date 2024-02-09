import "@/app/styles/globals.scss";

export const metadata = {
  title: "HeavenKicks",
  description: "HeavenKicks E-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Layout text</h1>
        {children}
      </body>
    </html>
  );
}
