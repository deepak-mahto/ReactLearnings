import { Fragment } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <Fragment>
      <div className="search">
        <MdSearch className="search-icons" size="1.3em" />
        <input
          onChange={(event) => {
            handleSearchNote(event.target.value);
          }}
          type="text"
          placeholder="Type to Search"
        />
      </div>
    </Fragment>
  );
};

export default Search;
