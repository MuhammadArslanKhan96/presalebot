import { connection, idlFile, programID, USER_SEED } from "@/constants";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { getPresalePDA, getUserInfoPDA } from "./helpers";
import * as anchor from "@project-serum/anchor";
import { AccountLayout } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const getPresaleInfo = async (wallet: AnchorWallet) => {
  const provider = new anchor.AnchorProvider(connection, wallet, {});
  const program = new anchor.Program(idlFile, programID, provider);
  const [presalePDA] = await getPresalePDA();
  // const [userInfo]

  // const userInfo = await getUserInfoPDA(wallet);
  const testWallet = new PublicKey(
    "eiFU5aUhAvFASa1R9LsQREUqv1ByJqPRr4iy6WrwBZh"
  );
  const userInfo = await PublicKey.findProgramAddressSync(
    [Buffer.from(USER_SEED), testWallet.toBuffer()],
    programID
  )[0];

  console.log("");
  try {
    const tx = await program.account.userInfo.fetch(userInfo);
    console.log(tx);
    console.log("from chain: ", tx?.buyTokenAmount.toNumber());
    let amount: any = tx?.buyTokenAmount.toNumber() / LAMPORTS_PER_SOL;
    console.log(
      "divide by lamports: ",
      tx?.buyTokenAmount.toNumber() / LAMPORTS_PER_SOL
    );
    amount = amount.toFixed(2);
    console.log("orignal amount: ", amount);
    // const s = JSON.parse(AccountLayout.decode(accountInfo?.data).state)
    // console.log(AccountLayout.decode(Uint8Array.from(accountInfo?.data));
    const transaction = await program.methods.getPresaleInfo().accounts({
      presaleInfo: presalePDA,
      userInfo: userInfo,
    });
    // .rpc();
    console.log(
      "Logged data: ",
      `https://explorer.solana.com/tx/${transaction}?cluster=devnet`
    );
  } catch (error: any | unknown) {
    console.error("could not log data: ", error.message);
  }
};
