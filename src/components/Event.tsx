import React from "react";
import { Link } from "react-router-dom";
import { SkiddleEvent } from "../types";
interface EventProps {
  event: SkiddleEvent;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Event: React.FC<EventProps> = ({ event, children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        margin: 20,
        maxWidth: 300,
        height: 700,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <img
        src={event.xlargeimageurl}
        alt=""
        style={{ objectFit: "cover", width: 300, height: 300 }}
      />
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          height: "-webkit-fill-available",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>{event.eventname}</h3>
          <p dangerouslySetInnerHTML={{ __html: event.description }} />
          <p>
            {event.venue.name}, {event.venue.town}
          </p>
          <p>{new Date(event?.startdate).toLocaleDateString("en-GB")}</p>
        </div>
        <Link to={`/event/${event.id}`} style={{}}>
          <button
            style={{
              padding: "10px 30px",
              backgroundColor: "#46c3be",
              color: "#fff",
              border: "0",
              borderRadius: 4,
              fontSize: 20,
              width: "-webkit-fill-available",
            }}
          >
            view details
          </button>
        </Link>
      </div>
    </div>
  );
};
