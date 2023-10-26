import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="p-10 rounded-lg bg-slate-200 dark:bg-zinc-900">{children}</div>
    </div>
  );
};

export default layout;
