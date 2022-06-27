import "../styles/globals.css";
import { useState, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { SnackbarProvider } from "notistack";
export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <NextNProgress />
          <Component {...pageProps} />
        </SnackbarProvider>
      </>
    );
  }
}
