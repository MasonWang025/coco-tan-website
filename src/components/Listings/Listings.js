import React from "react";

import ListingCard from "../Listings/ListingCard";

export default function Listings(props) {
  var listingCards = [];
  if (props.homes) {
    console.log(props.homes);
    listingCards = props.homes.map((doc) => {
      let listing = doc.data();
      return (
        <ListingCard
          key={doc.id}
          address={listing.address}
          test={listing.test}
        />
      );
    });
  }

  return (
    <div className="container-fluid hero-bg2 listings-container">
      <div className="container">{listingCards}</div>
    </div>
  );
}