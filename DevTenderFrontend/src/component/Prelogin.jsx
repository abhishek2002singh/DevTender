import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Prelogin = () => {
 
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);

  const faqItems = [
    {
      question: 'What is DevTender?',
      answer: 'DevTender is a platform for developers to connect, collaborate, and build amazing projects together. Whether you’re looking to form a team or showcase your work, DevTender is the go-to hub for the developer community.',
    },
    {
      question: 'What features does DevTender offer?',
      answer: 'DevTender includes features like sending/receiving project invitations, browsing developer profiles, managing requests, and building teams for collaborations.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply create an account or log in to access the platform. Set up your profile to let others know about your skills, and start connecting!',
    },
    {
      question: 'Can I search for specific developers or projects?',
      answer: 'Yes, DevTender includes a powerful search feature to find developers by skillset or browse projects by category and technologies.',
    },
    {
      question: 'Is DevTender free to use?',
      answer: 'Yes, DevTender is completely free for all users. Additional premium features may be added in the future.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center">
      {/* Welcome Section */}
      <div className="text-center text-gray-800 p-6 max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-600">DevTender</h1>
        <p className="text-lg leading-relaxed mb-6">
          Connect, collaborate, and build your dream projects with the developer community.
        </p>
        <div className="flex gap-4 justify-center">
            <Link to='/login'>
          <button
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-purple-600 hover:to-indigo-500 transition duration-300"
           
          >
            Login to Get Started
          </button>
          </Link>
          {/* <Link>
          <button
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition duration-300"
            onClick={() => navigate('/signup')}
          >
            Create an Account
          </button>
          </Link> */}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Browse developer profiles and view their skills, projects, and interests.</li>
          <li>Send and receive collaboration requests for team projects.</li>
          <li>Track incoming requests and manage connections seamlessly.</li>
          <li>Powerful search to find developers or projects by category and skillset.</li>
          <li>User-friendly dashboard to manage all activities in one place.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Frequently Asked Questions</h2>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b last:border-none mb-4">
              <button
                className="flex justify-between items-center w-full py-3 text-left text-lg font-medium text-indigo-700 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                {openQuestion === index ? (
                  <FiMinus size={20} />
                ) : (
                  <FiPlus size={20} />
                )}
              </button>
              {openQuestion === index && (
                <p className="text-gray-600 text-base px-4 py-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prelogin;
