import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='border shadow-btn-sjena rounded-2xl mb-4'>

            <Link href={`/blog/${post.slug}`}>
                <div className='flex '>
                    <div className='flex w-2/6 font-medium pl-2'>
                        <div>{post.frontmatter.author}</div>
                    </div>

                    <div className='flex w-4/6 sm:w-3/6 text-hci-modra '>
                        <h3>{post.frontmatter.title}</h3>

                    </div>
                    <div className='hidden sm:flex w-1/6 font-medium'>
                        <div className='post-date'>{post.frontmatter.date}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}