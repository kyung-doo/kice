
import { useState, useLayoutEffect, useCallback } from 'react';

const useUser = () => {

   const [userData, setUserData] = useState<any>(undefined);
   const login = useCallback((isAuto: boolean, id: string, password: string) => {
      // window.$axios.post('/login', {id: id, password: password})
      // .then(res => {
         const data = {
            id,
            isAuto
         }
         if(isAuto) {
            localStorage.setItem('userData', JSON.stringify(data));
         } else {
            sessionStorage.setItem('userData', JSON.stringify(data));
         }
         setUserData(data);
      // });
   },[userData]);

   const logout = useCallback(() => {
      localStorage.clear();
      sessionStorage.clear();
      setUserData(undefined);
   },[userData]);

   useLayoutEffect(() => {
      if(localStorage.getItem("userData")) {
         setUserData(JSON.parse(localStorage.getItem("userData")!));
      } else {
         if(sessionStorage.getItem("userData")){
            setUserData(JSON.parse(sessionStorage.getItem("userData")!));
         }
      }
   }, []);

   return {
      userData,
      login,
      logout
   }
}

export default useUser;