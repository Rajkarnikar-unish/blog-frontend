import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div>
        <footer className="footer">
          <img src="../logo-no-bg.png" height={30} width={30} alt="" />
          <span>&copy; ThoughtLabs 2024 | </span>
          <div className="links ms-1">
            <a href="#" className="ms-1">
              Team
            </a>
            <a
              href="https://github.com/Rajkarnikar-unish/blog-frontend"
              target="_blank"
              className="ms-1"
            >
              Collaborate here
            </a>
            <a href="mailto:unishrajkarnikar.29@gmail.com" className="ms-1">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterComponent;
