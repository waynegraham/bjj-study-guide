import heroImage from './PedroGrandOpeningGroupShot.jpg'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 dark:bg-gray-800">
      <div className="hidden md:block md:w-1/2">
        <img
          src={heroImage}
          alt="Grand opening"
          className="rounded-lg w-full h-auto md:h-96 object-cover"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left p-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Gracie Belt Demonstration Study Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is my study guide for the Gracie Belt Demonstration. The site
          contains the moves (to help you remember the names) and the videos (to
          help you recall them) as well as the actual references to the
          curriculum.
        </p>
        <p className="mt-4  text-gray-600 dark:text-gray-300">
          This is a work in progress...please <a target="_blank" href="https://github.com/waynegraham/bjj-study-guide/issues">share feedback with me</a>!
        </p>
      </div>
    </section>
  )
}

export default Hero
