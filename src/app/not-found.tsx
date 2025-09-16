import CurrentLayout from "@/components/layout/currentLayout";
import "@/styles/sass/main.scss";
import { Metadata } from "next";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
const Btns = [
  {
    label: "Go to Homepage",
    href: "/",
    icon: <FaHome />,
    className: "bs-btn bs-btn-primary",
  },
  {
    label: "Contact Support",
    href: "/contact-us",
    icon: <MdSupportAgent />,
    className: "bs-btn bs-btn-gray",
  },
];
export const metadata: Metadata = {
  title:
    "404 – Page Not Found | efuzone – The Best Web Hosting Solutions in Pakistan",
  description:
    "Sorry, we couldn’t find the page you were looking for. Return home or contact support.",
  robots: {
    index: false,
    follow: false,
  },
};
function PageNotFound() {
  return (
    <CurrentLayout>
      <div className="page-not-found-container newPage-spc">
        <div className="main-container">
          <div className="page-not-found-content">
            <h1>404 – Page Not Found</h1>
            <p> The page you’re looking for doesn’t exist or has been moved.</p>
            <div className="page-not-found-btn-wrap">
              {Btns.map((link, idx) => (
                <Link
                  href={link.href}
                  className={link.className}
                  key={`page-not-found-link-${idx}`}
                >
                  {link.icon} {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CurrentLayout>
  );
}

export default PageNotFound;
