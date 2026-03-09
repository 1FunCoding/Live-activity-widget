import { useNavigate } from 'react-router';

export default function PollResponses() {
  const navigate = useNavigate();

  const polls = [
    {
      question: 'Which jacket should I buy?',
      percentage: 70,
      color: 'from-[#2b7fff] to-[#06b6d4]',
    },
    {
      question: 'Where for dinner?',
      percentage: 45,
      color: 'from-[#fa957e] to-[#d01566]',
    },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="bg-[#0f172a] border-8 border-[#334155] rounded-[40px] shadow-2xl p-7 w-full max-w-[800px] h-[400px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-[28px] font-bold">Previous Poll Responses</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#475569] hover:bg-[#5a6678] transition-colors rounded-xl px-6 py-2.5 text-white text-[14px] font-medium shadow-lg"
          >
            Back
          </button>
        </div>

        {/* Poll Results */}
        <div className="space-y-8">
          {polls.map((poll, index) => (
            <div key={index} className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
              <h3 className="text-white text-[18px] font-medium mb-4">{poll.question}</h3>
              
              {/* Progress Bar Container */}
              <div className="relative">
                <div className="h-8 bg-[#0f172a] rounded-lg overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${poll.color} transition-all duration-500 ease-out flex items-center justify-end pr-3`}
                    style={{ width: `${poll.percentage}%` }}
                  >
                    <span className="text-white text-[16px] font-bold">{poll.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create New Poll Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/send-poll')}
            className="bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-xl px-8 py-3 text-white text-[16px] font-bold shadow-lg"
          >
            Create New Poll
          </button>
        </div>
      </div>
    </div>
  );
}