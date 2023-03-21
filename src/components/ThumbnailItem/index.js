import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, onThumbnailClick, isOpaque} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailList
  const style = isOpaque ? 'opaque' : 'not-opaque'

  const displayImage = () => {
    onThumbnailClick(id)
  }

  return (
    <li className="thumbnail-list">
      <button type="button" onClick={displayImage} className={style}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
