import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount, useConfig, useSendTransaction } from "wagmi";
import { parseEther } from "viem";

// chill squirrels flame address
const TO = "0x15459C7b58016B147Bb7A07bCecf6dA234f51c31";
const EXPLORER_LINK_PREFIX = "https://explorer.flame.astria.org/address/";
const EXPLORER_LINK_TO = `${EXPLORER_LINK_PREFIX}${TO}`;

export default function SendTip() {
  const userAccount = useAccount();
  const config = useConfig();
  const { sendTransaction } = useSendTransaction({ config });

  const [amount, setAmount] = useState<string>("");

  const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const sendTip = () => {
    const amountInWei = parseEther(amount);
    sendTransaction({
      to: TO,
      value: amountInWei,
    });
  };

  return (
    <div className="send-tip-section">
      <div className="send-tip-title">
        <h3>
          did you know you can use
          &nbsp;<a href="https://docs.astria.org/bridging/bridge-ui#bridge-to-flame" target="_blank">Flame</a>&nbsp;
          to send a donation for feeding the squirrels and other small cute rehabbed animals
          at the place where i took this squirrel that i personally rescued with my own hands?
          it costs eleven hundred thousand dollars a year to take care of a single squirrel. for real though,
          i donate this money to the local wildlife rehab center.
        </h3>
      </div>
      <div className="send-tip-main">
        {userAccount?.address && (
          <div>
            <div className="send-tip-address">
              <p>sending donation to: <a className="underlined"
                                         href={EXPLORER_LINK_TO}
                                         target="_blank">
                {TO}
              </a></p>
            </div>
            <div className="send-tip-meat">
              <div>
                <p>from: <a className="underlined"
                            href={`${EXPLORER_LINK_PREFIX}${userAccount.address}`}
                            target="_blank">
                  {userAccount.address}
                </a></p>
              </div>
              <div>
                <p className="input-container">
                  amount: <input type="text"
                                  placeholder="0.00"
                                  onChange={updateAmount}
                                  value={amount}/><span className="input-label">TIA</span>
                  <button type="button"
                          className="send-tip-button"
                          onClick={sendTip}>
                    donate
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="send-tip-wallet">
        <ConnectButton/>
      </div>
    </div>
  );
}
