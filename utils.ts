import * as dotenv from "dotenv";

dotenv.config();

type NetworkConfig = {
  url: string;
  accounts?: string[];
};

type NetworksConfig = {
  local: NetworkConfig;
  matic?: NetworkConfig;
  mumbai?: NetworkConfig;
  ropsten?: NetworkConfig;
  goerli?: NetworkConfig;
  mainnet?: NetworkConfig;
};

type NetworkName = "POLYGON_MAINNET" | "POLYGON_MUMBAI" | "ROPSTEN" | "MAINNET";

export function getNetwork(
  networkName: NetworkName
): NetworkConfig | undefined {
  const rpc = process.env[`${networkName}_RPC`];
  const priv = process.env[`${networkName}_PRIV`];

  if (!rpc) return;

  return {
    url: rpc,
    accounts: priv ? [priv] : undefined,
  };
}

export function getNetworks(): NetworksConfig {
  const networks: NetworksConfig = {
    local: {
      url: "http://127.0.0.1:7545",
    },
  };

  if (getNetwork("POLYGON_MAINNET")) {
    networks.matic = getNetwork("POLYGON_MAINNET");
  }

  if (getNetwork("POLYGON_MUMBAI")) {
    networks.mumbai = getNetwork("POLYGON_MUMBAI");
  }

  return networks;
}
