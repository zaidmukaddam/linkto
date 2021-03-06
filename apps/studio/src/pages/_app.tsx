import queryClient from "../lib/reactQuery";
import useTheme from "~/utils/hooks/useTheme";
import ErrorBoundary from "~/components/common/ErrorBoundary";
import seoConfig from "studio.seo";
import { DefaultSeo } from "next-seo";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppContextProvider } from "~/data/context";
import { SupabaseProvider } from "~/lib/supabase";
import { Toaster } from "@linkto/gamut";

import type { AppProps } from "next/app";

import "~/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

function App({ Component, pageProps }: AppProps) {
  useTheme();

  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <SupabaseProvider>
            <Toaster position="bottom-right" />
            <AppContextProvider>
              <Component {...pageProps} />
            </AppContextProvider>
          </SupabaseProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
