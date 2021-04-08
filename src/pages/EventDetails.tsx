import React from "react";
import { useParams } from "react-router-dom";
export const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>EventDetails : {id} </div>;
};
