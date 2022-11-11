import "../styles/globals.css"

import { Header } from "./componentsApp/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
