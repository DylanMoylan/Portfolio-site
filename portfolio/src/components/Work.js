import React from 'react'
import WorkItem from './WorkItem'
import textData from '../assets/text-data.js'

// import FocusGroupsApp from '../assets/focus-group-icon.png'

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeWorkItem: 0,
      workItems: textData.map((el) => {
        el.hoverState = false
        return el
      })
    }
    this.alterActiveWorkItem = this.alterActiveWorkItem.bind(this)
    this.hoverListItem = this.hoverListItem.bind(this)
  }

  alterActiveWorkItem(event, index) {
    this.setState({
      activeWorkItem: index
    })
  }

  hoverListItem(status, index) {
    this.setState({
      workItems: this.state.workItems.fill(status, index, index)
    })
  }

  render() {
    return (
      <div className="work">
        <WorkItem item={this.state.workItems[this.state.activeWorkItem]} />
        <div className="item-list">
          <ul>
            {
              this.state.workItems.map((el, index) => {
                return <li
                          key={el.id}
                          onClick={(event) => {this.alterActiveWorkItem(event, index)}}
                          onMouseEnter={(e)=> {this.hoverListItem(true, index)}}
                          onMouseLeave={(e)=> {this.hoverListItem(false, index)}}
                          style={{backgroundImage: 'url(' + el.icon + ')'}}
                        >
                          <div
                            className={ this.state.workItems[index].hoverState ? 'work-item-tooltip' : 'work-item-tooltip hidden' }
                          >
                            {el.name}
                          </div>
                        </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Work
