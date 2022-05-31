import React from "react";
import MarginLayout from "../common/MarginLayout";
import ImageGallery from "./ImageGallery";
import ImageHeader from "../../components/common/ImageHeader";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          title="skreddersydde interiørløsninger av solid kvalitet og god design."
          img="https://images.unsplash.com/photo-1581166975727-9bdb6c1248af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          header="Velkommen til"
          header2="solør 3 Design"
        />
        <MarginLayout>
          <h1 className="global-header header">Solør 3Design</h1>
          <div className="content-container">
            <div>
              <p>
                <span className="span">Solør 3Design</span> er et
                snekkerverksted som leverer Solør design AS skreddersydde
                interiørløsninger av solid kvalitet og god design.
              </p>
              <br />
              <p>
                Vi produserer kjøkken, garderober, bad, TV-benker, bord, stoler,
                bibliotek og spesial innredninger som resepsjoner, barer, osv.{" "}
                <span className="span">
                  Vi lager møblene slik du vil ha dem, etter dine ønsker og mål.
                </span>
              </p>
              <br />
              <p>
                Vi tilbyr også snekring som tilbygg, tak osv. Ring gjerne for
                ett tilbud.
              </p>
              <br />
              <p>
                Solør 3Design har mer enn 20 års erfaring og holder til på
                Braskereidfoss i Innlandet.
              </p>
            </div>

            <div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
          <h1 className="global-header header2">Produkter</h1>
          <div className="content-container2">
            <div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1617132926435-b05d1251553c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div>
              <h4>Vi lager møblene slik du ønsker.</h4>
              <ul>
                <li>Kjøkken</li>
                <li>Garderobe</li>
                <li>Bad- og vaskeromsinnredning</li>
                <li>Bord og stoler</li>
                <li>Framskap</li>
                <li>Seksjon og TV-bord</li>
                <li>Spesialmøbler for camping og fortelt</li>
              </ul>
              <p>
                Vi tar også på oss mindre snekkeroppdrag som panelering og
                gulvlegging etc.
              </p>
            </div>
          </div>
          <ImageGallery />
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
            background-color: #f6f6f6;
          }
          .header {
            margin-bottom: 1rem;
          }
          .header2 {
            margin: 4rem 0;
          }
          .img {
            width: 100%;
            object-fit: cover;
          }
          .content-container {
            display: grid;
            grid-template-columns: 25rem 1fr;
            grid-gap: 5rem;
          }
          .content-container2 {
            display: grid;
            grid-template-columns: 1fr 25rem;
            grid-gap: 5rem;
            margin-bottom: 4rem;
          }

          .span {
            font-weight: bold;
          }

          @media screen and (max-width: 800px) {
            .content-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default MainPage;
