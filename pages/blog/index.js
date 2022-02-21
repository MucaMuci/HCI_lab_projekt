import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '../../modules/header/header'
import Footer from '../../modules/footer/footer'
import Post from '../../components/post'
import WhitePlus from "../../assets/white_plus.png"
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import SEO from '../../data/next-seo.config';

export default function Home({ posts }) {
    return (
        <div className='min-h-screen relative'>
            <NextSeo title={`${SEO.title} - Blog`} description={SEO.description} />
            <Header />

            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">

            </div>
            <div className="bg-hci-siva-2 flex justify-center py-2">
                <div className="text-4xl">
                    BLOG LIST
                </div>
            </div>

            <div className='max-w-5xl mx-auto text-lg pb-32'>
                <div className='pt-4'>
                    <div className='hover:cursor-pointer border shadow-btn-sjena rounded-2xl border-hci-modra bg-hci-modra items-center  justify-center flex'>
                        <div className='flex text-white justify-center pr-2'>
                            Create new blog
                        </div>
                        <div className='pt-1'>
                            <Image
                                src={WhitePlus}
                                width={18}
                                height={18}
                                alt="WhitePlus"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex font-medium text-lg pb-5 pt-5'>
                    <div className='flex w-2/6 pl-2'>
                        MADE BY
                    </div>
                    <div className='flex w-4/6 sm:w-3/6 '>
                        POST NAME
                    </div>
                    <div className='hidden sm:flex w-1/6 '>
                        DATE
                    </div>
                </div>




                <div className='pb-4'>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}

export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}