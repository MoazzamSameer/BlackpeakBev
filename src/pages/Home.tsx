import { ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[1024px] w-full flex items-center justify-center pt-20 overflow-hidden bg-surface-container-lowest">
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGyIXScbkkZjS-OmwcpFJk_zE7qHVpvoxIOpWVa-j_4EkHWBNot8IyOooaOho0dGBI6z1LU4otyY2hBZra5LfAqWz0T2a1vOC7YutHjvhFUX2DLdeOe8_CeYpxswW1zADQ8CMzSs-fLQJqYoUZIYe7-sin760aORg_3_b6xxkzbRlKtJ7QMMD5qOUt0Cq7TJrib8m7gQIuPPXlRyRuKl3LclVXVYRsxSH39upI76iCwrqp3K-C7VM8aXDx5u-3v6SyqdyW6myK3WIq")` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-24">
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 drop-shadow-2xl opacity-90">
            FROM THE PEAKS<br />
            <span className="text-border">OF KASHMIR</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12 tracking-wide font-light">
            Glacial purity bottled at the source. A slow drift of mist, a sudden crack of ice, the silence of the summit.
          </p>
          <a href="#range" className="inline-block border border-on-surface text-on-surface font-label-caps text-label-caps uppercase tracking-widest px-10 py-4 hover:bg-on-surface hover:text-surface transition-colors duration-500 bg-black/20 backdrop-blur-sm">
            Explore the Range
          </a>
        </div>
      </section>

      <section id="range" className="py-section-gap w-full px-margin-edge bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
          <div className="md:col-span-8 md:col-start-3 text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">The Collection</h2>
            <div className="h-[1px] w-24 bg-outline-variant mx-auto mb-6" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Three expressions of pristine elevation. Sourced from deep aquifers beneath the Zabarwan Range.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-gutter overflow-x-auto pb-12 snap-x hide-scrollbar">
          {/* Product 1 */}
          <div className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center relative aspect-[3/4] bg-gradient-to-b from-[#1a232c] to-[#0a0f14] border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <div className="relative z-20">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">01 / Sparkling</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 relative z-20">Sparkling Water</h3>
            </div>
            <div className="relative z-0 h-3/5 w-full mt-auto flex justify-center items-end opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform">
              <div className="w-48 h-80 bg-surface-container-lowest border border-white/10 rounded-t-full relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida/ADBb0uhlsn6TgQChdvq61N0cqnPIfa9B1QvnljxfK-UNhpEXLYV9kUNxP_VjmRkY0GTPpDOeZnNMfjVFo_WQFu_pii7hsa0OXvmMyHNXhKvPtMUIduQR3rjyY8xi3i5kV2whV0YBIf-27g4YPYJRFulLTcuzkcrwz34msRmbmmeRE5TSm4z-wRvBW-_XxqNP7CfkJdZZJHjh8V0oltA4gIDkonm1R1ija2Zi-DgRAh5XAgKP_P25xHGlwjDkS3h8" alt="Sparkling Water" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative z-20 mt-8 flex justify-between items-center border-t border-white/10 pt-4">
              <span className="font-body-md text-body-md text-on-surface-variant">500ml</span>
              <Link to="/story" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-2 uppercase">
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center relative aspect-[3/4] bg-gradient-to-b from-[#2a2213] to-[#120f08] border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <div className="relative z-20">
              <span className="font-label-caps text-label-caps tracking-widest uppercase text-[#d4b27a]">03 / Cola</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 relative z-20">Carbon Fizz</h3>
            </div>
            <div className="relative z-0 h-3/5 w-full mt-auto flex justify-center items-end opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform">
              <div className="w-48 h-80 bg-surface-container-lowest border border-white/10 rounded-t-full relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida/ADBb0ugEbyw-wMAQtZaeZW0EKAk1OhSCa6dPYOEcwIbTQn9NMFC_z9I5ZGFYaloRYS3TH24nJmmGhDpJcctbmCMKtBXh88teitg42JbHOiJikHOJyFFS2cQEnKky-aWZszfoh05-qeNS6EegM8bbowDsOPzylFUqt7_xNeIgt6Hn2WXLRriXl02AV8JxHeF2u9PsIEJvtSI55nwyvVgNlqydDC8UmvYmitMj2t-gwaKXuEbF3o9qGZuWVMRkltPE" alt="Carbon Fizz" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative z-20 mt-8 flex justify-between items-center border-t border-white/10 pt-4">
              <span className="font-body-md text-body-md text-on-surface-variant">500ml</span>
              <Link to="/story" className="font-label-caps text-label-caps text-on-surface hover:text-[#d4b27a] transition-colors flex items-center gap-2 uppercase">
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center relative aspect-[3/4] bg-gradient-to-b from-[#2a170f] to-[#120805] border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <div className="relative z-20">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">02 / Citrus</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 relative z-20">Mandarin Fizz</h3>
            </div>
            <div className="relative z-0 h-3/5 w-full mt-auto flex justify-center items-end opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform">
              <div className="w-48 h-80 bg-surface-container-lowest border border-white/10 rounded-t-full relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida/ADBb0ujwykrwT7Nb5ofwiu29KwWQh2iRbDTfGcOV2DYgfFDonfz9wj1biOKM28b3CBHXmjrbXTCDpdfrdWvm-kLq60NbuemkCItVG_9Hl2K5eVniJI4tngMwOooMaYvCxI8MW43nOuUZKHmjJ7OqrhEgDA7jWU1A9oQFdc-z8BIhZNdGOMJIe8UAQoUtLhOKd5X_Mc_-XtoP5Tpr8oXk998L8SN5i5OQNDxXt25HW5Xu1Ovg1mJ-q_TgA0rvmzJo" alt="Mandarin Fizz" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative z-20 mt-8 flex justify-between items-center border-t border-white/10 pt-4">
              <span className="font-body-md text-body-md text-on-surface-variant">500ml</span>
              <Link to="/story" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-2 uppercase">
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Nav Actions */}
      <nav className="fixed bottom-0 left-0 w-full z-50 p-4 pb-8 md:hidden bg-surface-bright/80 backdrop-blur-md border-t border-white/5 shadow-2xl">
        <div className="w-full flex justify-center">
          <Link to="/find" className="bg-primary text-on-primary w-full py-4 flex items-center justify-center uppercase tracking-widest font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-all duration-500 rounded-sm">
            <Compass size={20} className="mr-2" /> Explore Range
          </Link>
        </div>
      </nav>
    </>
  );
}
