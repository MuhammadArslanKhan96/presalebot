// import { Program } from "@project-serum/anchor";
import idl from "./utils/idl.json";
import { Connection, PublicKey, clusterApiUrl, Keypair } from "@solana/web3.js";
import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";

export const commitmentLevel = "confirmed";
export const endPoint =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(
  clusterApiUrl("devnet"),
  commitmentLevel
);
// "9GjY2rnKN32itbFCFq4mrcSrZBQnZr3wguweBAWGfJ9M"
// "AHfmmyUaTKZVpvHtCcJpUXuaPsf5Wk23ZDWVVFVvM7DB"
export const programID = new PublicKey(
  "6wGfn9ZNYPqqoWZWAXxi29RwBX7RwW3aJs827kB8DM6Z"
);
// export const programInterface = JSON.parse(JSON.stringify(idl));
// export const systemProgram = new PublicKey("11111111111111111111111111111111");
// const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
//   "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
// );
export const idlFile: any = idl;
export const PRESALE_SEED = "PRESALE_SEED";
export const PRESALE_VAULT = "PRESALE_VAULT";
export const USER_SEED = "USER_SEED";

export const tokenProgramID = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

export const presaleAuthority = new PublicKey(
  "FQMQ2Damu3FfcM439nJ8n2hDmNr1g4DJfTfYBtDPnKJY"
); //wallet address of the preson who created the presale

// export const tokenAddress = new PublicKey(
//   "2XbxVjY7C6WNbXs8jFynBpCdAxLBXaFExf3ZVDYb1PYW"
// );

("DDHn3nzkGfDmpjZ2gZ2EzmihaKVuBZCZ4PhiNE5EgAUn");
export const tokenAddress = new PublicKey(
  "A2qip3joUpEynFuuCKcmkJZUHccSViv5siyiRWRDjyMS"
);
// "H6CQNt594c6A4tKNqnSghF73LdUbdvJ1sTn5Hn1JkL8q"

export const tokenAta = new PublicKey(
  "BcDPzpNmrnsnZZS3VxJripApoymLFSMb5LLwa4gPkBrU"
);

const adminSecretArray = [
  150, 183, 82, 29, 204, 43, 255, 42, 136, 139, 32, 229, 15, 159, 189, 170, 94,
  196, 234, 81, 228, 79, 124, 40, 62, 93, 165, 81, 133, 12, 124, 17, 213, 255,
  9, 215, 73, 53, 67, 156, 12, 134, 148, 168, 35, 236, 133, 132, 255, 213, 170,
  186, 102, 125, 249, 48, 252, 196, 18, 68, 170, 124, 151, 41,
];
export const adminKeyPair = Keypair.fromSecretKey(
  Uint8Array.from(adminSecretArray)
);

export const privateKey = Keypair.fromSecretKey(
  bs58.decode(
    "4pjhxuQM28a4Nbcp5zvh3igQKiFuT81eSurE7NyY9DdM6HCMK8btf7VjDkDLAthDKeqAJESbXYwaCtn5NsGwFEi8"
  )
);

// "EvTAmStgVeSAKGwgeZHJrJ4F9rMFSFVWMC6jBTbkXhL8"
export const adminWallet = new PublicKey(
  "BY6f8AuhiN53qGegReuaK2kh2rU45ab8hqSaiwYcM1vm"
);
