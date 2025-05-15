import React from "react";

interface UserConnectionCardProps {
  name: string;
  title: string;
  image: string;
  isConnecting?: boolean;
}

const UserConnectionCard: React.FC<UserConnectionCardProps> = ({
  name,
  title,
  image,
  isConnecting = false,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden max-w-sm w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-4px] p-0">
      {/* Photo with Gradient Overlay and Name */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-110"
          role="img"
        />
        {/* Gradient overlay from top for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        
        {/* Name and status overlay */}
        <div className="absolute top-0 left-0 right-0 p-5 text-white backdrop-blur-[2px]">
          <h2 className="text-xl font-semibold drop-shadow-md">
            {name}
          </h2>
          <div className="flex items-center mt-1 text-sm text-white/90 drop-shadow-sm">
            {isConnecting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Connecting</span>
              </>
            ) : (
              <span>{title}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConnectionCard;
