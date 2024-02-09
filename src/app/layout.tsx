import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "JP Chess",
  description: "A Chess blog by João Ferreira",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  	return (
		<html lang="en">
      		<body className="bg-black text-white">
				<Header />
        		<main className="pt-header">
          			{children}
        		</main>
        		<Footer />
      		</body>
    	</html>
  	);
}
