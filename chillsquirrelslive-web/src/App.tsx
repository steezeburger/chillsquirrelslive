import "./App.css";
import { TwitchEmbed } from "react-twitch-embed";
import SendTip from "./features/EthWallet/components/SendTip/SendTip";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { evmChainToRainbowKitChain } from "./features/EthWallet/types.ts";
import { FlameChainInfo } from "./features/EthWallet/chainConfig.ts";

import "@rainbow-me/rainbowkit/styles.css";

function App() {
  const flameChainInfo = evmChainToRainbowKitChain(FlameChainInfo);

  const config = getDefaultConfig({
    appName: "chillsquirrels",
    projectId: "51a5848d89ca253abf66376b665d69eb",
    chains: [flameChainInfo],
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <>
            <div>
              <TwitchEmbed
                channel="dblsteezeburger"
                id="chillsquirrelslive"
                muted
                onVideoPause={() => console.log(":(")}
              />
            </div>
            <h2>chill squirrels live</h2>
            <SendTip/>
          </>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
