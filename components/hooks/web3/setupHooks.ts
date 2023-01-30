
import { Web3Dependencies } from "types/hook";
import { hookFactory as createAccountHook, UseAccountHook } from "./useAccount";

export type Web3Hooks = {
    useAccount: UseAccountHook;
}

export type SetupHooks = {
    (d: Web3Dependencies): Web3Hooks
}

export const setupHooks: SetupHooks = (deps) => {
    return {
        useAccount: createAccountHook(deps)
    }
}