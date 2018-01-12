import React from 'react'

function WorkItem(props) {
  return (
    <div className="work-item">
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <div className="work-item-links">
          <a href={props.item.github}><i className="fa fa-github" aria-hidden="true"></i>Github</a>
          {props.item.liveLink ? <a href={props.item.liveLink}><i className="fa fa-play" aria-hidden="true"></i>View Project</a> : ''}
        </div>
      </div>
      <img alt={props.item.name} src={props.item.icon} />
    </div>
  )
}

export default WorkItem
