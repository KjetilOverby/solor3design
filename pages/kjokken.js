import React from "react";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import FooterComponent from "../src/components/common/FooterComponent";
import KjokkenMainPage from "../src/components/Kjokken/KjokkenMainPage";

const kjokken = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />

        <KjokkenMainPage />

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

export default kjokken;
