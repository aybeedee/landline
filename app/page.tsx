import Link from "next/link";

export default function Home() {
  return (
    <div className = "flex justify-center items-center w-full h-full">
      <div className = "flex flex-col space-y-4 items-center">
        <h1 className = "font-mono text-2xl">Select User</h1>
        <button className = "btn btn-active btn-wide">
          <Link href = '/buyer'>Buyer</Link>
        </button>
        <button className = "btn btn-active btn-wide">
        <Link href = '/seller'>Seller</Link>
        </button>
      </div>
    </div>
  )
}
