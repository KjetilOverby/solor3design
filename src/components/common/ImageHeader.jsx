import React from "react";

const ImageHeader = ({ title, img, header, header2 }) => {
  return (
    <>
      <div className="container">
        {header && (
          <div>
            <h1 className="header1">{header}</h1>
            <h1 className="header1">{header2}</h1>
          </div>
        )}
        <h1 className="header">{title}</h1>
      </div>
      <style jsx>
        {`
          .container {
            background: linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.2)
              ),
              url(${img});
            height: 50rem;
            background-size: cover;
            background-position: center;
            display: grid;
            place-items: center;
          }
          .header1 {
            color: #fff;
            font-weight: bold;
            font-size: 5rem;
            text-transform: uppercase;
          }
          .header {
            color: #fff;
            font-weight: 600;
            font-size: 1.5rem;
            text-transform: uppercase;
          }
          @media screen and (max-width: 2100px) {
            .container {
              height: 40rem;
            }
          }
          @media screen and (max-width: 1000px) {
            .container {
              height: 20rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ImageHeader;
