import { ComponentType, FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from "../components/Button";
import useUser from "../hooks/useUser";



const Header:FC = () => {

   const location = useLocation();
   const navigate = useNavigate();
   const { userData, logout } = useUser();
   

   useEffect(()=>{
      console.log("경로: ", location);
   }, [location]);

console.log(userData);
   return (
      <Styled.Header>
         header 영역
         {!userData 
            ?
            <Button onClick={() => navigate('/login')}>로그인</Button>
            :
            <Button onClick={logout}>로그아웃</Button>
         }
      </Styled.Header>
   );
};


const Styled = {
   Header: styled.div`
      position: relative;
      width: 100%;
      height: 100px;
      background-color: #ccc;
   `,
}

export default Header;