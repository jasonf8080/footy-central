import { Link } from "react-router-dom"
import { Navbar } from "../components"

const Error = () => {
  return (
    <>
      <Navbar />
      <section className="w-[100vw] max-h-[90vh] flex justify-center items-center">
        <div className="md:translate-y-[100px] flex flex-col justify-center items-center mx-auto w-full md:w-[700px] h-full md:h-[400px] bg-[#1a1a1a] p-10 text-center rounded-xl mt-0">
          <h1 className="text-2xl md:text-5xl font-bold">Error 404</h1>

          <p className="mt-3 mb-6 text-lg md:text-xl">
            Page not found
          </p>

          <Link
            to="/"
            className="bg-[#333] rounded-lg px-6 py-2"
          >
            &lt; Back to home
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
