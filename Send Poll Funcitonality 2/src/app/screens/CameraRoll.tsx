import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function CameraRoll() {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc3MzA2ODYzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzczMDAxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI5Nzg3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1643316408393-9328a1e973ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwbGF0dGV8ZW58MXx8fHwxNzczMDI1MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1569832724830-0b4ab7b52ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNoJTIwd2F2ZXN8ZW58MXx8fHwxNzczMDg4MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1614022837662-e74b0b53dcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NzMwNTM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1732644144489-b1974816d3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlnaHRzJTIwbmlnaHR8ZW58MXx8fHwxNzczMDIwNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1620649214867-d0f1661f0d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYnJlYWtmYXN0JTIwaGVhbHRoeXxlbnwxfHx8fDE3NzMwODQwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1636280703520-2bff23d567eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBlYWtzfGVufDF8fHx8MTc3MzA5NTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725274999686-4035dc6f473c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwZ2FyZGVuJTIwYmxvb218ZW58MXx8fHwxNzczMDk1MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const selectPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  const handleUsePhoto = () => {
    if (selectedPhoto !== null) {
      navigate('/send-poll', { state: { selectedImage: photos[selectedPhoto] } });
    }
  };

  return (
    <div className="size-full bg-gradient-to-br from-[#0f172a] via-[#1d293d] to-[#0f172a] flex items-center justify-center p-8">
      <div className="bg-[#0f172a] border-8 border-[#334155] rounded-[40px] shadow-2xl p-7 w-full max-w-[800px] h-[400px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-[28px] font-bold">Camera Roll</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#475569] hover:bg-[#5a6678] transition-colors rounded-xl px-6 py-2.5 text-white text-[14px] font-medium shadow-lg"
          >
            Back
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-5 gap-3 mb-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => selectPhoto(index)}
              className={`aspect-square bg-[#1e293b] border-2 rounded-xl transition-all hover:border-[#64748b] overflow-hidden relative ${
                selectedPhoto === index
                  ? 'border-[#ec4899] border-solid ring-2 ring-[#ec4899]'
                  : 'border-[#475569]'
              }`}
            >
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {selectedPhoto === index && (
                <div className="absolute inset-0 bg-[#ec4899]/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fa957e] to-[#d01566] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {selectedPhoto !== null && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleUsePhoto}
              className="bg-gradient-to-br from-[#fa957e] to-[#d01566] hover:opacity-90 transition-opacity rounded-xl px-8 py-3 text-white text-[16px] font-bold shadow-lg"
            >
              Use Selected Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}