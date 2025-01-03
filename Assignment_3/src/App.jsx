import {useDispatch, useSelector} from 'react-redux'
import UserCard from './components/UserCard'
import { useEffect } from 'react';
import { setUsers } from './features/user/userSlice';


function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)

  useEffect(()=>{
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((apiRes) => apiRes.map((user) => ({ ...user, liked: false })))
        .then((data) => dispatch(setUsers(data)))
        .catch((error) => error.message);
    };

  fetchData();
  }, []);

  console.log(users);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App
