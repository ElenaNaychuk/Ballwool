import Link from "next/link";

export const ErrorPage = () => {
  return(
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-8 text-2xl text-text-base">
        <Link 
          href="/"
        >
          Home
        </Link>
        <p>
          Server side error
        </p>
      </div>      
    </div>
  )
}