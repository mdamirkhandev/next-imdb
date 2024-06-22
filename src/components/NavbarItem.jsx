"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function NavbarItem(props) {
  const { title, params } = props;
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      className={`hover:text-amber-600 font-semibold ${
        genre === params
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
      href={`/?genre=${params}`}
    >
      {title}
    </Link>
  );
}
