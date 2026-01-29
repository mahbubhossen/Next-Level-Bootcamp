type AreaOfNum = {
  height: number;
  width: number;
};

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type AreaOfString = {
    [key in "height" | "width"] : string;
}

type area<T>  = {
    [key in keyof T]: T[key];
}

const area1: area<{ height: string; width: number}> = {
  height: "100px",
  width: 12,
};