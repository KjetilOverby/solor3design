import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import KontaktMainPage from "../src/components/kontakt/KontaktMainPage";

const kontakt = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <KontaktMainPage />
        <FooterComponent />
      </PageLayout>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default kontakt;
