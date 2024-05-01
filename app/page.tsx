import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import  Carousel  from "@/components/carousel/carousel"
import { faker } from '@faker-js/faker';
import ResearchInfo from "@/components/researchInfo";
import News from "@/components/news";

const imgs = Array(5).fill(0).map(()=>faker.image.urlLoremFlickr({category:'people',width:1500,}))
console.log(imgs);

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 justify-center ">
      <Carousel slides={imgs} options={{loop:true}}/>
      <div className="flex w-full gap-6">
        <ResearchInfo/>
        <News/>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
