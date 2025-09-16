import Link from "next/link";

const PolicyLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
function Footer() {
  return (
    <footer id="app-footer">
      <div className="layout-2-footer-wrap">
        <div className="layout-2-footer-col-1">
          <p>
            &copy; {new Date().getFullYear()} Admin Dashboard. All rights
            reserved.
          </p>
        </div>
        <div className="layout-2-footer-col-2">
          {PolicyLinks.map((link, idx) => (
            <Link key={`policy-link-${idx}`} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
