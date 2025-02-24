"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

// Redux
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";

// Fetch thunk
import { fetchSellingData } from "@/app/redux/actions/thunks/loadDataThunk";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title> Kian Properties </title>
          <meta
            name="description"
            content="Your Gateway to Dream Homes and Smart Investments! Whether you're looking to buy, sell, or invest, we offer a seamless experience tailored just for you."
          />
          <meta property="og:title" content="Kian Properties" />
          <meta
            property="og:description"
            content="Your Gateway to Dream Homes and Smart Investments! Whether you're looking to buy, sell, or invest, we offer a seamless experience tailored just for you."
          />
          <meta
            property="og:image"
            content={`https://mediumslateblue-otter-668926.hostingersite.com/wp-content/uploads/2025/02/footer-bg-scaled.jpeg`}
          />
          <link
            rel="icon"
            href="https://mediumslateblue-otter-668926.hostingersite.com/wp-content/uploads/2025/01/laugh-room-1.png"
            type="image/svg+xml"
          />
        </head>
      </html>
      <RootWithData>{children}</RootWithData>
    </Provider>
  );
}

function RootWithData({ children }) {
  const dispatch = useDispatch();
  // Load the data
  useEffect(() => {
    dispatch(fetchSellingData());
  }, [dispatch]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
