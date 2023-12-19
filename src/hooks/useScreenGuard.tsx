import { useEffect, useState } from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigationState } from "@react-navigation/native";

export function useScreenGuard(screenName: string){
    const [sessionTime, setSessionTime] = useState(0);
    const navigationState = useNavigationState(state => state);

    async function handleAuthentication(){
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Sessão Expirada'
        });

        if(auth.success){
            setSessionTime(0);
        }else {
            handleAuthentication();
        }
    }

    useEffect(() => {
        if(sessionTime < 5){
            const timer = setTimeout(() => {
                setSessionTime(prevState => prevState + 1);
                console.log(sessionTime);
            }, 1000);

            return () => clearTimeout(timer);
        }else {
            if(navigationState.routes) {
                const currentState = navigationState.routes[navigationState.index];

                if(currentState.name === screenName) {
                    handleAuthentication();
                }
            }
        }
    },[sessionTime])
}