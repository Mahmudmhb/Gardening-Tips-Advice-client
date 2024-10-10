import PostModal from "../modals/postModal";

const CreatePost = () => {
  return (
    <div>
      <div className="bg-[#242526]">
        <div className="w-full max-w-2xl p-4   mx-auto mb-6">
          <div className="mb-4">
            <PostModal />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CreatePost;
