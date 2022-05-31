import React from "react";
import MarginLayout from "../common/MarginLayout";

const KontaktMainPage = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <h2>Solør 3Design</h2>
          <p>Lundeby, 2435 Braskereidfoss</p>
          <br />
          <p>Telefon: 918 10 766</p>
          <p>e-post: post@solor3design.no</p>
          <br />
          <h2>Geir Sørmo</h2>
          <p>Telefon: 991 09 858</p>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
        `}
      </style>
    </>
  );
};

export default KontaktMainPage;
