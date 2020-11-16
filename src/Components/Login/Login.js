import React from 'react';
import './Login.css';
import Google from './../../images/Group 573.png'
import Facebook from './../../images/Group 2.png'
const Login = () => {
    return (
        <section className="my-4 ">
            <div className="row">
                <div className="col-md-5  mx-auto ">
                    <form className="border border-secondary p-4">
                    <h5 className="font-weight-bold">Create an account</h5>
                        <div class="form-group m-0 mb-3">
                            <input type="text" name="firstName" placeholder="First Name" class="form-control   " required />
                        </div>
                        <div class="form-group m-0 mb-3">
                            <input type="text" name="lastName" class="form-control" placeholder="Last Name" required/>
                        </div>
                        <div class="form-group m-0 mb-3">
                            <input type="email" name="email" class="form-control" placeholder="User name or email" required/>
                        </div>
                        <div class="form-group m-0 mb-3">
                            <input type="password" placeholder="Password" name="password" class="form-control"  required/>
                        </div>
                        <div class="form-group m-0">
                            <input type="password" placeholder="Confirm password" name="confirmPassword" class="form-control" required />
                        </div>
                        <div class="form-group form-check m-2">
                            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn common-btn btn-success btn-block rounded-0">Create an account</button>
                    <p className="text-center mb-0">Already have account? <span className="text-primary cursor">Login</span></p>
                    </form>
                    <div>
                        <p className="text-center my-3 or">Or</p>

                        <div className="social">
                        <div className="btn my-2 btn-outline-success rounded-pill d-flex mx-4">
                            <div className="google pl-0 ">
                                <img src={Google} style={{height: "20px"}} className=" pl-0 img-fluid" alt=""/>
                            </div>
                            <p className="align-self-center mx-auto  mb-0 text-align-center">Continue with google</p>
                        </div>
                        <div className="btn my-2 btn-outline-info rounded-pill d-flex mx-4">
                            <div className="google pl-0 ">
                                <img src={Facebook} style={{height: "20px"}} className=" pl-0 img-fluid" alt=""/>
                            </div>
                            <p className="align-self-center mx-auto mb-0 text-align-center">Continue with facebook</p>
                        </div>
               
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;