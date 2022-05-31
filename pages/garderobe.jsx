import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import GarderobeMainPage from "../src/components/garderobe/GarderobeMainPage";

const garderobe = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <GarderobeMainPage />
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

export default garderobe;
