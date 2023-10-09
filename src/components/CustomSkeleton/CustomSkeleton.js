import React from "react";
import Skeleton from "react-loading-skeleton";

export const CustomSkeleton = () => {
  let arr = [{ title: "1" }, { title: "1" }, { title: "1" }, { title: "1" }];
  return (
    <>
      {arr.map((item, ind) => {
        return (
          <div className="card">
            <div className="card-image">
              <Skeleton height={200} width={300} />
            </div>
            <div className="card-content">
              <p className="card-price">
                <Skeleton />
              </p>
              <p className="card-name">
                <Skeleton />
              </p>
              <p className="card-brand">
                <Skeleton />
              </p>
              <p className="card-timestamp">
                <Skeleton />
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
