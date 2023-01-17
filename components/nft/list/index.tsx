

import {FunctionComponent} from "react";
import NTFItem from "@/components/nft/item";

const NFTList: FunctionComponent = () => {

    return(
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <NTFItem />
            </div>

        </div>
    )

}

export default NFTList;