import Search from "@/components/Search";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Provider from "./Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB || Movies Library",
  description: "Information About Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Header/>
        <Navbar/>
        <Search/>
        {children}
        </Provider>   
        </body>
    </html>
  );
}
