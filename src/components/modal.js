import { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
`

const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    opacity: 0.5;
`

const Content = styled.div`
    position: absolute;
    top: 100px;
    left: calc(50% - 250px);
    padding: 10px;
    border-radius: 10px;
    width: 500px;
    height: 400px;
    background-color: #fff;
    box-sizing: border-box;
`

function Modal({children, closeModal}) {
    
    return (
        <ModalWrapper>
            <BackDrop onClick={closeModal}/>
            <Content>
                {children}
            </Content>
        </ModalWrapper>
    )
}

export default Modal;