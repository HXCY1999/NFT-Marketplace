
import { Web3Dependencies } from "types/hook";
import { hookFactory as createNetworkHook, UseNetworkHook } from "./useNetwork";
import { hookFactory as createListedNftsHook, UseListedNftsHook } from "./useListdNft";

export type Web3Hooks = {
    useNetwork: UseNetworkHook;
    useListedNfts: UseListedNftsHook;
}

export type SetupHooks = {
    (d: Web3Dependencies): Web3Hooks
}

export const setupHooks: SetupHooks = (deps) => {
    return {
        useNetwork: createNetworkHook(deps),
        useListedNfts: createListedNftsHook(deps),
    }
}