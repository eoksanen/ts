import { Type } from "./types";



export const isString = (text: any): text is string => {
    return typeof text === 'string';
  };
 export const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
export const isType = (type: any): type is Type => {
    return Object.values(Type).includes(type);
  };

