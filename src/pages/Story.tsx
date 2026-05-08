import { ArrowDown } from 'lucide-react';
import ScrollProgress from '../components/ui/ScrollProgress';
import { Link } from 'react-router-dom';

export default function Story() {
  return (
    <>
      <ScrollProgress />
      {/* Hero Section */}
      <section className="relative h-[1024px] min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Atmospheric shot of Zabarwan peaks" 
            className="w-full h-full object-cover object-center scale-105 opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwktmHgbQLz1C4wuFI2vZ4aeJbYs1WpP5GSzjvYE1-WEMq-sCX-qyaeEW_KiJ9E11X3M32REIw3slZNVuu6RuaEL2_CHJwnb1qEk0yrmg1imy8yIdLs0F76rrfjfR-klGHh8KHNgdm02V59ZnPx1vWIx30fG-gzgrNAI__ODTg_TrqESsJeWmy731fU3mZNDY8QrjAasQlOciO570psols9J25Y8pUZ3vwqEKS_Im0jzsM2uLqU6NvzixuyFrfbm5DAOi9It155DL" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/30 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 text-center px-margin-edge flex flex-col items-center mt-20">
          <p className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-6 uppercase">Origin Zabarwan</p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-8">The Source</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A silent testament to time. Born in Kashmir, where ice meets ancient rock.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse opacity-50">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">Descend</span>
          <ArrowDown size={24} className="text-on-surface" />
        </div>
      </section>

      {/* The Aquifer Section */}
      <section className="py-section-gap px-margin-edge w-full max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Text Content Offset */}
          <div className="col-span-1 lg:col-span-5 lg:col-start-2 flex flex-col gap-8 order-2 lg:order-1 z-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <h2 className="font-label-caps text-label-caps text-primary uppercase">The Aquifer</h2>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Centuries in Stone</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
                Beneath the frostline lies a geological marvel. For centuries, glacial meltwater percolates through miles of dense, porous volcanic rock. This agonizingly slow journey acts as nature's ultimate filtration system, stripping away impurities while absorbing a pristine balance of minerals.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/70">
                It is not manufactured. It is unearthed. A reservoir untouched by modern light until the moment it surfaces.
            </p>
          </div>
          {/* Imagery Asymmetric */}
          <div className="col-span-1 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-white/10 shadow-2xl bg-surface-container-lowest">
              <img 
                alt="Dark volcanic rock textures" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-\[1s\]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_QxKh7eCZepNam5nayBr3W-Ds8DeZTDwcvbzXxBIGRjf-x-b_j8FMS1Or3Lff7BqRUVmvDR0TdDX5GPG6DeKWzJNVVurEMOC4ko-IJ1n4OVm5Mk6IQ-wzdNV7pZKWkSfSF3OdHs9MfmuROwt7_vjGK5pOF89VYdMv9os_QPZuUySuyipwctL-ESI9MXCG13B-9xzq-0l-2Rn_8S4wZb4pwWo-vhi9bsOE2eMrwRivpYbGp0HUjN60B-SKjxMpeRyyBdcOUOd9ivC" 
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/5 backdrop-blur-2xl hidden lg:block pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Glacial Purity Section */}
      <section className="py-section-gap px-margin-edge w-full bg-surface-container relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="col-span-1 lg:col-span-10 lg:col-start-2 text-center mb-24">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Sudden Crack of Ice</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                The precise moment water transitions states. Our extraction process captures this ephemeral purity, sealing the low-temperature vibrancy in every bottle.
              </p>
            </div>
            
            {/* Bento Grid style data display */}
            <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative aspect-square border border-white/5 bg-surface-container-lowest/50 backdrop-blur-xl p-8 flex flex-col justify-end group overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 grayscale mix-blend-overlay"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop')` }}
                ></div>
                <div className="relative z-10">
                  <span className="font-display-xl text-[80px] leading-none text-primary block mb-2">7.2</span>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2">Alkaline Balance</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant/70">Naturally occurring pH level, providing a smooth, structured mouthfeel.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative aspect-square border border-white/5 bg-surface-container-lowest/50 backdrop-blur-xl p-8 flex flex-col justify-end group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
                <img 
                  alt="Water texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-screen z-[-1]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGunCNdwS2xumZBzugZ4lq_CtVUSrjjacZ10SHBNbdUQkxRJApbzAFcRR2-H3Jv5q_kp8M69OW5811OFJNKkn_L-S7-6qKr-Uc8le5duuppR2gbcnHUs0kr_UWXJuB8y32MdYmpDlOl2UmqI17THCTx-6yXqBxIQR7wCJe7ez48VM_e6ySvAY51gPsSfTaI_4rlM7Taosez0fy8x4r4KrAACSjj9rSYskxlG9QG9mop25R5OYxEz2dXYVPDxz218tQwkaCvOHbkapN"
                />
                <div className="relative z-10">
                  <span className="font-display-xl text-[80px] leading-none text-primary block mb-2">0</span>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2">Nitrates</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant/70">Absolute absence of agricultural or industrial runoff. Pure isolation.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative aspect-square border border-white/5 bg-surface-container-lowest/50 backdrop-blur-xl p-8 flex flex-col justify-end group overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-30 transition-opacity duration-700 grayscale"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621847468516-1ed0d08e5a31?q=80&w=2574&auto=format&fit=crop')` }}
                ></div>
                <div className="relative z-10">
                  <span className="font-display-xl text-[80px] leading-none text-primary block mb-2">Low</span>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2">TDS Profile</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant/70">A delicate mineral signature that respects the palate, never overpowering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-section-gap px-margin-edge w-full relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* Sticky Text */}
            <div className="lg:w-1/3 flex flex-col justify-center relative">
              <div className="sticky top-1/3">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">From Summit<br />to Source</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  A journey measured not in miles, but in decades. The slow descent ensures the glacial melt is imbued with the very soul of the mountain.
                </p>
              </div>
            </div>

            {/* Flowing Imagery */}
            <div className="lg:w-2/3 flex flex-col gap-32">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-end w-full">
                <div className="w-full md:w-3/5 aspect-video border border-white/10 relative overflow-hidden group">
                  <img 
                    alt="Snow covered peaks" 
                    className="w-full h-full object-cover filter grayscale opacity-70 group-hover:scale-105 transition-transform duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtjxNK-arbOsoA0XVb4bid1hn4O0rPd344RIAAPPmOcnIWYpSsoBDIXhUuUBCcguCMZCXuy_vtn731ZXjHCh6TrLngeBi1q3yyK2EHQ261GnYSQ9dg2tBID0EG_n5aZu9Bj8s61brF1TBy_PEUuh-u0yMEreqlVyRDmlHA2HM_YmaJyMuBZ-cojwn2ND6vsIlkd3NGa4jK3ivLyzQP0vbhBDcdbHrOmaH5i6vx_EWXnG8zF3JjN89LBa4apW02krIWrtCcFp1fH-Vk" 
                  />
                </div>
                <div className="w-full md:w-2/5 pb-4">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">01 / The Catchment</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">Untouched snowpack accumulates at extreme altitudes, preserved by perpetual freezing temperatures.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start w-full">
                <div className="w-full md:w-1/2 aspect-[4/5] border border-white/10 relative overflow-hidden group">
                  <img 
                    alt="Dark mountain river" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRBzx_di-SkPgU_KBleUPgSl9tmtr1a4B8ZZI2pIRNh73pkKiAmsZ5dc4zr8siL1k7-6R75Dx0RGTXSzNn7R0S19TH8NKA3bTzV7O6BWuNqw2Dnq1QmVTYtQgV5g3c6ddr37wg4xxSkDp5OF2hx3_CGbSFMwFa2Tkn066fG2oecXlOeatwukSKq6hk8rRYcvfL0fAZCrBOrHkUUt88qJ8qc7I9Jmhm83gBTAZz9IXo8N---MbfvHrFE4wrU4YeC0fBIMphuN0xwplf" 
                  />
                </div>
                <div className="w-full md:w-1/2 pt-12 md:text-right">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">02 / Deep Filtration</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">The slow percolation through ancient bedrock, far below the surface, protected from all atmospheric influence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-section-gap px-margin-edge w-full bg-surface-container-lowest relative border-t border-white/5 flex flex-col items-center justify-center text-center min-h-[614px]">
        <h2 className="font-display-xl text-[80px] md:text-display-xl text-on-surface mb-8">Taste the Void</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">Discover the subtle nuances of our Still, Sparkling, and Infused collections.</p>
        <Link to="/" className="inline-block border-b border-primary pb-1 font-label-caps text-label-caps text-primary uppercase tracking-widest hover:text-on-surface hover:border-on-surface transition-colors duration-500">
          Experience the Range
        </Link>
      </section>
    </>
  );
}
