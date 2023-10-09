import React from "react";
import Skeleton from "react-loading-skeleton";
import "./CustomSkeleton.css";
const CustomSkeleton2 = () => {
  let arr = [{ title: "1" }, { title: "1" }];
  return (
    <>
      {arr.map((item, ind) => {
        return (
          <div className="cuscard2">
            <div className=" card2-box">
              <div className="cuscard2-image">
                <Skeleton height={160} width={250} />
              </div>
              <div className="card2-content">
                <p className="card2-price">
                  <Skeleton />
                </p>
                <p className="card2-name">
                  <Skeleton />
                </p>
                <p className="card2-brand">
                  <Skeleton />
                </p>
                <br />
                <p></p>

                <p className="card2-timestamp">
                  <Skeleton />
                </p>
                <div className="card2-callbutton">
                  <p>
                    <Skeleton width={70} height={30} />
                  </p>
                  <p>
                    <Skeleton width={70} height={30} />
                  </p>
                </div>
                {/* <div className="card2-chat-button">
                  <Skeleton />
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CustomSkeleton2;
