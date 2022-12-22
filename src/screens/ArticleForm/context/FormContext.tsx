import { createContext } from 'react';
import { FormContextType } from '../types';

export const FormContext = createContext<FormContextType>({
  title: '',
  coverImage: '',
  textareaValue: '',
  tags: [],
  toolPanelValue: '',
  setTitle: (val: string): void => {},
  setTags: (val: string[]): void => {},
  setCoverImage: (val: string): void => {},
  setTextareaValue: (val: string): void => {},
  setToolPanelValue: (val: string): void => {},
  setCursorPostion: (val: number): void => {},
});
