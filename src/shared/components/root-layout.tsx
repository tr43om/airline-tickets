import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="container max-w-6xl px-4 mx-auto py-4">{children}</div>
  );
};
