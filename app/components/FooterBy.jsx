import React from "react";
import Link from "next/link";
import { FaFacebook, FaTiktok } from "react-icons/fa6";

const FooterBy = () => {
  return (
    <>
      <footer className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted">ybon.dev</p>
              <div className="social-media">
                <Link
                  href={"https://www.facebook.com/Systematic.31/"}
                  target="_blank"
                  className="link-href"
                >
                  <FaFacebook className="fa-icon me-2" />
                </Link>
                <Link
                  href={"https://www.tiktok.com/@ybonr"}
                  target="_blank"
                  className="link-href"
                >
                  <FaTiktok className="fa-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBy;
