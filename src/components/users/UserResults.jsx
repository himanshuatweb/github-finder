import { HashLoader } from 'react-spinners';
import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserItem from './UserItem';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='flex item-center justify-center'>
        <HashLoader size={200} color='#fff' />
      </div>
    );
  }
}
export default UserResults;
