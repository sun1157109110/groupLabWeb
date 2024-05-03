import { title } from "@/components/primitives";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="container grid items-center gap-6 pb-8  px-36">
      <div className="flex flex-col ">
        <div className="flex gap-4 py-2 items-center">
          <Separator orientation="vertical" className="w-1 h-7 bg-indigo" />
          <div className="text-xl font-semibold">Recent Publications</div>
        </div>
        <Separator className="mb-3 bg-indigo" />
        <div className="">
          {siteConfig.researchList.map((item) => (
            <>
              <div className="flex items-center gap-4 py-2">
                <Link href={""}>
                  <Image
                    className=" shrink-0 flex"
                    src={item.imgSrc}
                    alt=""
                    width={120}
                    height={77}
                  />
                </Link>
                <span className="text-md  text-muted-foreground font-semibold">
                  <Link className=" hover:text-indigo" href={""}>
                    {item.label}
                  </Link>
                </span>
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
