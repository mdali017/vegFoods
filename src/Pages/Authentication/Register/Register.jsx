import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                .then( () => {})
                .catch(error => console.log(error))
                Swal.fire({
                    title: 'User Created Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                navigate(from, { replace: true });
                
                
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Something is Wrong.. Please Try Again',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            })
    };
    return (
        <>
            <Helmet>
                <title>VEGFOODS | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-700 font-semibold'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photo" {...register("photo", { required: true })} name='photo' placeholder="photo" className="input input-bordered" />
                                {errors.photo && <span className='text-red-700 font-semibold'>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.photo && <span className='text-red-700 font-semibold'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/i })} name='password' placeholder="password" className="input input-bordered" />
                                {/* error validate */}
                                {errors.password?.type === "required" && (
                                    <p className='text-red-700 font-semibold'>Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-700 font-semibold'>Password must be at lest 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-700 font-semibold'>Password must be less than 20 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-700 font-semibold'>Password must be one uppercase One Lowercase one number one special character</p>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <p><small>Already Have An Account?? <Link to='/login' className='text-blue-600 font-semibold'>Please Login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;