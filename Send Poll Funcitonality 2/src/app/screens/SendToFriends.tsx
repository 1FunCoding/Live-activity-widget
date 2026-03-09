import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function SendToFriends() {
  const navigate = useNavigate();
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  const friends = [
    { id: 1, name: 'Jordan', initials: 'JD', color: 'from-[#00c950] to-[#009966]' },
    { id: 2, name: 'Taylor', initials: 'TW', color: 'from-[#fe9a00] to-[#f54900]' },
    { id: 3, name: 'Alex', initials: 'AJ', color: 'from-[#00b8db] to-[#155dfc]' },
    { id: 4, name: 'Morgan', initials: 'MC', color: 'from-[#8a2be2] to-[#4b0082]' },
    { id: 5, name: 'Sarah', initials: 'SM', color: 'from-[#f6339a] to-[#ec003f]' },
  ];

  const toggleFriend = (id: number) => {
    setSelectedFriends(prev =>
      prev.includes(id)
        ? prev.filter(fid => fid !== id)
        : [...prev, id]
    );
  };

  const handleSend = () => {
    // Simulate sending
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleSendToAll = () => {
    // Simulate sending to all friends
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="bg-[#0f172a] border-8 border-[#334155] rounded-[40px] shadow-2xl p-7 w-full max-w-[800px] h-[400px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-[28px] font-bold">Send to Friends</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#475569] hover:bg-[#5a6678] transition-colors rounded-xl px-6 py-2.5 text-white text-[14px] font-medium shadow-lg"
          >
            Back
          </button>
        </div>

        {/* Friends Selection */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex gap-8 items-end">
            {friends.map((friend) => (
              <button
                key={friend.id}
                onClick={() => toggleFriend(friend.id)}
                className="flex flex-col items-center gap-2 group relative"
              >
                <div className="relative">
                  <div
                    className={`w-[80px] h-[80px] rounded-full bg-gradient-to-br ${friend.color} shadow-xl flex items-center justify-center transition-all ${
                      selectedFriends.includes(friend.id)
                        ? 'scale-105'
                        : 'group-hover:scale-105'
                    }`}
                  >
                    <span className="text-white text-[24px] font-bold">{friend.initials}</span>
                  </div>
                  
                  {/* Selection Indicator - Blue X Circle */}
                  {selectedFriends.includes(friend.id) && (
                    <div className="absolute bg-[#2b7fff] left-[64px] rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[22px] top-[-4px]">
                      <div className="flex items-center justify-center size-full">
                        <div className="rotate-45">
                          <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 13 13">
                            <line stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.625" x1="6.5" x2="6.5" y1="2.708" y2="10.292" />
                            <line stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.625" x1="2.708" x2="10.292" y1="6.5" y2="6.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-white/70 text-[16px] font-medium">{friend.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Send Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleSendToAll}
            className="bg-gradient-to-br from-[#2b7fff] to-[#06b6d4] hover:opacity-90 transition-opacity rounded-2xl px-12 py-4 text-white text-[20px] font-bold shadow-xl"
          >
            Send to All
          </button>
          <button
            onClick={handleSend}
            disabled={selectedFriends.length === 0}
            className={`bg-gradient-to-br from-[#fa957e] to-[#d01566] rounded-2xl px-12 py-4 text-white text-[20px] font-bold shadow-xl transition-all ${
              selectedFriends.length === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:opacity-90'
            }`}
          >
            Send to Selected
          </button>
        </div>
      </div>
    </div>
  );
}