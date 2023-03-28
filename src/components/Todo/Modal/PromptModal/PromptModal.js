/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from "react";
import * as S from "./Style"

const PromptModal = (props) => {
        
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState('');

    //컴퍼넌트(랜더링)이 되었을때, 안되었을때 사용
    useEffect(
        () => {
            setModalContent(props.todo.content);

            const handler = (e) => {
                if(!modalRef.current.contains(e.target)){
                    props.setIsOpen(false);
                }
            }
            document.addEventListener('mousedown', handler);
            return () => {
               document.removeEventListener('mousedown', handler);

            }
        },[]
    );


    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const onSubmitKeyUp = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        props.updateTodo({
            id: props.todo.id,
            content: modalContent
        });
        closeModal();
    }


    return (
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>      
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} type="text" onChange={contentChange} onKeyUp={onSubmitKeyUp} defaultValue={props.todo.content} />

                </main>
                <footer css={S.modalFooter}>
                    <button css={S.modalButton} type="button" onClick={onSubmit} >확인</button>
                    <button css={S.modalButton} type="button" onClick={closeModal}>취소</button>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;