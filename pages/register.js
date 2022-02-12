import LogoImg from '../assets/logo.png';
import LogoImg2 from '../assets/logo2.png';
import GoogleImg from '../assets/google.png';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import SEO from '../data/next-seo.config';

const Register = () => {
    return (
        <section className='h-screen flex justify-center bg-hci-bg'>
            <NextSeo title={`${SEO.title} - Register`} description={SEO.description} />
            <main className='flex justify-center items-center'>
                <div className='hidden sm:block'>
                    <Image
                        src={LogoImg2}
                        width={100}
                        height={100}
                        alt="Logo2"
                    />
                </div>
                <div className='px-6 font-inter'>
                    <div className='bg-white flex flex-col border border-gray-300 px-5 pt-3 pb-8'>
                        <div className='text-5xl self-center pt-2 font-merriweather'>MEDUZA</div>
                        <h2 className='text-4xl self-center pb-8 text-center font-merriweather'>Rent a Boat Company</h2>

                        <div className='flex flex-col items-center'>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg ' placeholder='Username'></input>
                            <div className='py-1'></div>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg' placeholder='Email'></input>
                            <div className='py-1'></div>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg' placeholder='Password'></input>

                            <div className='pt-6 flex justify-center w-11/12'>
                                <button className='bg-hci-modra text-white text-medium text-lg rounded w-full py-1 shadow-btn-sjena'>Register</button>
                            </div>
                            <div className='flex w-11/12 justify-center pt-2'>
                                <div className='self-center border border-solid w-full h-0 border-gray-300'></div>
                                <div className='px-2'>OR</div>
                                <div className='self-center border border-solid w-full h-0 border-gray-300'></div>
                            </div>
                            <div className='pt-2 flex justify-center w-11/12 '>
                                <button className='flex justify-center text-medium rounded w-full py-1 shadow-btn-sjena'>
                                    <Image
                                        src={GoogleImg}
                                        width={25}
                                        height={25}
                                        alt="Google"
                                    />
                                    <div className='pl-2 font-medium text-lg'>Sign up with Google</div>
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
                            Already have an account?
                        </div>
                        <Link href="/login">
                            <button className='text-hci-modra font-medium'>Log in</button>
                        </Link>
                    </div>
                </div>
                <div className='hidden sm:block '>
                    <Image
                        src={LogoImg}
                        width={100}
                        height={100}
                        alt="Logo1"
                    />
                </div>
            </main>
        </section>
    );
};

export default Register;