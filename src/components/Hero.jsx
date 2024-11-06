import heroImage from './PedroGrandOpeningGroupShot.jpg';

function Hero() {
    return (
        <section className="overflow-hidden pt-20 pb-17.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
            <div className="lg:max-w-[570px] w-full">
              <img src={heroImage} alt="Grant opening" className="w-full" />
            </div>

            <div className="lg:max-w-[490px] w-full">
              <span className="inline-flex text-primary font-medium text-xl mb-2.5">Gracie Belt Demonstration</span>
              <h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
                My Study Guide
              </h1>
              <p>
                This is my study guide for the Gracie Belt Demonstration. The site
                contains the moves (to help you remember the names) and the videos (to
                help you learn them) as well as the actual references to the curriculum.
              </p>
              <p className="mt-4">
                This is a work in progress...please share feedback with me!.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero