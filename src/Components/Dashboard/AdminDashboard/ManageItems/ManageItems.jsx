
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';

const ManageItem = () => {
  const item = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosPublic.patch(`/menus/update/${item.data._id}`, data)
      .then((res) => {
        if (res.data?.data?._id) {
          Swal.fire('Updated!', 'The item has been updated.', 'success');
          reset();
          navigate("/dashboard/allItems")
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire('Error!', 'Something went wrong during update.', 'error');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-xl shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">Edit Menu Item</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            {...register('name')}
            defaultValue={item.data?.name}
            required
            placeholder="Product Name"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex gap-4">
            <input
              type="number"
              {...register('price')}
              defaultValue={item.data?.price}
              required
              placeholder="Price"
              className="w-1/2 p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
            />
            <select
              {...register('category')}
              defaultValue={item.data?.category}
              required
              className="w-1/2 p-4 border border-orange-300 rounded-xl bg-white text-gray-600"
            >
              <option disabled value="">
                Select Category
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Popular</option>
              <option>Drinks</option>
              <option>Soup</option>
            </select>
          </div>

          <textarea
            {...register('recipe')}
            defaultValue={item.data?.recipe}
            required
            placeholder="Product Description"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
          />

          {/* 
          <input
            type="file"
            {...register('image')}
            className="w-full border border-orange-300 rounded-xl p-3 text-gray-500"
          />
          */}

          <input
            type="submit"
            value="Update Item"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 hover:border hover:border-orange-500 transition-all duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default ManageItem;
