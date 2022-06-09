import { useEffect, useRef, useState } from "react";
import "./styles.css";

const state = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

export default function App() {
  const [query, setQuery] = useState("");
  const timerRef = useRef();
  const [searchResult, setSearchResult] = useState([]);

  const getResult = (searchQuery) => {
    console.log("api called", query);
    if (searchQuery && searchQuery.length > 0) {
      const result = state.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    const debounce = debounceFn(getResult, 2000);
    debounce(query);
  }, [query]);

  const debounceFn = (fn, delay = 1000) => {
    return function (...arg) {
      console.log("timer", timerRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        fn.apply(undefined, arg);
      }, delay);
    };
  };

  return (
    <div className="App">
      <input
        style={{ width: 250, height: 25 }}
        placeholder="Type to search ..."
        onChange={(ev) => setQuery(ev.target.value)}
      />
      <ul>
        {searchResult.length > 0 && searchResult.map((res) => <li>{res}</li>)}
      </ul>
    </div>
  );
}
