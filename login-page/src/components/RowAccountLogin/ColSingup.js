import { Link } from 'react-router-dom';

function ColSingup() {
  return (
    <div className="col-singnup">
      <span>No account? </span>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default ColSingup;
