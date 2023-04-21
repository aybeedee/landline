import Link from "next/link";

export default function Home() {
  return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <h1 className="font-bold text-lg lg:text-6xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">LandLine<span style = {{color: "#661AE6"}}>.</span></h1>
          <p className="py-6">A comprehensive online platform for property listing, sale, purchase, documentation and analytics</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">
                    <Link href = '/user'>Login</Link>
                </button>
                </div>
            </div>
          </div>
      </div>
      </div>
  )
}
