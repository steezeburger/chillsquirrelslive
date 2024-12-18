import type { EvmChainInfo } from "./types.ts";

export const FlameChainInfo: EvmChainInfo = {
  chainId: 253368190,
  chainName: "Flame",
  rpcUrls: ["https://rpc.flame.astria.org"],
  currencies: [
    {
      coinDenom: "TIA",
      coinMinimalDenom: "utia",
      coinDecimals: 18,
      nativeTokenWithdrawerContractAddress:
        "0xB086557f9B5F6fAe5081CC5850BE94e62B1dDE57",
      ibcWithdrawalFeeWei: "10000000000000000",
      iconClass: "i-celestia",
    },
    {
      coinDenom: "USDC",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      erc20ContractAddress: "0x3f65144F387f6545bF4B19a1B39C94231E1c849F",
      ibcWithdrawalFeeWei: "10000000000000000",
      iconClass: "i-usdc",
    },
    {
      coinDenom: "milkTIA",
      coinMinimalDenom:
        "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
      coinDecimals: 18,
      erc20ContractAddress: "0xcbb93e854AA4EF5Db51c3b094F28952eF0dC67bE",
      ibcWithdrawalFeeWei: "10000000000000000",
      iconClass: "i-milk-tia",
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "stutia",
      coinDecimals: 18,
      erc20ContractAddress: "0xdf941D092b10FF07eAb44bD174dEe915c13FECcd",
      ibcWithdrawalFeeWei: "10000000000000000",
      iconClass: "i-stride-tia",
    },
  ],
  iconClass: "i-flame",
};
