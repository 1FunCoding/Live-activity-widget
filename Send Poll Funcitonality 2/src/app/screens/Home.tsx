import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-9032r3ko6b";
import imgImage1 from "figma:asset/c8be1a032071d8c575a41a3353e0522f877a1bfa.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[32px] font-medium text-white tracking-tight">Hi Bob!</h1>
          <h1 className="text-[32px] font-medium text-white tracking-tight">Let's Talk!</h1>
          <h1 className="text-[32px] font-medium text-white tracking-tight">Connect!</h1>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-3 gap-5">
          {/* Profile Column */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-7 h-[400px] flex flex-col items-center justify-between">
            {/* Profile Avatar */}
            <div className="relative mt-4">
              <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#dee2ea] to-[#656671] shadow-lg relative overflow-hidden">
                <img alt="Profile" className="absolute inset-0 max-w-none mix-blend-lighten object-cover pointer-events-none size-full translate-x-[-43px]" src={imgImage1} />
                <div className="absolute left-[31.5px] top-[118px] w-[85px] h-[5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 5">
                    <line stroke="white" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="82.5" y1="2.5" y2="2.5" />
                  </svg>
                </div>
                <div className="absolute left-[57.42px] top-[37.66px] w-[33.821px] h-[33.414px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8206 43.4135">
                    <path d={svgPaths.p25be8200} stroke="white" strokeLinecap="round" strokeWidth="10" />
                  </svg>
                </div>
                <div className="absolute left-[38.76px] top-[89.27px] w-[70.054px] h-[21.69px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0536 31.6901">
                    <path d={svgPaths.pf5a9400} stroke="white" strokeLinecap="round" strokeWidth="10" />
                  </svg>
                </div>
                <div className="absolute right-[-4px] top-0 w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#00c950] to-[#009689] shadow-md" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/70 text-[18px] leading-[27px]">
                Status: Online<br />Not in activity
              </p>
            </div>

            <div className="w-full space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/15 transition-colors rounded-2xl py-3 text-white text-[16px] font-medium shadow-lg">
                Change Status
              </button>
              <button className="w-full bg-white/10 hover:bg-white/15 transition-colors rounded-2xl py-3 text-white text-[16px] font-medium shadow-lg">
                View Profile
              </button>
            </div>
          </div>

          {/* Actions Column */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-7 h-[400px] flex flex-col justify-between">
            <button
              onClick={() => navigate('/send-poll')}
              className="w-full bg-gradient-to-br from-[#2b7fff] to-[#9810fa] hover:opacity-90 transition-opacity rounded-2xl py-3 text-white text-[20px] font-medium shadow-xl"
            >
              Start Activity
            </button>
            <button
              onClick={() => navigate('/send-poll')}
              className="w-full bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-2xl py-3 text-white text-[20px] font-medium shadow-xl"
            >
              Send Poll
            </button>
            <button
              className="w-full bg-gradient-to-br from-[#e5aac3] to-[#9a52c7] hover:opacity-90 transition-opacity rounded-2xl py-3 text-white text-[20px] font-medium shadow-xl"
            >
              View Calendar
            </button>
          </div>

          {/* Friends Column */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-7 h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {/* Friend - Jordan */}
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00c950] to-[#009966] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">JD</span>
                </div>
                <div>
                  <p className="text-white text-[20px] font-medium">Jordan</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#05df72]" />
                    <span className="text-white/50 text-[14px]">Online</span>
                  </div>
                </div>
              </div>

              {/* Friend - Taylor */}
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#fe9a00] to-[#f54900] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">TW</span>
                </div>
                <div>
                  <p className="text-white text-[20px] font-medium">Taylor</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#05df72]" />
                    <span className="text-white/50 text-[14px]">Online</span>
                  </div>
                </div>
              </div>

              {/* Friend - Alex */}
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00b8db] to-[#155dfc] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">AJ</span>
                </div>
                <div>
                  <p className="text-white text-[20px] font-medium">Alex</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#da4147]" />
                    <span className="text-white/50 text-[14px]">Silent</span>
                  </div>
                </div>
              </div>

              {/* Friend - Morgan */}
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#8a2be2] to-[#4b0082] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">MC</span>
                </div>
                <div>
                  <p className="text-white text-[20px] font-medium">Morgan</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                    <span className="text-white/50 text-[14px]">Away</span>
                  </div>
                </div>
              </div>

              {/* Friend - Sarah */}
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#f6339a] to-[#ec003f] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">SM</span>
                </div>
                <div>
                  <p className="text-white text-[20px] font-medium">Sarah</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                    <span className="text-white/50 text-[14px]">Away</span>
                  </div>
                </div>
              </div>

              {/* Add Friend Button */}
              <button className="w-[70px] h-[70px] rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center hover:bg-white/15 transition-colors mx-auto">
                <span className="text-white/50 text-[40px] leading-none">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
