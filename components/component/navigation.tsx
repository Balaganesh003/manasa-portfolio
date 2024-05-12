/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qDyHfbnKeIO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Navigation() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="w-[150px]">
        <Link className="mr-6 flex items-center gap-2 font-semibold" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Jane Doe</span>
        </Link>
      </div>
      <nav className="flex w-full justify-center">
        <div className="hidden lg:flex">
          <div className="flex gap-4">
            <div className="">
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Home
              </Link>
            </div>
            <div >
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Work
              </Link>
            </div>
            <div >
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                About
              </Link>
            </div>
            <div >
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-auto w-[150px]">
        <Button>Get in Touch</Button>
      </div>
    </header>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}