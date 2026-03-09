import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

export default function SendPoll() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [options, setOptions] = useState(['', '', '']);

  // Update selected image when returning from camera roll
  useEffect(() => {
    if (location.state?.selectedImage) {
      setSelectedImage(location.state.selectedImage);
    }
  }, [location.state]);

  const handleImageSelect = () => {
    navigate('/camera-roll');
  };

  const handleAddOption = () => {
    if (options.length < 5) {
      setOptions([...options, '']);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleDeleteOption = (index: number) => {
    if (options.length > 2) { // Keep at least 2 options
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="bg-[#0f172a] border-8 border-[#334155] rounded-[40px] shadow-2xl p-7 w-full max-w-[800px] h-[400px] flex gap-0">
        {/* Image Selection Column */}
        <div className="flex-1 pr-5 flex items-center justify-center">
          <button
            onClick={handleImageSelect}
            className="bg-[#1e293b] border-2 border-dashed border-[#475569] rounded-xl w-full h-full flex items-center justify-center hover:border-[#64748b] transition-colors overflow-hidden relative"
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[#94a3b8] text-[17px] font-bold">+ Tap to Select Image</span>
            )}
          </button>
        </div>

        {/* Options Column */}
        <div className="flex-1 border-l-2 border-r-2 border-[#1e293b] px-5 flex flex-col">
          <h2 className="text-[#e2e8f0] text-[19px] font-bold mb-4">Options</h2>
          
          <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <span className="text-[#cbd5e1] text-[17px] flex-shrink-0">•</span>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="flex-1 bg-[#1e293b] border border-[#475569] rounded-lg px-3 py-2 text-[#cbd5e1] text-[16px] focus:outline-none focus:border-[#64748b] transition-colors placeholder:text-[#64748b]"
                  placeholder={`Option ${index + 1}`}
                />
                {options.length > 2 && (
                  <button
                    onClick={() => handleDeleteOption(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#94a3b8] hover:text-[#f87171] p-1"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {options.length < 5 && (
            <button
              onClick={handleAddOption}
              className="bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-full w-12 h-12 flex items-center justify-center text-white text-[24px] font-bold shadow-lg"
            >
              +
            </button>
          )}
        </div>

        {/* Actions Column */}
        <div className="w-[200px] pl-5 flex flex-col justify-between gap-4">
          <button
            onClick={() => navigate('/poll-responses')}
            className="bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-xl py-3 text-white text-[14px] font-bold shadow-lg"
          >
            Responses
          </button>
          
          <button
            onClick={() => navigate('/post-confirmation')}
            className="bg-gradient-to-br from-[#2b7fff] to-[#06b6d4] hover:opacity-90 transition-opacity rounded-xl py-3 text-white text-[15px] font-bold shadow-lg"
          >
            Post
          </button>
          
          <button
            onClick={() => navigate('/send-to-friends')}
            className="bg-gradient-to-br from-[#eab308] to-[#f59e0b] hover:opacity-90 transition-opacity rounded-xl py-3 text-[#451a03] text-[15px] font-bold shadow-lg"
          >
            Send
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="bg-[#475569] hover:bg-[#5a6678] transition-colors rounded-xl py-3 text-white text-[16px] font-bold shadow-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}