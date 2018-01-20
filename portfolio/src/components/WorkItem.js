import React from 'react'

class WorkItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: 0
    }
    this.changeActiveImage = this.changeActiveImage.bind(this)
  }

  changeActiveImage(index) {
    this.setState({
      activeImage: index
    })
  }

  render() {
    return (
      <div className="work-item">
        <div className="sep">
          <img
            alt={this.props.item.name}
            src={this.props.item.images ? this.props.item.images[this.state.activeImage] : this.props.item.icon}
            className="main-image"
          />
            {
              this.props.item.images ?
              (
                <div className="images-list">
                  <i
                    className="fa fa-chevron-left images-prev"
                    aria-hidden="true"
                    onClick={(event) => {this.changeActiveImage((this.state.activeImage === 0 ? this.props.item.images.length - 1 : this.state.activeImage - 1))}}
                  ></i>
                  {
                    this.props.item.images.map((el, index) => {
                      return <img key={index} alt={this.props.item.name} src={el} onClick={(event) => {this.changeActiveImage(index)}} />
                    })
                  }
                  <i
                    className="fa fa-chevron-right images-next"
                    aria-hidden="true"
                    onClick={(event) => {this.changeActiveImage((this.state.activeImage === this.props.item.images.length - 1 ? 0 : this.state.activeImage + 1))}}
                  ></i>
                </div>
              ) : ''
            }
        </div>
        <div className="sep">
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.description}</p>
          <div className="work-item-links">
            <a href={this.props.item.github}><i className="fa fa-github" aria-hidden="true"></i>Github</a>
            {this.props.item.liveLink ? <a href={this.props.item.liveLink}><i className="fa fa-play" aria-hidden="true"></i>View Project</a> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkItem
