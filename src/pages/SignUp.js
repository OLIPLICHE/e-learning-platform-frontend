/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../redux/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-full max-w-sm m-auto bg-gray-200 rounded p-5">
        <header>
                Create an account
        </header>
        <form className="col" onSubmit={handleSubmit(onSubmit)} method="post">
          <input className="w-full p-2 mb-6 bg-green  border-b-2  outline-none focus:bg-gray-300" name="name" placeholder="Name" {...register('name', { required: true })} />
          <input className="w-full p-2 mb-6 bg-green  border-b-2  outline-none focus:bg-gray-300" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="w-full p-2 mb-6 bg-green  border-b-2  outline-none focus:bg-gray-300" name="password" type="password" placeholder="Password" {...register('password', { required: true })} />
          <input className="w-full p-2 mb-6 bg-green  border-b-2  outline-none focus:bg-gray-300" name="password_confirmation" type="password" placeholder="Password Confirmation" {...register('password_confirmation', { required: true })} />
          <input className="w-full bg-green-button text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Sign Up" />
        </form>
        <small className="flex justify-center items-center">
          Already have an account?
          <Link className="cursor-pointer bg-green px-2 text-sm" to="/users/login">Log In</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
