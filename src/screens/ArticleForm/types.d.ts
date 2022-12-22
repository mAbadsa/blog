export interface FormContextType {
  title: string;
  coverImage: string;
  textareaValue: string;
  tags: string[];
  toolPanelValue: string;
  setTitle: (val: string) => void;
  setTags: (val: string[]) => void;
  setCoverImage: (val: string) => void;
  setTextareaValue: (val: string) => void;
  setCursorPostion: (val: number) => void;
  setToolPanelValue: (val: string) => void;
}
