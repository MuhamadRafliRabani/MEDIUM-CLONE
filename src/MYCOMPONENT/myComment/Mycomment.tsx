// components/Comment.js
const Comment = ({ username, comment, timeAgo }: string | undefined | null) => {
  return (
    <div className="mx-auto my-4 w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          <div>
            <h4 className="font-semibold">{username}</h4>
            <p className="text-sm text-gray-500">{timeAgo}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{comment}</p>
      <div className="mt-4 flex justify-between">
        <button className="text-sm text-gray-500">Reply</button>
        <button className="text-sm text-gray-500">Like</button>
      </div>
    </div>
  );
};

export default Comment;
