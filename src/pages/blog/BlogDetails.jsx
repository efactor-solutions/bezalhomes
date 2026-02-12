import React from "react";
import { useParams, Link } from "react-router-dom"
import { Spin } from "antd";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import search_icon from "../../assets/search_icon.png"
import { FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6"

export default function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = React.useState({})
    const [content, setContent] = React.useState("")
    const [loading, setLoading] = React.useState(true)
    const [relatedArticles, setRelatedArticles] = React.useState([])
    const [showShareModal, setShowShareModal] = React.useState(false)
    const titleSplit = React.useMemo(
        () => {
            return blog.title && blog.title.toUpperCase().split(":",2)
        }, [blog]
    )

    React.useEffect(() => {
        if (!slug) return

        // Load metadata from posts index in public folder
        fetch('/blog/posts/posts.json')
            .then(res => res.json())
            .then(data => {
                const found = Array.isArray(data) ? data.find(p => p.slug === slug) : null
                if (found) setBlog(found)
                else setBlog({})
                // Load related articles (exclude current post)
                if (Array.isArray(data)) {
                    const related = data.filter(p => p.slug !== slug).slice(0, 2)
                    setRelatedArticles(related)
                }
            })
            .catch(err => console.log(err))

        // Load markdown content for the post
        fetch(`/blog/posts/${slug}.md`)
            .then(res => res.text())
            .then(md => setContent(md))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [slug])

    const RelatedArticles = () => {
        if (relatedArticles.length === 0) return null

        return (
            <div className="mt-16 border-t-2 border-[#606060] pt-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-8 uppercase">
                    Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {relatedArticles.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/blog/${article.slug}`}
                            className="group relative rounded-md overflow-hidden h-64 md:h-72 cursor-pointer block"
                        >
                            <img
                                src={article.header_image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-semibold text-lg md:text-xl uppercase leading-tight mb-2 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-200 text-xs md:text-sm line-clamp-2">
                                    {article.subtitle}
                                </p>
                                <p className="text-gray-200 text-xs md:text-sm">
                                    {article.date.split("-")[0]}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    const ShareModal = () => {
        const currentUrl = window.location.href
        const title = blog.title || "Check out this article"

        const shareLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`
        }

        const handleShare = (url) => {
            window.open(url, '_blank', 'width=600,height=400')
        }

        return (
            <>
                {/* Modal Backdrop */}
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
                    onClick={() => setShowShareModal(false)}
                />
                
                {/* Modal Content */}
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <div 
                        className="bg-white rounded-lg shadow-xl p-8 w-80 pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-semibold text-[#333333] mb-6 text-center">Share Article</h2>
                        
                        <div className="flex flex-col gap-4">
                            {/* Facebook */}
                            <button
                                onClick={() => handleShare(shareLinks.facebook)}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                <FaFacebook className="text-2xl text-blue-600" />
                                <span className="text-gray-800 font-medium">Share on Facebook</span>
                            </button>

                            {/* X (Twitter) */}
                            <button
                                onClick={() => handleShare(shareLinks.twitter)}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <FaXTwitter className="text-2xl text-black" />
                                <span className="text-gray-800 font-medium">Share on X</span>
                            </button>

                            {/* WhatsApp */}
                            <button
                                onClick={() => handleShare(shareLinks.whatsapp)}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
                            >
                                <FaWhatsapp className="text-2xl text-green-500" />
                                <span className="text-gray-800 font-medium">Share on WhatsApp</span>
                            </button>
                        </div>

                        <button
                            onClick={() => setShowShareModal(false)}
                            className="w-full mt-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {showShareModal && <ShareModal />}
            {
                !loading ?
                    <>
                        {/* Header */}
                        <div className="w-full flex flex-col relative h-[400px] md:h-[600px] lg:h-[600px] ">
                            <div style={{ filter: "brightness(50%)" }} className="relative bg-slate-600 h-full">
                                <img src={blog.header_image} alt="Blogs" className="!w-full !h-full block object-cover" />
                            </div>
                            <div className="flex justify-center items-center mx-auto absolute w-full h-[100%]">
                                <div className=" flex flex-col justify-center items-center text-center w-full gap-12">

                                <p className="text-white text-lg text-center mt-10 font-extralight">Blog | {blog?.date}</p>
                                    <p className="text-slate-100  md:text-3xl text-2xl font-normal Inter text-center max-w-4xl">
                                        {titleSplit?.[0]}: <br />
                                        
                                        {titleSplit?.[1]}
                                       
                                        {blog.subtitle}
                                    
                                    </p>
                                   
                                </div>
                            </div>
                        </div>

                        <div className="container !my-16">

                            {/* The Title */}
                            <h1 className=" flex justify-between text-md font-semibold border-b-2 border-[#606060] pb-5">
                            <span>    
                            <Link className="text-[#2D6462]" to="/blog">BLOG</Link> <span className="mx-5">/</span> {blog.date}
                            </span>

                                <button 
                                    onClick={() => setShowShareModal(true)}
                                    className=" cursor-pointer hover:scale-105 hover:shadow-md duration-100"
                                    title="Share article"
                                >
                                    <img src={search_icon} alt="share" className="w-6 h-6" />
                                </button>
                            
                            
                                </h1>

                            <div className="blog-content mt-8">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
                            </div>

                            <RelatedArticles />
                        </div>
                    </>
                    :
                    <div className="h-[70vh] flex justify-center items-center">
                        <Spin />
                    </div>}
        </div>
    )
}