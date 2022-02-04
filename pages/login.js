import LogoImg from '../assets/logo.png';
import LogoImg2 from '../assets/logo2.png';
import Image from 'next/image';

const Login = () => {
    return (
        <section className='h-screen bg-hci-bg'>
            <main className='flex justify-center'>
                <div className='hidden sm:block sm:pt-28'>
                    <Image
                        src={LogoImg2}
                        width={100}
                        height={100}
                    />
                </div>
                <div className='pt-4 px-6'>
                    <div className='bg-white flex flex-col border border-gray-300 px-5 pb-5'>
                        <div className='text-5xl self-center'>MEDUZA</div>
                        <h2 className='text-4xl self-center pb-8'>Rent a Boat Company</h2>

                        <div className='flex flex-col items-center'>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg' placeholder='Username'></input>
                            <div className='py-1'></div>
                            <input className='border border-gray-300 w-11/12 rounded py-2 px-1 bg-hci-bg' placeholder='Password'></input>
                            <div className='pt-8 flex justify-center w-11/12'>
                                <button className='bg-hci-modra text-white rounded w-full py-1'>Log In</button>
                            </div>
                        </div>

                    </div>
                    <div className='pb-5'></div>
                    <div className='bg-white border flex justify-center py-3 border-gray-300'>
                        <div className='pr-5 font-medium'>
                            Don&apos;t have an account?
                        </div>

                        <button className='text-hci-modra font-medium'>Register</button>
                    </div>
                </div>
                <div className='hidden sm:block sm:pt-28'>
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