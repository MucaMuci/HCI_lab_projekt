import LogoImg from '../assets/logo.png';
import LogoImg2 from '../assets/logo2.png';
import Image from 'next/image';

const Register = () => {
    return (
        <section>
            <main className='flex flex-row'>
                <div>
                    <Image
                        src={LogoImg2}
                        width={100}
                        height={100}
                    />
                </div>
                <div >
                    <div className='flex flex-col border'>
                        <h1>MEDUZA</h1>
                        <h2>Rent a Boat Company</h2>

                        <input className='border' placeholder='Username'></input>
                        <input className='border' placeholder='Email'></input>
                        <input className='border' placeholder='Password'></input>
                        <button>Register</button>

                    </div>
                    <div className='border flex flex-row'>
                        <div>
                            Already have an account?
                        </div>
                        <button>Log In</button>
                    </div>
                </div>
                <div>
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

export default Register;