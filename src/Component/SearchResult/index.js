import './index.css'

const SearchResult = props => {
  const {userDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-con1">
      <div className="history-item-con2">
        <p className="history-time">{timeAccessed}</p>

        <div className="history-item-con3">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-domain-logo"
          />

          <div className="history-item-con4">
            <p className="history-title">{title}</p>

            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        onClick={onRemoveHistory}
        className="history-delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="history-del-icon"
        />
      </button>
    </li>
  )
}

export default SearchResult
