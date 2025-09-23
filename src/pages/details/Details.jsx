import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    fetch("/nft-data.json")
      .then(r => r.json())
      .then(data => {
        const found = data.find(x => x.id === parseInt(id));
        setNft(found);
      });
  }, [id]);

  if (!nft) return <div className="container"><p>Loading...</p></div>;

  return (
    <section className="details container">
      <div className="media">
        <img src={nft.image} alt={nft.name} />
      </div>
      <div className="info">
        <div className="artist-row">
          <img src={nft.avatar} alt={nft.artist} />
          <div>
            <div className="artist-name">{nft.artist}</div>
            <div className="small">@{nft.artist}</div>
          </div>
        </div>

        <h1 className="title">{nft.name}</h1>
        <p className="desc">{nft.description}</p>

        <div className="purchase-card">
          <div>
            <div className="label small">Price</div>
            <div className="big">◎ {nft.price.toFixed(2)}</div>
          </div>
          <div>
            <button className="btn-buy">Buy Now</button>
            <Link to="/" className="btn-back">Back</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;
