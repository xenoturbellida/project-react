import {MainStore} from "../stores/mainStore";
import {useContext} from "react";
import {MobXProviderContext} from "mobx-react";

export function useStores(): MainStore {
    return useContext(MobXProviderContext) as MainStore;
}
