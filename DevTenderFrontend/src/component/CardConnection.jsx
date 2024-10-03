

const CardConnection = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-96 rounded-[10px] overflow-hidden shadow-lg bg-base-300 p-6">
      <img
        src={user.photoUrl}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-400">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-400">Age: {user.age}</p>
        <p className="text-gray-400">Gender: {user.gender}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-400">Skills:</h3>
        <ul className="flex flex-wrap mt-2">
          {user.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 m-1 rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardConnection;
