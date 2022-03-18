import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './scss/navigationBar.scss';
import HomeIcon from "../../asset/images/home.png";
import HomeIconActive from "../../asset/images/home-active.png";
import UserIcon from "../../asset/images/user.png";
import UserIconActive from "../../asset/images/user-active.png";
import CardIcon from "../../asset/images/card.png";
import CardIconActive from "../../asset/images/card-active.png";
import NoticeIcon from "../../asset/images/notice.png";
import NoticeIconActive from "../../asset/images/notice-active.png";

function NavigationBar(props) {
    const path = useLocation();
    const splitPath = path.pathname.split("/")[1];
    const [noti, setNoti] = useState(true);
    return (
        <div className="navigation-bar">
            <ul>
                <li className={splitPath == "" ? "active" : ""}>
                    <NavLink to="/" >
                        {
                            splitPath == "" ? <img src={HomeIconActive} alt="" /> : <img src={HomeIcon} alt="" />
                        }
                    </NavLink>
                </li>
                <li className={splitPath == "notification" ? "active" : ""}>
                    <NavLink to="/notification" className={noti == true && 'noti'}>
                        {
                            splitPath == "notification" ? <img  src={NoticeIconActive} alt="" /> : <img src={NoticeIcon} alt="" />
                        }
                    </NavLink>
                </li>
                <li className={splitPath == "card" ? "active" : ""}>
                    <NavLink to="/card" >
                        {
                            splitPath == "card" ? <img src={CardIconActive} alt="" /> : <img src={CardIcon} alt="" />
                        }
                    </NavLink>
                </li>
                <li className={splitPath == "profile" ? "active" : ""}>
                    <NavLink to="/profile" >
                        {
                            splitPath == "profile" ? <img src={UserIconActive} alt="" /> : <img src={UserIcon} alt="" />
                        }
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavigationBar;