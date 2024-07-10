export type TabsType = [number, React.Dispatch<React.SetStateAction<number>>];


export type BooleanType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];


export type FormField = {
    label: string;
    value: string;
  };

export  type ButtonType = {
  icon: JSX.Element;
  text: string;
  content?: JSX.Element;
}