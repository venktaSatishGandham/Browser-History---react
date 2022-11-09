import {Component} from 'react'

import HistoryListItem from '../HistoryListItem/index'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryList extends Component {
  state = {
    historyList: initialHistoryList,
    searchValue: '',
  }

  inputValueChanged = e => {
    this.setState({searchValue: e.target.value})
  }

  onDeleteClicked = id => {
    const {historyList} = this.state
    const remainList = historyList.filter(each => id !== each.id)
    this.setState({historyList: remainList})
  }

  render() {
    const {searchValue, historyList} = this.state
    const filterdList = historyList.filter(each =>
      each.domainUrl.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div>
        <div className="header">
          <img
            alt="app logo"
            className="history-img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="searchBar">
            <img
              alt="search"
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              placeholder="Search History"
              className="search-input"
              value={searchValue}
              onChange={this.inputValueChanged}
            />
          </div>
        </div>
        <div className="history-List">
          {filterdList.length > 0 ? (
            <ul>
              {filterdList.map(eachItem => (
                <HistoryListItem
                  key={eachItem.id}
                  onDeleteClicked={this.onDeleteClicked}
                  eachItem={eachItem}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-page">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryList
