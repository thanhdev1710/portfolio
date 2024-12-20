"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FontSizeContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  lineHeight: number;
  setLineHeight: Dispatch<SetStateAction<number>>;
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
}

const contextChangeFontSize = createContext<FontSizeContextProps | null>(null);

export function ContextChangeFontSize({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<number>(18);
  const [lineHeight, setLineHeight] = useState<number>(1.75);
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <contextChangeFontSize.Provider
      value={{
        fontSize,
        setFontSize,
        lineHeight,
        setLineHeight,
        isClick,
        setIsClick,
      }}
    >
      {children}
    </contextChangeFontSize.Provider>
  );
}

export function useContextChangeFontSize() {
  const context = useContext(contextChangeFontSize);
  if (!context) {
    throw new Error(
      "useContextChangeFontSize must be used within a ContextChangeFontSize"
    );
  }
  return context;
}
