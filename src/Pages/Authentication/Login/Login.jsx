import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    // const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                title: 'User Login Successfully',
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
                title: 'Something is Wrong.. Please Log in Again',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })
    };
    // console.log(watch("example"));
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value;
        
        console.log(user_captcha_value);

        if(validateCaptcha(user_captcha_value) == true){
              setDisabled(false)
        }else{
              setDisabled(true)
        }
    }

    return (
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="captcha" ref={captchaRef} name='captcha' placeholder="captcha" className="input input-bordered" />
                            {/* <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    <p><small>NEW Here?? <Link to='/register' className='text-blue-600 font-semibold'>CREATE AN ACCOUNT</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;