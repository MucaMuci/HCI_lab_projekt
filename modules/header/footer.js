import LogoImg from '../../assets/logo.png';
import WhatsappImg from '../../assets/whatsapp.png';
import TwitterImg from '../../assets/twitter.png';
import FacebookImg from '../../assets/facebook.png';
import InstagramImg from '../../assets/instagram.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <section>
            <main>
                <div className="inline-flex">
                    <Image
                        src={LogoImg}
                        width={100}
                        height={100}
                    />
                    <div>
                        <h1>
                            MEDUZA
                        </h1>
                        <h2>
                            rent a boat with us!
                        </h2>
                    </div>
                    <div>
                        <h1>
                            Feel free to contact us via:
                        </h1>
                        <h2>
                            meduza@gmail.com
                        </h2>
                        <h3>
                            +385 99 827 6859
                        </h3>
                    </div>
                    <div >
                        <div>
                            <h1>
                                Or on any of our social

                            </h1>
                            <h2>
                                media accounts:
                            </h2>
                        </div>
                        <div className='inline-flex'>
                            <Image
                                src={WhatsappImg}
                                width={30}
                                height={30}
                            />
                            <Image
                                src={TwitterImg}
                                width={30}
                                height={30}
                            />
                            <Image
                                src={FacebookImg}
                                width={30}
                                height={30}
                            />
                            <Image
                                src={InstagramImg}
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Footer;