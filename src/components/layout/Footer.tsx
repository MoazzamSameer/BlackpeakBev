import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container dark:bg-primary-container w-full py-section-gap border-t border-outline-variant grid grid-cols-1 md:grid-cols-12 px-margin-edge max-w-7xl mx-auto items-start gap-12 lg:gap-0 relative z-10 pb-32 md:pb-section-gap">
      <div className="md:col-span-4 flex flex-col gap-4">
        <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tighter">Black Peak</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs block">
          Glacial Purity, bottled at the edge of the world.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant/50 text-sm mt-4">
          © 2024 Black Peak. Sourced from the heights of Kashmir.<br />
          FSSAI License No. 12345678901234
        </p>
      </div>
      <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 justify-start md:justify-end items-end h-full mt-auto">
        <Link to="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-500 uppercase">Privacy Policy</Link>
        <Link to="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-500 uppercase">Terms of Service</Link>
        <Link to="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-500 uppercase">Shipping</Link>
        <Link to="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-500 uppercase">Instagram</Link>
        <Link to="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-500 uppercase">Twitter</Link>
      </div>
    </footer>
  );
}
