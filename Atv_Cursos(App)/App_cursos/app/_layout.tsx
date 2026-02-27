import { Stack, Tabs } from "expo-router";
import { ThemeProvider } from "@/hooks/useTheme";

// convex

import { ConvexReactClient, ConvexProvider } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return ( 
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{headerShown: false}}>
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  )
}