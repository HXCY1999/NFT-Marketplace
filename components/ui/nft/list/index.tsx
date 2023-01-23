

import {FunctionComponent} from "react";
import NTFItem from "@/components/ui/nft/item";
import {NFTMeta} from "@/types/nft";

type NFTListProps = {
    nfts:NFTMeta[]
}

const NFTList: FunctionComponent<NFTListProps> = ({nfts}) => {
    return(
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {nfts.map(nft =>
            <div key = {nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <NTFItem
                item={nft}/>
                </div>
            )}
        </div>
    )
}

export default NFTList;