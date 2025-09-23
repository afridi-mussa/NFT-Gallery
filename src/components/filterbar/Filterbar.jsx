import React from "react";
import "./FilterBar.css";

const FilterBar = ({artists, filter, setFilter, sort, setSort, search, setSearch}) => {
  return (
    <div className="filterbar">
      <div className="filter-left">
        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
          <option value="">All Artists</option>
          {artists.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <select value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option value="recent">Sort: Recent</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>
      <div className="filter-right">
        <input placeholder="Search name or artist..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default FilterBar;
