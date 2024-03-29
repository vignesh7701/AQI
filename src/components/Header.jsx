import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import Logo from "../assets/AQI.png";

const Header = () => {
  const [Mobile, notMobile] = useState(false);

  const lgScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (lgScreen) {
      notMobile(true);
    } else {
      notMobile(false);
    }
  }, [lgScreen]);



  return (
    <div className="bg-[#94C0E0] backdrop-blur-lg pb-3">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center py-2">
          <div>
            <img src={Logo} className="w-16 h-12" alt="" />
          </div>
          <div className="flex gap-2 ">
            <Link
              to={"/"}
              className="font-medium border rounded-md border-sky-600  p-1 sm:p-2 hover:text-blue-900 block bg-blue-900  text-white  hover:bg-white"
            >
              Map
            </Link>
            <Link
              to={"/data"}
              className="font-medium border rounded-md border-sky-600  p-1 sm:p-2 hover:text-blue-900 block bg-blue-900  text-white  hover:bg-white"
            >
              Data
            </Link>

            <Link
              to={"/feeds"}
              className="font-medium border rounded-md border-sky-600  p-1 sm:p-2 hover:text-blue-900 block bg-blue-900  text-white  hover:bg-white"
            >
              Feeds
            </Link>
          </div>

          {Mobile && (
            <div className="invisible sm:visible font-medium border-2 border-blue-900 rounded-lg px-3 py-2 text-blue-900 cursor-pointer bg-white hover:bg-blue-900 hover:text-white">
              Newsletter
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
