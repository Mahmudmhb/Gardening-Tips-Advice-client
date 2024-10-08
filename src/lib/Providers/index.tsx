"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/app/store";
import { PersistGate } from "redux-persist/integration/react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Toaster position="top-center" />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </NextUIProvider>
  );
}
