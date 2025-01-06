import ContentArticle from "@/components/blog/ContentArticle/page"
import HeaderArticle from "@/components/blog/HeaderArticle/page"
import PromoBlog from "@/components/blog/PromoBlog/page"
import { data } from "@/data/blog"

export default async function ArticlePage({ params }) {
  const { article } = await params
  const articleData = data.find((item) => item.id === article)

  return !articleData ? null : (
    <>
      <HeaderArticle img={articleData.imgHeader} />
      <ContentArticle data={articleData} />
      <PromoBlog />
    </>
  )
}
