const Card = (props) => {
  let { user } = props;
  return (
    <div className="bg-[#FFFFFF] w-[22%] p-2 rounded-xl h-fit">
      <div
        className="bg-top bg-cover  w-full aspect-[1/1] bg-[#CBD3D6] rounded-xl"
        style={{ backgroundImage: `url(${user.imageUrl})` }}
      ></div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-medium text-[#232c3c] font-mono">
          {user.fullName}
        </h1>
        <p className="text-lg font-normal text-[#0d1a2d] font-mono leading-tight">
          {user.description}
        </p>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <button className="text-2xl font-medium font-mono">
              <i className="ri-heart-line"></i>
              {user.like}
            </button>
            <button className="text-2xl font-medium font-mono">
              <i className="ri-chat-3-line"></i>
              {user.comment}
            </button>
          </div>
          <button className="bg-[#CBD3D6] px-6 py-1 text-xl font-mono rounded-full">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
