

import { CryptoHookFactory } from "types/hook";
import useSWR from "swr";
import {useEffect} from "react";



type UseListedNftsResponse = {}
type ListedNftsHookFactory = CryptoHookFactory<any, UseListedNftsResponse>

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>

export const hookFactory: ListedNftsHookFactory = ({contract}) => () => {
    const {data, ...swr} = useSWR(
        contract ? "web3/useListedNfts" : null,
        async () => {
            const coreNfts = await contract!.getAllNftsOnSale();

            const nfts = [] as any;
            return nfts;
        }
    )
    return {
        ...swr,
        data: data || [],
    };
}