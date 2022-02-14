import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../modules/footer/footer'
import Header from '../../modules/header/header'
import { NextSeo } from 'next-seo'
import SEO from '../../data/next-seo.config';
import EditImg from "../../assets/edit.png"


export default function PostPage({
    frontmatter: { title, date, image },
    slug,
    content,
}) {
    return (
        <>
            <NextSeo {...SEO} />
            <Header />
            <div className="flex flex-col pt-10 pb-4 bg-gradient-to-b from-hci-gradient to-white"></div>
            <div className=" bg-hci-siva-2 w-full  py-2 mb-4">
                <div className='max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-end'>
                    <div className="text-4xl">
                        {title}
                    </div>
                    <div className='post-date'>
                        {date}
                    </div>
                </div>
            </div>
            <div className='max-w-5xl mx-auto'>
                <div className='max-w-5xl '>
                    <div className='w-full flex justify-end'>
                        <button className='border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra items-center w-fit px-3 mb-3  flex '>
                            <div className='flex text-white justify-center pr-2'>
                                Edit
                            </div>
                            <div className='pt-1'>
                                <Image
                                    src={EditImg}
                                    width={18}
                                    height={18}
                                    alt="Edit"
                                />
                            </div>
                        </button>
                    </div>
                    <div className="">
                        <Image src={image}
                            width={1152}
                            height={618}
                            alt='cover'
                        />
                    </div>

                    <div className=''>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}