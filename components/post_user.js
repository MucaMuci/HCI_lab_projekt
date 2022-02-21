import Link from 'next/link'
import Image from 'next/image'
import RightArrow from '../assets/right_arrow_blue.png'

export default function Post({ post }) {
    return (
        <div className='border shadow-btn-sjena rounded-2xl p-5 mb-12 w-80 sm:w-96 mx-auto md:w-auto'>
            <div className='flex flex-col md:flex-row md:flex-1'>
                <div className=' md:pl-2 md:pr-5 '>
                    <Image src={post.frontmatter.cover_image}
                        width={320}
                        height={320}
                        alt="Cover Image" />
                </div>
                <div className='flex md:flex-1 flex-col md:h-80'>
                    <div className='text-lg '>
                        <div className='text-lg'>{post.frontmatter.date}</div>
                    </div>

                    <div className='flex font-medium text-4xl  pb-8'>
                        <h3>{post.frontmatter.title}</h3>

                    </div>

                    <div className='flex md:flex-1'>
                        <div>{post.frontmatter.excerpt}</div>
                    </div>


                    <div className='flex'>
                        <Link href={`/blog_user/${post.slug}`}>

                            <button className='flex'>
                                <div className='text-hci-modra'>
                                    Learn more
                                </div>
                                <div className='pl-1'>
                                    <Image src={RightArrow}
                                        width={11}
                                        height={11}
                                        alt="RightArrow" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}