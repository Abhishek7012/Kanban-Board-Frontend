import React from 'react';

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  completionDate: string;
};

const TypesPage = () => {

  return 
};

export default TypesPage;