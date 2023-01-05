import { FC, HTMLProps } from "react";
import styled from "styled-components";
import Button from "./Button";

export interface Props extends HTMLProps<HTMLInputElement> {
    /**
     * 모달 header
    */
    head?: JSX.Element;
    /**
     * 모달 footer
    */
    foot?: JSX.Element;
    /**
     * 모달 닫기 state
    */
    setModal : ( a: boolean ) => void;
}


/**
 * 모달 컴포넌트
 */
const Modal: FC<Props & {as?: any}> = ({ 
    className,
    head,
    children,
    foot,
    ...props
}) => {
    let { setModal } = props;
   return (
     <Styled.Modal {...props}>
         <div className={`modal-content ${className}`}>
            <div className="modal-header fj">
                {head}
                <button className="btn" onClick={()=>setModal(false)}>x</button>
            </div>
            <div className="modal-body">
                {children}
            </div>
            <div className="modal-footer">
                {foot}
            </div>
         </div>
     </Styled.Modal>
   );
}

const Styled = {
   Modal: styled.div<Props>`
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 30;
    .modal{
        &-content{
            width: 500px;
            height: 500px;
            background: #ccc;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        &-header{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
    }
   `,
}

export default Modal;