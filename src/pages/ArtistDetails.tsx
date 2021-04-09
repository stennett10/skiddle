import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtistDetails } from "../apis/skiddle";
import { Header } from "../components/Header";

export const ArtistDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<any>();

  useEffect(() => {
    getArtistDetails(id).then((response) => setArtist(response.results));
  }, []);
  return (
    <div>
      <Header showSearch={false} />

      {artist === undefined ? (
        <h1>Loading..</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 30,
            backgroundColor: "#fff",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={artist?.imageurl}
              alt=""
              style={{ height: 300, width: 300, padding: 10 }}
            />
            <div style={{ padding: 20 }}>
              <h1>{artist?.name}</h1>
              <p
                dangerouslySetInnerHTML={{ __html: artist?.description }}
                style={{ fontSize: 18, lineHeight: 1.5, maxWidth: "80ch" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
