import Like from "./Like";

const Post = (props) => {
  const formattedDate = new Date(props.post.createdAt).toLocaleString();
  let comments = 0;
  return (
    <div
      role="singlePost"
      key={props.post._id}
      className="my-3 pt-2 pb-0 p-4 border shadow-sm rounded-lg bg-white border border-gray-200"
    >
      <div className="pt-2">
        <div className="flex flex-row">
          <div
            className="size-12 bg-cover bg-center rounded-full"
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/e5/3c/6b/e53c6bfa45da3f684fda60c4b21b1307.jpg)`,
            }}
          ></div>
          <div className="flex flex-col justify-center ms-4">
            {/* TODO: Add some useful label to the below div to identify it as user's name */}
            <div className="text-base font-bold">
              {props.post.user_data[0].firstName}{" "}
              {props.post.user_data[0].lastName}
            </div>
            <div className="mt-1 text-xs text-neutral-500">{formattedDate}</div>
          </div>
        </div>
        <p role="singlePostContent" className="my-3 ml-2 text-md text-black">
          {props.post.message}
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 border-t px-4 py-2 text-xs text-neutral-500">
        <Like
          post_id={props.post._id}
          likes={props.post.likes}
          userID={props.userID}
          token={props.token}
          setToken={props.setToken}
        />

        <div className="flex justify-end items-center align-middle">
          <span className="me-2">{comments}</span>
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
