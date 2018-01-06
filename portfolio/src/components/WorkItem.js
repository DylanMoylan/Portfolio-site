import React from 'react'

function WorkItem(props) {
  return (
    <div className="work-item">
      {props.item.name}
    </div>
  )
}

export default WorkItem
