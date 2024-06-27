import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import Loader from "./Loader.tsx";

function ErrorDemo() {
  return(
    <p style={{ color: "red", textAlign: "center", fontSize: 20, 
      lineHeight: 2, paddingTop: 65, paddingLeft: 15, paddingRight: 15, }}>
      Something went wrong. Please try starting it again!
    </p>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<ErrorDemo />}>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
