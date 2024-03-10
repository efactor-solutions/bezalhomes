import React from "react";
import { useParams,Link } from "react-router-dom"
import { Spin } from "antd";

export default function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const titleSplit = React.useMemo(
        () => {
            return blog.title && blog.title.toUpperCase().split(":",2)
        }, [blog]
    )

    React.useEffect(() => {
        if (slug) {
            fetch(process.env.REACT_APP_API_URL + "/blog/get-slug/" + slug)
                .then(res => res.json())
                .then(data => {
                    setBlog(data.data)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [slug])

    return (
        <div>
            {
                !loading ?
                    <>
                        {/* Header */}
                        <div className="w-full flex flex-col">
                            <div style={{ filter: "brightness(80%)" }} className="blog-header relative bg-slate-600">
                                <img src={blog.header_image} alt="Blogs" className="!w-full !h-full block object-cover" />
                            </div>
                            <div className="lg:w-[90%] flex justify-center items-center mx-auto absolute flex-col top-[30%] ml-[25%] md:ml-[5%] px-4 ">
                                <div className="">
                                    <p className=" text-center text-slate-100 text-base md:text-4xl font-normal Inter">
                                        {titleSplit?.[0]}: <br />
                                        {titleSplit?.[1]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="container !my-10">

                            {/* The Title */}
                            <h1 className="text-3xl font-semibold border-b-2 border-[#606060]">
                                <Link className="text-[#2D6462]" to="/blog">BLOG</Link> <span className="mx-5">/</span> {blog.title.toUpperCase()}
                            </h1>

                            <div 
                                className="blog-content mt-8"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </div>
                    </>
                    :
                    <div className="h-[70vh] flex justify-center items-center">
                        <Spin />
                    </div>}
        </div>
    )
}