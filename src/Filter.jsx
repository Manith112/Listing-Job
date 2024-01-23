import React from 'react'
import close from "./images/icon-remove.svg"
const Filters = ({
    filters,
    clearAll,
    clearFilter
}) => {
   

    return (
        <div className="filters-container">
            <div className="filters">
                <div className="active-filters">
                    {filters.map((tag, index) => {
                        return (
                            <h3 key={index} className="filter-tag">{tag}
                                <button onClick={() => {clearFilter(tag)}} className="remove-btn">
                                  <img src = {close}/>
                                </button>
                            </h3> 
                        )
                       
                    })}
                </div>
                <button onClick={() => {clearAll()}} className="clear-btn" >Clear</button>
            </div>
        </div>
    )
}

export default Filters;