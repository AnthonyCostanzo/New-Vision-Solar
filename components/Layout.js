import Head from "next/head";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Layout = ({ title, description, children, background }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            description
              ? description
              : `New Energy Solutions Inc. is developing New Graphene/h-BN Solar technology/(product). Dr. Zuckerman, the Founder, has created a solar technology that
will change the Solar Industry over the next 5 years introduction of Graphene/h-BN Solar with 300% More Energy and significantly lower cost than Silicon Solar.`
          }
        ></meta>

        <title>{title ? title : "New Energy Solutions Inc"}</title>
      </Head>

      <body>
        {" "}
        <div className={`${background ? background : " bg-gray-400"}`}>
          <MobileNav />
          <motion.d variant={stagger}>
            <motion.div
              variants={variants} // Pass the variant object into Framer Motion
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter exit="exit" //
              transition={{ type: "linear" }}
            >
              <div className="">{children}</div>
              <Footer />
            </motion.div>
          </motion.d>
        </div>
      </body>
    </html>
  );
};

export default Layout;
