const item = useLoaderData();
const { image, name, recipe, price } = item;
const axiosSecure = UseAxios();
// const navigate = useNavigate();
const orderData = {
  image,
  name,
  price,
};
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();
const onSubmit = (data) => {
  const orderInfo = { ...data, orderData };
  axiosSecure.post('/booking', orderInfo).then((res) => {
    if (res.data.insertedId) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Order Has Been Successfully Booked',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });
  reset();
  navigate('/menu');
};
