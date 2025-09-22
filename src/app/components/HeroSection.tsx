import HeroBg from './../../../public/images/hero-bg.png'
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const HeroSection = () => {
    return (
    <div>
      <div className='relative w-full h-[740px] md:h-[640px] lg:h-screen overflow-hidden'>
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          loading="lazy"
          className='absolute inset-0 object-cover'
           />
        <div className='absolute inset-0 z-10'>
          <Navbar />

          {/* Hero section starts */}
          <section className="w-full flex flex-col items-center justify-center text-center px-6 md:px-10">
              <div className="max-w-6xl w-full py-8 sm:py-12 lg:py-20 xl:py-24">
                <p className="text-sm sm:text-base uppercase text-[var(--buttoncolor)] tracking-wider mb-4">
                  Actionable Business Insights
                </p>

                <h1 className="text-5xl md:text-6xl lg:7xl xl:text-8xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                  Lead with Data. Accelerate with Automation.
                </h1>

                <p className="mt-6 text-[var(--foreground)] lg:max-w-2xl mx-auto text-lg md:text-xl">
                  From actionable analytics to seamless automation, ResoNex delivers the insights and
                  tools you need to drive efficiency and stay ahead. Trusted by CIOs, CEOs, CFOs, and
                  CHROs shaping tomorrow`s organizations.
                </p>
                <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#kpi-library">
                    <button className="bg-[var(--buttoncolor)] semibold-text text-base text-white rounded-lg md:rounded-xl py-2.5 px-8 cursor-pointer">Explore 300+ Proven KPIs</button>
                  </Link>
                  <Link href="#contact">
                    <button className="bg-none border-2 border-[var(--buttoncolor)] semibold-text text-base text-[var(--buttoncolor)] rounded-lg md:rounded-xl py-2 px-8 cursor-pointer">Book your free Discovery Section</button>
                  </Link>
                </div>
              </div>
          </section>
          {/* Hero section ends */}

        </div>
      </div>
    </div>
    );
}

export default HeroSection;