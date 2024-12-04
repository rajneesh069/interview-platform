"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
