import { css } from "@emotion/react";

export const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
`;

export const TodoAddition = css`
    position: relative;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    height: 60px;

    background-color: #eee;
`;

export const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 3px solid white;
    padding: 0px 50px 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;

    background-color: #eee;
`;

export const TodoAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ffffff00;
    transition: all 1s ease;;
    cursor: pointer;
    &:hover {
        transform: translateY(-50%) rotate(180deg) scale(1.5);
    }
`;

export const TodoList = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 7px; 
    padding: 10px;
    width: 600px;

    background-color: #fafafa;
`;

export const TodoContent = css`
   width: 85%;
   height: 40px;
`;

export const ItemGroup = css`
    display: flex;
    align-items: center;
    height: 40px;
`;

export const ItemButton = css`
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    color: #999;
    background-color: #ffffff00;
    cursor: pointer;
    &:hover {
        color: #121212;
    }
`;

export const modalContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    background-color: #000000aa;
    `;
    
export const modalBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
    `;
    
export const modalHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 40px;
`;
    
export const modalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;
    
export const modalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 120px;
`;
export const modalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
    box-shadow: 0px 0px 0.1px 0.5px black;
`;

    
export  const modalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
`;
export const modalButton = css`
    border: none;
    width: 50%;
    height: 100%;
    cursor: pointer;
    background-color: #ffffff00;
    &:first-of-type {
        border-right: 1px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
