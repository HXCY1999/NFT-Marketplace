import {useHooks} from "@/components/provider/web3";


export const useAccount = () => {
    const hooks = useHooks()
    const swrRes = hooks.useAccount("");

    return {
        account: swrRes
    }
}