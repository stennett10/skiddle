import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { searchForEvents } from "../apis/skiddle";
import { Event } from "../components/Event";
import { SkiddleEvent } from "../types";
import useDebounce from "../hooks/useDebounce";
export const Home: React.FC = () => {
  const [events, setEvents] = useState<Array<SkiddleEvent>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    searchForEvents("").then((result) => setEvents(result.results));
  }, []);

  useEffect(() => {
    searchForEvents(debouncedSearchTerm).then((result) =>
      setEvents(result.results)
    );
  }, [debouncedSearchTerm]);

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {events?.length > 0 && events.map((event) => <Event event={event} />)}
      </div>
    </div>
  );
};
