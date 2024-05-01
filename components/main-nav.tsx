import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-8 w-8 text-indigo" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center  p-2 text-sm font-medium rounded-md text-muted-foreground transition-colors border-transparent hover:bg-secondary/80 bg-transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.label}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
