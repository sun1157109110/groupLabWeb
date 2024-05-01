import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { groupBy } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";

export default function Members() {
  let membersData = groupBy(siteConfig.members);
  console.log(membersData);
  type memObjType = (typeof siteConfig.members)[number];
  return (
    <section className="container grid items-center gap-6 pb-8  px-20">
      <div>
        {Object.keys(membersData).map((item) => (
          <>
            <div className="pt-4" key={item}>
              <h2 className="scroll-m-20 pb-4 text-2xl font-semibold tracking-tight first:mt-0">
                {item}
              </h2>
              <ul className="flex items-center gap-6 flex-wrap">
                {membersData[item].map((memObj: memObjType) => (
                  <li className="p-2 flex flex-col items-center justify-center">
                    <Link href={""}>
                      <Avatar className="w-48 h-48 outline-none bg-muted-foreground/50 hover:ring-indigo-500 hover:ring-offset-[6px] transition-all ring-2 ring-offset-[5px] ring-offset-background dark:ring-offset-background-dark ring-muted-foreground/50">
                        <AvatarImage src={memObj.avatar} alt="@shadcn" />
                        <AvatarFallback>
                          <User className="w-full h-full text-muted-foreground " />
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                    <div className=" text-center p-4 text-muted-foreground text-xl font-semibold hover:text-primary">
                      <Link href={""}>{memObj.name}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
          </>
        ))}
      </div>
    </section>
  );
}
