import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { TypographyDemo } from "@/components/text";
import { Separator } from "@/components/ui/separator";
export default function BlogPage() {
  return (
    <section className="container grid items-center gap-6 pb-8  px-36">
      <Tabs defaultValue="0" className="mt-4" orientation="vertical">
        <TabsList>
          {siteConfig.researchList.map((item, index) => (
            <TabsTrigger className="text-sm text-muted-foreground font-normal" value={index + ""}>{`研究方向${
              index + 1
            }`}</TabsTrigger>
          ))}
        </TabsList>
        {siteConfig.researchList.map((item, index) => (
          <TabsContent
            value={index + ""}
          >
            <div className="flex gap-4  items-center ">
              <Separator orientation="vertical" className="w-1 h-7 bg-indigo" />
              <div className="text-xl font-semibold">Research</div>
            </div>
						<Separator className="mb-4 mt-2 bg-indigo" />

            <TypographyDemo />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
