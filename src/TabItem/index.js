import './index.css'

const TabItem = props => {
  const {details, changeTab, isActive} = props
  const {tabId, displayText} = details
  const onClickTab = () => {
    changeTab(tabId)
  }
  const Active = isActive ? 'tab' : 'text-button'

  return (
    <li>
      <button type="button" onClick={onClickTab} className={Active}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
