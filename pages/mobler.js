import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import MoblerMainPage from "../src/components/mobler/MoblerMainPage";

const mobler = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <MoblerMainPage />
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

export default mobler;
