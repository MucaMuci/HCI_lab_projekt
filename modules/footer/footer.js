import LogoImg from '../../assets/logo.png';
import WhatsappImg from '../../assets/whatsapp.png';
import TwitterImg from '../../assets/twitter.png';
import FacebookImg from '../../assets/facebook.png';
import InstagramImg from '../../assets/instagram.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <section className=' bg-hci-header'>
            <main className=' max-w-5xl mx-auto '>
                <div className=" flex  items-center flex-row justify-around ">
                    <div className='hidden sm:flex items-center py-2'>
                        <Image
                            src={LogoImg}
                            width={100}
                            height={100}
                        />
                        <div>
                            <h1 className='text-white text-4xl'>
                                MEDUZA
                            </h1>
                            <h2 className='text-white text-lg'>
                                rent a boat with us!
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center self-start sm:self-center text-sm sm:text-base py-2'>
                        <h1 className='text-white'>
                            Feel free to contact us via:
                        </h1>
                        <h2 className='text-white'>
                            meduza@gmail.com
                        </h2>
                        <h3 className='text-white'>
                            +385 99 827 6859
                        </h3>
                    </div>
                    <div className='flex flex-col  pr-2 self-start sm:self-center text-sm sm:text-base py-2'>
                        <div>
                            <h1 className='text-white'>
                                Or on any of our social

                            </h1>
                            <h2 className='text-white'>
                                media accounts:
                            </h2>
                        </div>
                        <div className='flex flex-row '>
                            <div className='pr-1'>
                                <Image
                                    src={WhatsappImg}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className='pr-1'>
                                <Image
                                    src={TwitterImg}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className='pr-1'>
                                <Image
                                    src={FacebookImg}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className='pr-1'>
                                <Image
                                    src={InstagramImg}
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Footer;