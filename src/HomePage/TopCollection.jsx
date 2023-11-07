import React from "react";
import collection1 from "../Images/collection-lg-01.webp";
import collection_sm_1 from "../Images/collection-sm-01.webp";
import collection_sm_2 from "../Images/collection-sm-02.webp";
import collection_sm_3 from "../Images/collection-sm-03.webp";
import collection2 from "../Images/collection-lg-02.webp";
import collection_sm_4 from "../Images/collection-sm-04.webp";
import collection_sm_5 from "../Images/collection-sm-05.webp";
import collection_sm_6 from "../Images/collection-sm-06.webp";
import collection3 from "../Images/collection-lg-03.webp";
import collection_sm_7 from "../Images/collection-sm-07.webp";
import collection_sm_8 from "../Images/collection-sm-08.webp";
import collection_sm_9 from "../Images/collection-sm-09.webp";
import collection4 from "../Images/collection-lg-04.webp";
import collection_sm_10 from "../Images/collection-sm-10.webp";
import collection_sm_11 from "../Images/collection-sm-11.webp";
import collection_sm_12 from "../Images/collection-sm-12.webp";

const largearray = [
  {
    large: collection1,
    small: [collection_sm_1, collection_sm_2, collection_sm_3],
    text: "Cubic Tread",
    qty: "27 items",
    zpart: collection_sm_1,
  },
  {
    large: collection2,
    small: [collection_sm_4, collection_sm_5, collection_sm_6],
    text: "Diamond Dog",
    qty: "20 items",
    zpart: collection_sm_2,
  },
  {
    large: collection3,
    small: [collection_sm_7, collection_sm_8, collection_sm_9],
    text: "Morgan 11",
    qty: "15 items ",
    zpart: collection_sm_3,
  },
  {
    large: collection4,
    small: [collection_sm_10, collection_sm_11, collection_sm_12],
    text: "Orthogon#720",
    qty: "27 items",
    zpart: collection_sm_4,
  },
];

const TopCollection = () => {
  return (
    <div>
      <div className="text-[24px] font-bold pt-10 px-4">Top Collection</div>
      <div className="flex justify-between px-6 pt-10 pb-4 ">
        {largearray.map((collection, index) => (
          <div className=" border px-4 py-4 rounded-xl shadow-2xl" key={index}>
            <div className=" rounded-md">
              <img
                style={{ borderRadius: 10 }}
                src={collection.large}
                alt={`Large Collection ${index + 1}`}
              />
            </div>

            <div className="flex pt-2 justify-between">
              {collection.small.map((smallImage, smallIndex) => (
                <div key={smallIndex}>
                  <img
                    style={{ borderRadius: 10 }}
                    src={smallImage}
                    alt={`Small Collection ${index + 1}-${smallIndex + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between ">
              <div className="py-2 hover:text-[#00a3ff]">{collection.text}</div>
              <div className=" rounded-lg px-2 hover:bg-[#6cbfef] py-2">
                {collection.qty}
              </div>
            </div>
            <div
              className="flex absolute  w-20 h-20 rounded-full"
              style={{ marginTop: -170, marginLeft: 110 }}
            >
              <img alt="logo" style={{ borderRadius: 98 }} src={collection.zpart} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
