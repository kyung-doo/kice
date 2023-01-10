import { FC, HTMLProps } from "react";
import styled from "styled-components";
import Button from "./Button";

export interface Props extends HTMLProps<HTMLDivElement> {
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
            min-height: 500px;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;

        }
        &-header{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        &-body{
            padding: 20px 10px;
        }
        &-footer{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;

        }
    }
   `,
}

export default Modal;