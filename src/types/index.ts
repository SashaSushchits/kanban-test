
export type Nullable<T> = null | T;

export type Images = Image[];

export type Image = {
  id: String,
  src: String,
  alt: String,
};

export type Tasks = Task[];

export type Task = { 
  name: String,
  type: String,
  id: String,
  children: TaskChild[]
};

export type TaskChild = {
  type: String,
  id: String,
  data: String,
  description: Nullable<String>,
  src: Nullable<String>,
  alt: Nullable<String>,
  colorLine: String[],
};

export type dropResult = {
  addedIndex: number,
  payload: TaskChild,
  removedIndex: number,
};
