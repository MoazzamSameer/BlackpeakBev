import { Plus, Minus, Search } from 'lucide-react';

export default function FindUs() {
  return (
    <>
      {/* Hero Map Section */}
      <section className="relative w-full h-[870px] overflow-hidden flex flex-col justify-end pb-margin-edge pt-32">
        {/* Cinematic Dark Map Background */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Cinematic rendering of topographical map" 
            className="w-full h-full object-cover object-center opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNPM3_YR4W8yKYJixuLo6bTZnnfDDVj_8gizX05x6L321NQBczc8-vC_rMp9zHtprTpWhCWhItwoG8PCuOq5nEJlDIRziz4y1lPezMJEuFEPqXrL9hjaaahhCjgf1GYER6fCGvdhQ5IGJpOcDUkcRigHDfuyMH0ot3yAlPY-JU8LMH9BIKqW5WvI-5PbcxZsUGu9lhWGqplrty4ItfijZxk4kTM7es0mINuFX6Ugm1GeMVsUfVVmBxNTOAZ3Y6lJw_ZLLp7R-0JDQ" 
          />
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent"></div>
        </div>

        {/* Search Area */}
        <div className="relative z-10 px-margin-edge max-w-4xl">
          <h1 className="font-display-xl text-display-xl text-on-surface mb-8">Locate.</h1>
          <div className="relative">
            <label className="sr-only" htmlFor="city-search">Search your city</label>
            <input 
              id="city-search" 
              type="text" 
              placeholder="Search your city or region..."
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant text-headline-md font-headline-md text-on-surface placeholder:text-on-surface-variant focus:ring-0 focus:border-primary py-4 transition-colors duration-500"
            />
            <button className="absolute right-0 bottom-4 text-on-surface-variant hover:text-primary transition-colors duration-500">
              <Search size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </section>

      {/* Signature Stockists Section */}
      <section className="px-margin-edge py-section-gap bg-background">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-gutter">Signature Partners</h2>
        
        {/* We can envision stockist entries here, but adding general visual layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* Example entries */}
            <div className="border border-white/5 bg-surface-container p-8 hover:border-primary transition-colors duration-500 hover:bg-white/5">
                <h3 className="font-headline-md text-on-surface mb-2">The Savoy</h3>
                <p className="font-body-md text-on-surface-variant mb-6">London, United Kingdom</p>
                <div className="font-label-caps text-label-caps text-primary tracking-widest">Available</div>
            </div>
            
            <div className="border border-white/5 bg-surface-container p-8 hover:border-primary transition-colors duration-500 hover:bg-white/5">
                <h3 className="font-headline-md text-on-surface mb-2">Aman Tokyo</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Tokyo, Japan</p>
                <div className="font-label-caps text-label-caps text-primary tracking-widest">Available</div>
            </div>

            <div className="border border-white/5 bg-surface-container p-8 hover:border-primary transition-colors duration-500 hover:bg-white/5">
                <h3 className="font-headline-md text-on-surface mb-2">Bvlgari Resort</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Dubai, UAE</p>
                <div className="font-label-caps text-label-caps text-primary tracking-widest">Available</div>
            </div>
        </div>

        {/* Load More Indicator */}
        <div className="flex justify-center mt-32">
          <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-500 flex flex-col items-center gap-4">
            <span>Discover More</span>
            <div className="w-[1px] h-12 bg-outline-variant"></div>
          </button>
        </div>
      </section>
    </>
  );
}
