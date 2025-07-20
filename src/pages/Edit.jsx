import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const editBlog = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const formData = new FormData(e.target);
    const rawDetails = Object.fromEntries(formData);

    const details = Object.fromEntries(
      Object.entries(rawDetails).filter(([_, value]) => value.trim() !== "")
    );

    if (Object.keys(details).length === 0) {
      toast.warn("No changes made. Please fill at least one field.");
      return;
    }

    try {
      const response = await axios.put(
        `https://687af359abb83744b7ee4691.mockapi.io/blogs/${id}`,
        details
      );
      if (response.status === 200) {
        toast.success("Blog edited successfully");
        goBack();
      }
    } catch (error) {
      console.error(error);
      toast.error("Blog edit failed");
    }
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <button
        onClick={goBack}
        className="w-[40px] h-[40px] text-2xl absolute top-1.5 right-1.5 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-amber-100 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        x
      </button>
      <form
        onSubmit={editBlog}
        className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Edit Blog</h2>

        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 text-gray-300">
            Title
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subtitle" className="mb-1 text-gray-300">
            Subtitle
          </label>
          <input
            type="text"
            name="Subtitle"
            id="subtitle"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 text-gray-300">
            Description
          </label>
          <input
            type="text"
            name="Description"
            id="description"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1 text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            name="Image"
            id="image"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1 text-gray-300">
            Author
          </label>
          <input
            type="text"
            name="Author"
            id="author"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="paragraph" className="mb-1 text-gray-300">
            Paragraph
          </label>
          <textarea
            name="Paragraph"
            id="paragraph"
            rows="4"
            className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-200"
        >
          Edit Blog
        </button>
      </form>
    </div>
  );
};

export default Edit;
