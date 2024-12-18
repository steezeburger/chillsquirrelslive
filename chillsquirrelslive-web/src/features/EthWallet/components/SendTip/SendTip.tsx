import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useConfig, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { estimateGas } from "@wagmi/core";

// chill squirrels flame address
const TO = "0x15459C7b58016B147Bb7A07bCecf6dA234f51c31";

export default function SendTip() {
  const userAccount = useAccount();
  const config = useConfig();
  const { sendTransaction } = useSendTransaction({ config });

  const [amount, setAmount] = useState<string>("");

  const [gasEstimate, setGasEstimate] = useState<string>("");
  useEffect(() => {
    const fetchGasEstimate = async () => {
      const result = await estimateGas(config, {
        to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
        value: parseEther(amount),
      });
      setGasEstimate(result.toString());
    };
    fetchGasEstimate().then(r => console.log(r));
  }, [amount]);
  console.log("gasEstimate", gasEstimate);

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
          use Flame to send a donation for feeding the squirrels and other cute rehabbed small animals at the place
          where i took this squirrel that i personally rescued with my own hands
        </h3>
      </div>
      <div className="send-tip-main">
        {userAccount?.address && (
          <div>
            <div className="send-tip-address">
              <p>sending donation to: {TO}</p>
            </div>
            <div className="send-tip-meat">
              <div>
                <p className="underlined">from: {userAccount.address}</p>
              </div>
              <div>
                <p>amount: <input type="text"
                                  placeholder="0.00"
                                  onChange={updateAmount}
                                  value={amount}/>
                  <button type="button"
                          className="send-tip-button"
                          onClick={sendTip}>
                    Send Tip
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
