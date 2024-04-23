import React from "react";

export interface CardData  {
  name: string,
  img: string,
  information: React.ReactNode,
  technologies: string[],
  nameChallenge?: string,
  urlProject?: string,
  urlPageChallenge?: string;
}

export interface CardProps {
  dataProject: CardData[];
  handleOpenModal: (modal: CardData) => void;
}