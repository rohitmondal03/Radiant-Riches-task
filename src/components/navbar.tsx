import Link from "next/link"
import { Search } from "lucide-react"


const navLinks: TNavLinks[] = [
  {
    label: "Categories",
    href: "/",
  },
  {
    label: "Website Builders",
    href: "/",
  },
  {
    label: "Today's Deals",
    href: "/",
  },
]


export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-center gap-16 bg-navy-blue text-white py-3 px-20">
      <Input />

      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}



// input component
const Input = () => {
  return (
    <div className="flex items-center gap-4 bg-white py-1 px-2 rounded-lg text-zinc-500">
      <Search />

      <input 
        className="outline-0"
      />
    </div>
  )
}