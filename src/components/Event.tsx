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
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <img
        src={event.xlargeimageurl}
        alt=""
        style={{ objectFit: "cover", width: 300, height: 300 }}
      />
      <div style={{ padding: 20 }}>
        <h3>{event.eventname}</h3>
        <p dangerouslySetInnerHTML={{ __html: event.description }} />
        <p>
          {event.venue.name}, {event.venue.town}
        </p>
        <p>{event.startdate}</p>
        <Link to={`/event/${event.id}`} style={{ alignSelf: "flex-end" }}>
          <button>view details</button>
        </Link>
      </div>
    </div>
  );
};
