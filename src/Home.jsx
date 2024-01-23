
import React from "react";
const Home = ({ 
  
        company,
        logo,
        isNew,
        featured,
        position,
        postedAt,
        contract,
        location,
        handleFilters,
        jobTags
      }) => {
    return(
                   
         <div className="list">
                <div className="left">
                <img src={logo} alt="logo" className="image"/>
                <div className="detail">
                    <div className="first-row">
                        <p className="company">{company}</p>
                        {isNew && <button className="new">New!</button>}
                        {featured && <button className="feature">Featured</button>}
                    </div>
                    <p className="job">{position}</p>
                    <div className="detail-item">
                        <li className="day">{postedAt}</li>
                        <li>•</li>
                        <li className="time">{contract}</li>
                        <li>•</li>
                        <li className="location">{location}</li>
                    </div>
                </div>
                </div>
<hr className="line"/>
<div className="tags">
        {jobTags.map((tag, index) => (
          <p key={index} className="tag-button" onClick={() => handleFilters(tag)}>
            {tag}
          </p>
        ))}
      </div>
                
             </div>
         
            
    )
}
export default Home;