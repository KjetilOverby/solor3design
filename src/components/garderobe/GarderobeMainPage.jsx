import React from "react";
import Column2Layout from "../common/Column2Layout";
import GridGallery from "../common/GridGallery";
import ImageHeader from "../common/ImageHeader";
import MarginLayout from "../common/MarginLayout";

const GarderobeMainPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          title="Trenger du mere skapplass, da har vi løsningene for deg."
          img="https://images.unsplash.com/photo-1631889993877-71e193bf79b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        />
        <MarginLayout>
          <h1 className="global-header header2">Garderobe</h1>
          <Column2Layout>
            <div>
              <p>
                Med skreddersydde, måltilpassede løsninger, blir garderoben
                tilpasset både dine praktiske og estetiske behov.
              </p>
              <br />
              <p>
                Solør 3Design tilbyr et stort utvalg av alt fra garderobeskap,
                skyvedører, skyvedørsgarderober og plassbygde garderober.
              </p>
            </div>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1628843359126-8cd868ba4ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
            />
          </Column2Layout>
          <h1 className="global-header header2">
            Her er noen av våre garderobeløsninger
          </h1>
          <GridGallery />
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
          .header2 {
            margin-bottom: 3rem;
          }
          .img {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default GarderobeMainPage;
