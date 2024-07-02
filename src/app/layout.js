import "../assets/css/index.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Dark Taste",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextTopLoader color="#626138" />

        {children}

        {process.env.GOOGLE_ANALYTICS_ID ? (
          <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS_ID} />
        ) : null}
      </body>
    </html>
  );
}