import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
// import Autosuggest from "react-autosuggest";
// import theme from "../autosearch/theme.css";

const languages = [
  {
    name: "Python",
    year: 1972,
  },
  {
    name: "Java",
    year: 2012,
  },
  {
    name: "JavaScript",
    year: 1972,
  },
  {
    name: "C",
    year: 2012,
  },
  {
    name: "C#",
    year: 1972,
  },
  {
    name: "C++",
    year: 2012,
  },
  {
    name: "SQL",
    year: 1972,
  },
  {
    name: "MySQL",
    year: 2012,
  },
  {
    name: "PHP",
    year: 1972,
  },
  {
    name: "Kotlin",
    year: 2002,
  },
  {
    name: "Swift",
    year: 1967,
  },
  {
    name: "React",
    year: 2012,
  },
  {
    name: "React Native",
    year: 2012,
  },
  {
    name: "TypeScript",
    year: 2012,
  },
  {
    name: "Vue",
    year: 2012,
  },
  {
    name: "Angular",
    year: 2005,
  },
  // ...other language objects
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => (
  <div className=" bg-[#323232] max-4k:w-[1000px] max-2k:w-[800px] max-less2k:w-[700px] max-2xl:w-[600px] max-xl:w-[500px] max-lg:w-[360px] max-moremd:w-[200px]  max-lesssm:border-2 max-sm:hidden">
    {suggestion.name}
  </div>
);

const InputBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "",
    value,
    onChange: onChange,
    className:
      "outline-none	p-[14px] text-[16px] border-none	search-bar  bg-[#181818] max-4k:w-[1000px] max-2k:w-[800px] max-less2k:w-[700px] max-2xl:w-[600px] max-xl:w-[500px] max-lg:w-[360px] max-moremd:w-[200px]max-sm:hidden",
  };

  return (
    <Autosuggest
      theme={{ suggestionsContainer: "absolute" }}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default InputBar;
