import { Link } from "react-router-dom";


const ShowProfile = ({ user }) => {
  return user && (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="w-full max-w-lg bg-base-300 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold  text-gray-300 mb-6 text-center">User Profile</h2>
        <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-300">Photo URL</label>
            <img
              src={user.photoUrl || 'https://via.placeholder.com/150'}
              alt="User Avatar"
              className="mt-1 w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <p className="mt-1 text-white-500">{user.firstName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name</label>
            <p className="mt-1 text-white-500">{user.lastName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Age</label>
            <p className="mt-1 text-white-500">{user.age}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Skills</label>
            <p className="mt-1 text-white-500">{user.skills}</p>
          </div>
 
          <div>
            <label className="block text-sm font-medium text-gray-300">About</label>
            <p className="mt-1 text-white-500">{user.about}</p>
          </div>
        <div className="mt-6">
          <button
            
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          ><Link to='/app/EditProfile'> EditProfile  </Link>
            
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShowProfile;
