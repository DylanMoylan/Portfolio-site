import React from 'react'
import WorkItem from './WorkItem'
import textData from '../assets/text-data.js'
import { Link } from 'react-router-dom'

/*<div className="item-list">
    {
      this.state.workItems.map((el, index) => {
        return <Link className="work-list-link" key={index} to={`/${el.id}`}>
                <div className="work-list-cover"><div style={{margin:'0 20px'}}>{el.coverName}</div></div>
                <div
                  className="work-list-item"
                  style={{backgroundImage: 'url(' + el.icon + ')'}}
                >
                </div>
              </Link>
      })
    }
</div>*/

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeWorkItem: props.activeItem ? props.activeItem : 0,
      workItems: textData
    }
    this.alterActiveWorkItem = this.alterActiveWorkItem.bind(this)
  }

  alterActiveWorkItem(event, index) {
    this.setState({
      activeWorkItem: index
    })
  }

  render() {
    let next = this.state.activeWorkItem === this.state.workItems.length - 1 ? 0 : this.state.activeWorkItem + 1
    let prev = this.state.activeWorkItem === 0 ? this.state.workItems.length - 1 : this.state.activeWorkItem - 1
    return (
      <div className="work">
        <Link className="jumbo-scroll" to={this.state.workItems[prev].id}><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
          <WorkItem item={this.state.workItems[this.state.activeWorkItem]} />
        <Link className="jumbo-scroll" to={this.state.workItems[next].id}><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
      </div>
    )
  }
}

export default Work
