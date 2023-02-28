import React, { memo, useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const useQuery = () => {
  const [search] = useLocation();
  return memo(() => new URLSearchParams(search), [search]);
};
export const BackgroundColorChanger = () => {
  let query = useParams();
  const style = {
    height: "100vh",
    backgroundColor: query.colorname,
  };
  return <div style={style}>Background Color Changer</div>;
};
