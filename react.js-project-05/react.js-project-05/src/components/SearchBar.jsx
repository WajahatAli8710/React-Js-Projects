import profileImg from '../assets/profileImage.avif'

const SearchBar = () => {
  return (
    <div className="searchBar">
        <div className="input">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Sesech for films, directors, or actors ..." />
        </div>
        <div className="info">
            <i className="ri-notification-3-line"></i>
            <img src={profileImg} alt="" />
        </div>
    </div>
  )
}

export default SearchBar
