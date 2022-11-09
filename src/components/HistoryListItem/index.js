import './index.css'

const HistoryItem = props => {
  const {eachItem, onDeleteClicked} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDelete = () => {
    onDeleteClicked(id)
  }

  return (
    <li className="history-item">
      <div className="history-leftItem">
        <p>{timeAccessed}</p>
        <img alt="domain logo" className="logo-img" src={logoUrl} />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <div>
        <img
          alt="delete"
          onClick={onDelete}
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </div>
    </li>
  )
}

export default HistoryItem
