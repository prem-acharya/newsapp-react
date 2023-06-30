import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={!imageUrl?"https://us.123rf.com/450wm/artinspiring/artinspiring2006/artinspiring200600436/148221591-tv-presenter-online-service-or-platform-television-host-in-studio.jpg?ver=6":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
