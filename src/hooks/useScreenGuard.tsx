import { useEffect, useState } from "react";
import { useNavigationState } from "@react-navigation/native";

export function useScreenGuard(screenName: string){
    const [sessionTime, setSissionTime] = useState(0);
    const navigationState = useNavigationState(state => state);

    useEffect(() => {
        const currentScreen = navigationState.routes[navigationState.index];
    },[sessionTime])
}