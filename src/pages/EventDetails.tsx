import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { getEventDetails } from "../apis/skiddle";
import { SkiddleEvent } from "../types";
import { ArtistDetails } from "./ArtistDetails";

export const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>();

  useEffect(() => {
    getEventDetails(id).then((result) => setEvent(result.results));
  }, []);

  return (
    <div>
      <Header showSearch={false} />

      {event === undefined ? (
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
              src={event?.largeimageurl}
              alt=""
              style={{ padding: 30, height: 300, width: 300 }}
            />
            <div>
              <h1>{event?.eventname} </h1>
              <p>{event?.description}</p>
              <p>
                {event?.venue?.name}, {event?.venue?.address},{" "}
                {event?.venue?.town}
              </p>
              <p>{new Date(event?.startdate).toLocaleDateString("en-GB")}</p>
              <p>{`${event?.openingtimes?.doorsopen} til ${event?.openingtimes?.doorsclose}`}</p>
              <p>Minimum age: {event?.MinAge}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {event?.artists.map((artist: any) => (
                  <Link
                    to={`/artist/${artist.artistid}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        margin: 5,
                      }}
                    >
                      <img
                        src={artist.image}
                        style={{ width: 100, height: 100 }}
                        alt="thumbnail of the artist"
                      />
                      <div style={{ width: 150, paddingLeft: 10 }}>
                        <h2 style={{ color: "#000" }}>{artist.name}</h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
