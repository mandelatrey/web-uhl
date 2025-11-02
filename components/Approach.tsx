import Bento from "./Bento"
import NewApproach from "./NewApproach"

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
        <section data-navbar-invert="true" className="w-full h-full flex flex-col items-center gap-y-7">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-y-3">
                    <h1 className="section-title">
                        Our Approach
                    </h1>
                    <p className="text-center text-md/tight lg:text-lg font-light max-w-sm lg:max-w-lg">
                    We envision a world where every community thrives through solutions that foster self-reliance
                    </p>
                </div>
            
            <NewApproach />
        </div>
    </section>
  )
}

export default Approach