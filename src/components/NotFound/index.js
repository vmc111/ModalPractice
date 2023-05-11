// Write your code here
import Header from '../Header'
import './index.css'

const Notfound = () => (
  <>
    <Header />
    <div className="not-found">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="img"
      />
      <h1>Lost your way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default Notfound
