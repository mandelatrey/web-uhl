const CallToAction = () => {
  return (
    <section data-navbar-invert="false" className="w-full h-full flex flex-col items-center gap-y-7 pb-8 md:pb-12 lg:pb-15">
      <div className="container mx-auto flex h-auto min-h-[20rem] md:min-h-[25rem] lg:h-[25rem] max-w-[95%] md:max-w-[90%] lg:max-w-[80%] p-4 md:p-6 lg:p-8 items-center">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0 bg-highlight-green w-full h-full rounded-2xl p-6 md:p-8 lg:p-25">
          <div className="flex items-center w-full lg:w-[50%]">
            <h2 className="text-2xl/tight md:text-3xl/tight lg:text-3xl/tight tracking-tighter max-w-full lg:max-w-[70%]">
              Join our mailing list to keep up with the latest developments
            </h2>
          </div>
          <div className="flex flex-col gap-y-3 w-full lg:w-[50%]">
            <p className="font-semibold tracking-tight">Stay Updated</p>
            <div className="flex flex-col md:flex-row items-center gap-y-3 md:gap-x-2 lg:gap-[0.02rem]">
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full h-12 md:h-auto py-2 bg-white rounded-md p-4 text-sm text-gray-700/70"
              />
              <a href="" className="flex items-center justify-center bg-fruit-green md:mx-3 w-full md:w-[10rem] h-12 md:h-[2.5rem] rounded-lg">
                <p className="text-white">Sign Up</p>
              </a>
            </div>
            <p className="text-xs tracking-tight pt-5">
              By subscribing you agree to <span className="font-semibold cursor-pointer"><a>our Privacy Policy</a></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction