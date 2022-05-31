import React from "react";
import MarginLayout from "./MarginLayout";

const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <h2 className="header">Solør 3Design AS</h2>
          <p className="sub-text">Lundeby, 2435 Braskereidfoss</p>
          <p className="sub-text"> Telefon: 918 10 766 </p>
          <p className="sub-text">e-post: post@solor3design.no</p>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: footer;
            background-color: #2d4159;
            color: #d4d4d4;
          }
          .sub-text {
            font-style: italic;
            font-weight: 100;
          }
          .header {
            margin: 0.5rem 0;
            font-weight: 100;
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
