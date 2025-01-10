import React from "react";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Prop {
  onSortOrder: (sort: string) => void;
}
const SortSelector = ({ onSortOrder }: Prop) => {
  const sortName = [
    { value: "", labe: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  // const { data, error, isLoading } = usePlatform();

  return (
    <div>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-36  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          const element = document.getElementById("dropdowna");
          if (element) {
            if (element.classList.contains("hidden"))
              element.classList.remove("hidden");
            else element.classList.add("hidden");
          }
        }}
      >
        <span id="dropdownSpan">Relevance</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div
        id="dropdowna"
        className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-start  text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownButton"
        >
          {sortName.map((sort) => (
            <li key={sort.value}>
              <a
                onClick={() => {
                  onSortOrder(sort.value);
                  document.getElementById("dropdowna")?.classList.add("hidden");
                  const ele = document.getElementById("dropdownSpan");
                  ele != null && sort.label != undefined && ele.innerText != ""
                    ? (ele.innerText = sort.label)
                    : "";
                }}
                href="#"
                className="px-4 py-2 items-start flex hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {sort.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortSelector;
