/** @jsxImportSource @emotion/react */
import React from 'react';
import Icon from "awesome-react-icons/lib/cjs/Icon";
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as S from './Style'
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';


const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
        <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
                // console.log(itemId) //확인
                // window.location.href = itemId;
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/',
                    elemBefore: () => <AiFillHome />
                },
                {
                    title: 'T1',
                    itemId: '/t1',
                    elemBefore: () => <HiHome />
                },
                {
                    title: 'T2',
                    itemId: '/t2',
                    elemBefore: () => <GrTest />
                },
                {
                    title: 'Sample',
                    itemId: '/sample/input/1',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'input',
                            itemId: '/sample/input/1',
                            elemBefore: () => <BiListCheck />    
                        }
                    ]
                },
                {
                    title: 'List',
                    itemId: '/users',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: '사용자 전체 조회',
                            itemId: '/users',
                            elemBefore: () => <FaUsers />    
                        }
                    ]
                },
        ]}
        />
        </aside>
    );
};

export default MainAside;