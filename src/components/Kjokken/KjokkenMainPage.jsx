import React from "react";
import Column2Layout from "../common/Column2Layout";
import GridGallery from "../common/GridGallery";
import ImageHeader from "../common/ImageHeader";
import MarginLayout from "../common/MarginLayout";

const KjokkenMainPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          title="VI SKREDDERSYR KJØKKEN ETTER DINE ØNSKER OG BEHOV"
          img="https://images.unsplash.com/photo-1598928473162-0316ade00bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <MarginLayout>
          <h1 className="global-header header">Kjøkken</h1>
          <Column2Layout>
            <div>
              <p>
                Vi skreddersyr ditt kjøkken etter dine ønsker og behov. Skapene
                sinkes av heltre, og dørene lages med rammer og fylling eller
                glatte av krysslimte plater.
              </p>
              <br />
              <p>
                Du kan velge mellom furu, eik, bjørk eller maling (vi bruker
                syreherdende maling som gir det mest slitesterke resultatet)
              </p>

              <br />
              <p>Solør3Design , Geir Sørmo Tlf: 99109858</p>
            </div>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </Column2Layout>
          <h1 className="global-header header2">Hyttekjøkken</h1>
          <Column2Layout>
            <img
              className="img"
              src="https://www.ranahytta.no/wp-content/uploads/2021/04/Mosvatn-kjokken-750x450-1.jpg"
              alt=""
            />
            <div>
              <p>
                Hytter har ofte begrenset plass og ferdigmoduler kan være en
                utfordring og installere. Solør 3Design kan spesialtilpasse alle
                mål så det blir et perfekt resultat uten merkelige løsninger.
              </p>
            </div>
          </Column2Layout>
          <h1 className="global-header header2">
            Her er noen av våres kjøkken
          </h1>
          <GridGallery />
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
          .img {
            width: 100%;
          }
          .header {
            margin-bottom: 2rem;
          }
          .header2 {
            margin: 5rem 0;
          }
        `}
      </style>
    </>
  );
};

export default KjokkenMainPage;
