import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '../../modules/header/header_user'
import Footer from '../../modules/footer/footer'
import Post from '../../components/post_user'
import WhitePlus from "../../assets/white_plus.png"
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import SEO from '../../data/next-seo.config';

export default function Home({ posts }) {
    return (
        <div>
            <NextSeo title={`${SEO.title} - Blog`} />
            <Header />

            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">

            </div>


            <div className='max-w-4xl mx-auto text-lg'>

                <div className='pb-4'>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            </div>

            <Footer />
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