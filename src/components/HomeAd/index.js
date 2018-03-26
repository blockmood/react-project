import React from 'react'
import './index.less'

const HomeAd = ({data}) => (
    <div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
            {data.map((item, index) => {
                return <div key={index} className="ad-item float-left">
                    <a href={item.link} target="_blank">
                        <img src={item.img} alt={item.title}/>
                    </a>
                </div>
            })}
        </div>
    </div>
)

export default HomeAd