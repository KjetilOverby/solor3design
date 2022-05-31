import React from "react";

const GridGallery = () => {
  return (
    <>
      <div className="container">
        <img
          className="img img1"
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          className="img img2"
          src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          className="img img3"
          src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          className="img img4"
          src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 30rem 1fr;
            grid-template-rows: 20rem 20rem 20rem;
            grid-template-areas:
              "img1 img2"
              "img1 img3"
              "img4 img4";
            grid-gap: 12px;
          }
          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .img1 {
            grid-area: img1;
          }
          .img2 {
            grid-area: img2;
          }
          .img3 {
            grid-area: img3;
          }
          .img4 {
            grid-area: img4;
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-columns: 1fr;
              grid-template-rows: repeat(4, 1fr);
              grid-template-areas:
                "img1"
                "img2"
                "img3"
                "img4";
            }
          }
        `}
      </style>
    </>
  );
};

export default GridGallery;
