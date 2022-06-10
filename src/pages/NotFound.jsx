import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-6xl font-bold mb-8'>
            404, Hey Look like you are lost !
          </h1>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' /> Back To home
          </Link>
        </div>
      </div>
      {/* <h1>404, Hey ! Look like you are lost</h1>
      <button className='btn'>
        <Link to='\home'>Back To Home</Link>
      </button> */}
    </div>
  );
}

//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

export default NotFound;
