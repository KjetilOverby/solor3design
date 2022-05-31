import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/3design.jpg";

const HeaderComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>
        <div className="tabContainer">
          {isMobile ? (
            <>
              <IoMenuSharp
                onClick={openSidebarHandler}
                className="drawerIcon"
                style={{
                  fontSize: "3rem",
                  marginRight: "2rem",
                  marginBottom: "1rem",
                }}
              />
              {hideSidebar && (
                <div
                  className={`sidebar-container ${
                    openSidebar ? "sidebar-open" : "sidebar-close"
                  }`}
                >
                  <Link href="/">
                    <p className="tabs-mobile">Hjem</p>
                  </Link>
                  <Link href="/kjokken">
                    <p className="tabs-mobile">Kjøkken</p>
                  </Link>
                  <Link href="/garderobe">
                    <p className="tabs-mobile">Garderobe</p>
                  </Link>

                  <Link href="/mobler">
                    <p className="tabs-mobile">Møbler</p>
                  </Link>
                  <Link href="/kontakt">
                    <p className="tabs-mobile">Kontakt</p>
                  </Link>
                </div>
              )}
              {openSidebar && (
                <div
                  onClick={openSidebarHandler}
                  style={{
                    background: "rgba(256,256,256,.0)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <Link href="/">
                <p className="tabs">Hjem</p>
              </Link>
              <Link href="/kjokken">
                <p className="tabs">Kjøkken</p>
              </Link>
              <Link href="/garderobe">
                <p className="tabs">garderobe</p>
              </Link>

              <Link href="/mobler">
                <p className="tabs">Møbler</p>
              </Link>
              <Link href="/kontakt">
                <p className="tabs">Kontakt</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 6rem;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 35rem 0.5rem 35rem;
          position: fixed;
          width: 100%;
          z-index: 100;
          grid-area: header;
          border-bottom: 1px solid #cecece;
        }
        .logoContainer {
          height: 3rem;
          width: 10rem;
          position: relative;
        }
        .logoContainer:hover {
          cursor: pointer;
        }
        .sidebar-container {
          position: absolute;
          background-color: #fff;
          left: 0;
          width: 12rem;
          height: 100vh;
          top: 6rem;
          padding-left: 2rem;
          left: -10rem;
          padding-top: 3rem;
          z-index: 10;
        }
        .sidebar-open {
          animation: slide 0.3s forwards;
        }
        .sidebar-close {
          animation: slideClose 0.5s forwards;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10rem);
          }
        }
        @keyframes slideClose {
          0% {
            transform: translateX(10rem);
          }
          100% {
            transform: translateX(-10rem);
          }
        }
        .tabs {
          text-transform: uppercase;
          transition: 0.5s;
          color: #000000;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .tabs-mobile {
          text-transform: uppercase;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
        .tabs:hover {
          cursor: pointer;
          color: #747474;
        }
        .tabContainer {
          width: 32rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }
        @media screen and (max-width: 2100px) {
          .container {
            padding: 0 25rem 0.5rem 25rem;
          }
        }
        @media screen and (max-width: 1650px) {
          .tabContainer {
            width: 35rem;
          }
          .container {
            padding: 0 10rem 0.8rem 10rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 0 1rem;
          }
          .tabContainer {
            justify-content: flex-end;
          }
        }

        @media screen and (max-width: 650px) {
          .logoContainer {
            width: 19rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
