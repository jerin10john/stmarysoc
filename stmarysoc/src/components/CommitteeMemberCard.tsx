import React from 'react';

interface CommitteeMemberCardProps {
  name: string;
  image: string;
  username: string;
  status?: string;
  time?: string;
}

const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({ name, image, username, status = 'Connecting', time = '12m ago' }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 max-w-sm w-full mx-auto flex flex-col items-center gap-y-4 transition-opacity duration-300">
      {/* Name & Status */}
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <div className="flex items-center justify-center" role="status">
        <svg className="animate-spin h-4 w-4 text-gray-400 mr-2" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
        <span className="text-sm text-gray-500">{status}</span>
      </div>
      {/* Profile Image */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
        <img src={image} alt={`Photo of ${name} smiling`} className="object-cover w-full h-full rounded-xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 via-white/0 to-transparent pointer-events-none" />
      </div>
      {/* Bottom Section */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center">
          <img src={image} alt={`Photo of ${name} smiling`} className="w-6 h-6 rounded-full object-cover border-2 border-white shadow" />
          <span className="text-sm font-medium text-gray-900 ml-2">@{username}</span>
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2"></span>
          <span className="text-xs text-gray-400 ml-1">{time}</span>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-900 hover:scale-105 transition" aria-label={`Add ${name} to the group`}>
          + Add member
        </button>
      </div>
    </div>
  );
};

export default CommitteeMemberCard; 