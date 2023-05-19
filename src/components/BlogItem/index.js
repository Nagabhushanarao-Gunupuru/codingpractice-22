// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails
  return (
    <>
      <li className="list-container">
        <div className="card-container">
          <h1 className="title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
      <hr className="hr-line" />
    </>
  )
}
export default BlogItem
