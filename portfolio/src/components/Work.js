import React from 'react'
import WorkItem from './WorkItem'
import textData from '../assets/text-data.js'

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.workItems = textData
    this.state = {
      activeWorkItem: 0
    }
    this.alterActiveWorkItem = this.alterActiveWorkItem.bind(this)
  }

  alterActiveWorkItem(event, index) {
    this.setState({
      activeWorkItem: index
    })
  }

  render() {
    return (
      <div className="work">
        <div className="item-list">
          <ul>
            {
              this.workItems.map((el, index) => {
                return <li
                          key={el.id}
                          onClick={(event) => {this.alterActiveWorkItem(event, index)}}
                        >
                        {el.name}
                        </li>
              })
            }
          </ul>
        </div>
        <WorkItem item={this.workItems[this.state.activeWorkItem]} />
      </div>
    )
  }
}

export default Work
