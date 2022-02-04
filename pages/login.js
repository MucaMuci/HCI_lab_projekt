import LogoImg from '../assets/logo.png';
import LogoImg2 from '../assets/logo2.png';
import Image from 'next/image';
import GoogleImg from '../assets/google.png';

const Login = () => {
    return (
        <section className='h-screen bg-hci-bg'>
            <main className='flex justify-center '>
                <div className='hidden sm:block sm:self-center'>
                    <Image
                        src={LogoImg2}
                        width={100}
                        height={100}
                    />
                </div>
                <div className='pt-4 px-6'>
                    <div className='bg-white flex flex-col border border-gray-300 px-5 pb-5'>
                        <div className='text-5xl self-center pt-2'>MEDUZA</div>
                        <h2 className='text-4xl self-center pb-8 text-center'>Rent a Boat Company</h2>

                        <div className='flex flex-col items-center'>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg ' placeholder='Username'></input>
                            <div className='py-1'></div>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg' placeholder='Password'></input>
                            <div className='flex justify-end w-11/12'>
                                <div className=''>
                                    <bottun className='text-hci-modra font-medium '>
                                        Forgotten your password?
                                    </bottun>
                                </div>
                            </div>
                            <div className='pt-6 flex justify-center w-11/12'>
                                <button className='bg-hci-modra text-white text-medium text-lg rounded w-full py-1 shadow-btn-sjena'>Log In</button>
                            </div>
                            <div className='flex w-11/12 justify-center pt-2'>
                                <div className='self-center border border-solid w-full h-0 border-gray-300'></div>
                                <div className='px-2'>OR</div>
                                <div className='self-center border border-solid w-full h-0 border-gray-300'></div>
                            </div>
                            <div className='pt-2 pb-5 flex justify-center w-11/12 '>
                                <button className='flex justify-center text-medium rounded w-full py-1 shadow-btn-sjena'>
                                    <Image
                                        src={GoogleImg}
                                        width={25}
                                        height={25}
                                    />
                                    <div className='pl-2 font-medium text-lg'>Continue with Google</div>
                                </button>
                            </div>
                            {/* <div className=''>
                                <bottun className='text-hci-modra font-medium'>
                                    Forgotten your password?
                                </bottun>
                            </div> */}

                        </div>

                    </div>
                    <div className='pb-5'></div>
                    <div className='bg-white border flex justify-center py-3 border-gray-300'>
                        <div className='pr-3 font-medium'>
                            Don&apos;t have an account?
                        </div>

                        <button className='text-hci-modra font-medium'>Register</button>
                    </div>
                </div>
                <div className='hidden sm:block sm:self-center'>
                    <Image
                        src={LogoImg}
                        width={100}
                        height={100}
                    />
                </div>
            </main>
        </section>
    );
};

export default Login;