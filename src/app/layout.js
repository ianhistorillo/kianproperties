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
