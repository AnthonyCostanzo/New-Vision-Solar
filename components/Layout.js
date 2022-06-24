import Head from "next/head";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

const Layout = ({ title, description, children }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            description
              ? description
              : `New Vision Solar Inc. is developing New Graphene/h-BN Solar technology/(product). Dr. Zuckerman, the Founder, has created a solar technology that
will change the Solar Industry over the next 5 years introduction of Graphene/h-BN Solar with 300% More Energy and significantly lower cost than Silicon Solar.`
          }
        ></meta>

        <title>{title ? title : "New Vision Solar"}</title>
      </Head>

      <body className="bg-gradient-to-br from-[#14557B] to-[#65a79f]">
        {" "}
        <MobileNav />
        <div className="min-h-max h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
