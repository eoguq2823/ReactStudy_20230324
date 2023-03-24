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



const MainAside = () => {
    return (
        <aside css={S.style}>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
                console.log(itemId)
            }}
            items={[
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
                    itemId: '/sample',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'input',
                            itemId: '/sample/input/1',
                            elemBefore: () => <BiListCheck />    
                        }
                    ]
                },
        ]}
        />
        </aside>
    );
};

export default MainAside;