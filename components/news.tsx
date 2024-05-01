import { siteConfig } from "@/config/site";
import { Separator } from "./ui/separator";
import { Icons, IconsKeys } from "./icons";

export default function News() {
  return (
    <div className="flex flex-col basis-1/2">
      <div className="flex gap-4 py-2 items-center">
        <Separator orientation="vertical" className="w-1 bg-indigo" />
        <div className="text-xl font-semibold">新闻动态</div>
      </div>
      <Separator className=" bg-indigo"/>
      {siteConfig.news.map((item) => (
        <>
          <div className="flex items-center gap-4 py-2">
            {Icons[item.icon as IconsKeys]({ className: "w-8 h-8 shrink-0 " })}
            <span className="text-md  text-muted-foreground font-semibold">
              {item.label}
            </span>
          </div>
          <Separator />
        </>
      ))}
    </div>
  );
}
