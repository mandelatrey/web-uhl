import Bento from "./Bento"

const approachItems = [
    {
        title: "Needs Assessment",
        description: "Exploring initiatives to identify and address unmet needs within communities"
    },
    {
        title: "Baseline Studies",
        description: "Assessing core needs and uncovering new insights to better understand the problem"
    },

]

const Approach = () => {
  return (
    <section className="w-full h-full items-start">
        <div className="container mx-15 flex flex-col  items-center">
            <div className="flex flex-col gap-y-5">
                <h1 className="section-title">
                    Our Approach
                </h1>
                <p className="text-center text-lg font-medium max-w-lg">
                We envision a world where every community thrives through solutions that foster self-reliance
                </p>
            </div>
            <Bento />
        </div>
    </section>
  )
}

export default Approach