import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';
import { BASIC_MENU } from '../../constants/basicMenu';

function Sidebar(props) {
    return (
            <div css={s.layout}>
                    <ul css={s.list}>
                        {
                            // 자동으로 작동이 되도록 
                            BASIC_MENU.map(menu => 
                                <Link key={menu.id} to={menu.path}>
                                    <li css={s.listItem}>{menu.icon}<span css={s.itemText}>{menu.name}</span></li>
                                </Link>
                            )
                        }
                    </ul>
            </div>
    )
}

export default Sidebar;