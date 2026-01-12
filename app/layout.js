import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/Emailinput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Blustore",
  description: "A wonderful store for programmers and productivity!",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={"/"}>
                  <h1>Blustore</h1>
                </Link>

                <h5 className="mid-text">
                  - An awesome store for awesome people -
                </h5>

                <Cart />
              </div>
            </header>

            <main>{children}</main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peak at new additions to the store, special
                  offers, and so much more.
                </h5>
                <div className="sign-up">
                  <EmailInput />
                </div>
              </div>

              <div className="links-container">
                <div>
                  <h3>BluPhan</h3>
                  <Link
                    target="_blank"
                    href={"https://bluphan-portfolio.netlify.app/"}
                  >
                    BluPhan Hub
                  </Link>
                  <Link target="_blank" href={"https://github.com/BluPhan"}>
                    Roadmap
                  </Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/cart"}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={"/contact"}>Contact</Link>
                  <Link href={"/faq"}>FAQs</Link>
                </div>
              </div>

              <div className="socials"></div>
              <p>
                ©
                <a
                  href="https://bluphan-portfolio.netlify.app/"
                  target="_blank"
                >
                  BluPhan
                </a>
                2026
                <br />
                Built with NextJS &
                <a target="_blank" href="https://www.fantacss.smoljames.com">
                  FantaCSS
                </a>
                🔥
              </p>
              <div className="social-links">
                <Link href={"https://github.com/BluPhan"} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61575851100859"
                  }
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
