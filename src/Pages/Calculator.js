import React, { memo, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
const Calculator = () => {
  let query = useQuery();
  let [pair] = useState({
    num1: query.get(" num1"),
    num2: query.get("num2"),
    op: query.get("op"),
  });
  const [result] = useState(() => {
    switch (pair.op) {
      case "+":
        return parseInt(pair.num1) + parseInt(pair.num2);
      case "-":
        return parseInt(pair.num1) - parseInt(pair.num2);
      case "*":
        return parseInt(pair.num1) * parseInt(pair.num2);
      case "/":
        return parseInt(pair.num1) / parseInt(pair.num2);
      case "%":
        return (parseInt(pair.num1) / parseInt(pair.num2)) * 100;
      default:
        return 0;
    }
  });

  return (
    <div>
      Your calculation Result is <span id="calc-result">{result}</span>
    </div>
  );
};
export default Calculator;
