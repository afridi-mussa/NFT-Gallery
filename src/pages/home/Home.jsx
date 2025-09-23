import React, { useEffect, useState } from "react";
import NFTCard from "../../components/nftcard/NFTCard";
import FilterBar from "../../components/filterbar/Filterbar";
import "./Home.css";

const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("recent");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/public/nft-data.json")
      .then((r) => r.json())
      .then((data) => setNfts(data));
  }, []);

  const artists = Array.from(new Set(nfts.map(n => n.artist)));

  const filtered = nfts
    .filter(n => !filter || n.artist === filter)
    .filter(n => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return n.name.toLowerCase().includes(q) || n.artist.toLowerCase().includes(q);
    })
    .sort((a,b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <section className="home container">
      <div className="top-row">
        <h2>Discover Items</h2>
        <div className="small">Explore collections, drops & auctions</div>
      </div>

      <FilterBar artists={artists} filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} search={search} setSearch={setSearch} />

      <div className="gallery grid gallery-grid">
        {filtered.map(nft => <NFTCard key={nft.id} nft={nft} />)}
      </div>
    </section>
  );
};

export default Home;
