import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newCaht } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu icon" />
                <div onClick={()=> newCaht()} className="new-chat">
                    <img src={assets.plus_icon} alt="New chat icon" />
                    {extended ? <p>Add New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                                    <img src={assets.message_icon} alt="message icon" />
                                    <p>{item.length<15?item:item.slice(0,15)+' ...'}</p>
                                </div>
                            )
                        })}

                    </div> : null
                }

            </div>

            <div className="button">
                <div className="button-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="button-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="button-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar