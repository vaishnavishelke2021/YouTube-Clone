const Comment = ({ data }) => {
  const { id, uimg, name, text } = data;

  return (
    <div
      key={id}
      className="flex space-x-4  py-3 px-3 items-center align-top rounded-sm "
    >
      <img className="w-9 h-9 rounded-full" src={uimg} alt="" />
      <div>
        <h2 className="font-semibold text-[0.9rem] text-gray-800">{name}</h2>
        <p className="text-[0.95rem] text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="bg-[#f6f6f6] rounded-md">
      <Comment key={comment.id} data={comment} />
      <div className="ml-7 border-l-2 border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default Comment;
