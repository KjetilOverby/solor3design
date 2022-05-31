import React from "react";

const ImageGalleryCard = ({ title, img, img2, text, color }) => {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img className="img" src={img} alt="" />
        </div>
        <div className="img-container2">
          <img className="img" src={img2} alt="" />
        </div>
        <div className="text-container">
          <h1 className="global-header header">{title}</h1>

          <p className="text">{text}</p>
        </div>
      </div>
      <style jsx>
        {`
        
          
          .container {
            display: grid;
            grid-template-columns: 1fr 40rem;
            grid-template-rows: 1fr auto;
            grid-template-areas:
            "text img"
            "img2 img";

            grid-gap: 5px;
            margin-bottom: 5px
          }
          .img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .img-text-container {
          }
          .img-container {
            grid-area: img;
          }
          .img-container2 {
            grid-area: img2;
            margin-top: rem;
          }
          .header {
            margin-bottom: 1rem;
            font-weight: 200
          }
          
          .text {
            margin-top: 1rem;
            font-weight:100
          }
          .text-container {
            background-color: ${color};
            padding: 1rem;
            color: #fff;
            grid-area: text;
          }
          @media screen and (max-width: 2100px) {
          .container {
            grid-template-columns: 1fr 30rem;
          }
          @media screen and (max-width: 756px) {
          .container {
            grid-template-columns: 1fr;
            grid-template-areas:
            "img"
            "text"
            "img2";
          }
        `}
      </style>
    </>
  );
};

export default ImageGalleryCard;
