import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <Announcement />
      <Header />

      <main>{children}</main>

      <Footer />
    </html>
  );
};
export default Layout;
