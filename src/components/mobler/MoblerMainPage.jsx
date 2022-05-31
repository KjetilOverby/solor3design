import React from "react";
import ImageHeader from "../common/ImageHeader";

const MoblerMainPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          title="Produkter som er tilpasset hytta."
          img="https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
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

export default MoblerMainPage;
