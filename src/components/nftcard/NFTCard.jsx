import React from "react";
import { Link } from "react-router-dom";
import "./NFTCard.css";

const NFTCard = ({ nft }) => {
  return (
    <Link to={`/nft/${nft.id}`} className="card">
      <div className="card-media">
        <img src={nft.image} alt={nft.name} />
      </div>
      <div className="card-body">
        <div className="artist">
          <img src={nft.avatar} alt={nft.artist} />
          <div>
            <div className="artist-name">@{nft.artist}</div>
            <div className="small">{nft.name}</div>
          </div>
        </div>

        <div className="card-meta">
          <div className="price">
            <div className="label">Price</div>
            <div className="value">◎ {nft.price.toFixed(2)}</div>
          </div>
          <div className="bid">
            <div className="label">Highest Bid</div>
            <div className="value">◎ {(nft.price + 0.05).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
