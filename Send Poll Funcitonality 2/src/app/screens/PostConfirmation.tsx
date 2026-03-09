import { useNavigate } from 'react-router';

export default function PostConfirmation() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Simulate posting
    setTimeout(() => {
      navigate('/send-to-friends');
    }, 300);
  };

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="bg-[#0f172a] border-8 border-[#334155] rounded-[40px] shadow-2xl p-12 w-full max-w-[800px] h-[400px] flex flex-col items-center justify-center">
        {/* Question */}
        <h1 className="text-white text-[32px] font-bold text-center mb-12">
          Are you sure you want to post?
        </h1>

        {/* Buttons */}
        <div className="flex gap-6">
          <button
            onClick={handleConfirm}
            className="bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-2xl px-12 py-4 text-white text-[20px] font-bold shadow-xl min-w-[140px]"
          >
            Yes
          </button>
          
          <button
            onClick={() => navigate('/send-poll')}
            className="bg-[#475569] hover:bg-[#5a6678] transition-colors rounded-2xl px-12 py-4 text-white text-[20px] font-bold shadow-xl min-w-[140px]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}