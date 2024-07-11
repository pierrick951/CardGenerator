export type TabsType = [number, React.Dispatch<React.SetStateAction<number>>];

export type BooleanType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export type FormField = {
  id: string;
  label: string;
  value: string;
};

export type ButtonType = {
  icon: JSX.Element;
  text: string;
  content?: JSX.Element;
};

export interface StringVoid {
  (newText: string): void;
}
export interface NumVoid {
  (newPrice: number): void;
}

export interface AreaVoid {
  (newTextArea: string): void;
}

export type RangeInput = {
  label: string;
  id: string;
  min: number;
  max: number;
  initialValue: number;
};

export interface ImgFilter {
  
  Params: { brightParams: string; sepiaParams: string; invertParams: string };
}
