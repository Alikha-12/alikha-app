import Me from "./alikaa.jpeg";
function Hero() {
  return (
    <section className="">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3" />
        <div className="hidden w-3/4 min-h-screen bg-[#658864] lg:block" />
        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-4xl font-semibold text-gray-800 capitalize pl-10 lg:text-6xl ">
            Hey, I'm{" "}
            <span className="2xl:text-[#658864] text-black hover:cursor-pointer">
              Al
            </span>
          </h1>
          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-[#B7B78A] "
              src={Me}
            />
            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-4xl ml-9 pt-10 font-semibold lg:text-white text-[#658864]">
                Alikha Mutiara Hati
              </h1>
              <p className="max-w-lg mt-0 mr-5 text-white content-center bg-[#658864] p-10  rounded-md">
                I'm 14 years old teenager from East Java, I'm greatly interested
                with history, my hobbies are playing videogames and listening to
                music, I've also been programming side project in my free time.
                I showed an interest in technology since my early age, Scratch
                was my favorite game when I was 8, I also did a few Python
                course with iD Tech Instructors during the holiday and my
                brother taught me JavaScript. My favorite yet simplest project
                so far was Encoder and Decoder which uses to translate or crack
                Caesar's cipher. My projects are on my GitHub profile, just
                check it out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
