import BlogDestacado from "@/components/blog/BlogDestacado/page"
import BlogRecientes from "@/components/blog/BlogRecientes/page"
import HeaderBlog from "@/components/blog/HeaderBlog/page"
import { data } from "@/data/blog"

export default function BlogPage() {
  return (
    <>
      <HeaderBlog />
      <BlogRecientes data={data} />
      <BlogDestacado data={data.filter((item) => item.destacado)[0]} />
    </>
  )
}
