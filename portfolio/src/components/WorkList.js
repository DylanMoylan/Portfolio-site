import React from 'react'
import {Link} from 'react-router-dom'
import textData from '../assets/text-data.js'

function WorkList(props) {
  return (
    <div className="work-list">
      {
        textData.map((el, index) => {
          return (
            <Link key={index} to={`/${el.id}`}>
              <div
                className="work-list-item"
                style={{backgroundImage: 'url(' + el.icon + ')'}}
              >

              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default WorkList
