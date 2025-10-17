import Header from "./Header";
import MobileCTABar from "./MobileCTABar";
import StructuredData from "./StructuredData";

export default function PageShell({ children }){
  return (
    <div style={{background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden'}}>
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top section circles - reduced for Hero section */}
        <div className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-65" style={{background: '#bae1ff'}}></div>
        <div className="absolute top-40 right-40 w-56 h-56 rounded-full opacity-55" style={{background: '#c7ceea'}}></div>
        
        {/* Upper middle section */}
        <div className="absolute top-1/4 left-1/6 w-60 h-60 rounded-full opacity-60" style={{background: '#ffcccb'}}></div>
        <div className="absolute top-1/3 right-1/5 w-52 h-52 rounded-full opacity-65" style={{background: '#d4edda'}}></div>
        <div className="absolute top-1/4 left-1/2 w-44 h-44 rounded-full opacity-50" style={{background: '#f0e68c'}}></div>
        
        {/* Middle section - adjusted to avoid overlapping with Program section */}
        <div className="absolute top-1/2 -left-20 w-68 h-68 rounded-full opacity-55" style={{background: '#e6e6fa'}}></div>
        <div className="absolute top-1/2 -right-20 w-56 h-56 rounded-full opacity-60" style={{background: '#a8e6cf'}}></div>
        <div className="absolute top-1/2 left-1/12 w-48 h-48 rounded-full opacity-45" style={{background: '#ffd1dc'}}></div>
        
        {/* Lower middle section - adjusted to avoid overlapping with Curriculum section */}
        <div className="absolute top-2/3 -left-16 w-64 h-64 rounded-full opacity-50" style={{background: '#f0f8ff'}}></div>
        <div className="absolute top-2/3 -right-16 w-60 h-60 rounded-full opacity-55" style={{background: '#ffe4e1'}}></div>
        <div className="absolute top-2/3 left-1/12 w-52 h-52 rounded-full opacity-45" style={{background: '#f5fffa'}}></div>
        
        {/* Bottom section circles - adjusted to avoid overlapping with buttons */}
        <div className="absolute bottom-20 -left-24 w-72 h-72 rounded-full opacity-60" style={{background: '#e0ffff'}}></div>
        <div className="absolute bottom-40 -left-32 w-56 h-56 rounded-full opacity-50" style={{background: '#ffe4e1'}}></div>
        <div className="absolute bottom-16 -right-24 w-68 h-68 rounded-full opacity-55" style={{background: '#f0f8ff'}}></div>
        <div className="absolute bottom-32 -right-32 w-48 h-48 rounded-full opacity-45" style={{background: '#fff0f5'}}></div>
        
        {/* FAQ section decorative elements - positioned on outer edges */}
        <div className="absolute top-4/5 -left-16 w-56 h-56 rounded-full opacity-50" style={{background: '#e6e6fa'}}></div>
        <div className="absolute top-4/5 -right-16 w-48 h-48 rounded-full opacity-45" style={{background: '#f0e68c'}}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/6 left-1/3 w-40 h-40 rounded-full opacity-40" style={{background: '#dda0dd'}}></div>
        <div className="absolute top-1/8 right-1/3 w-32 h-32 rounded-full opacity-30" style={{background: '#ffb6c1'}}></div>
      </div>
      
      <StructuredData />
      <Header />
      {children}
      <MobileCTABar />
    </div>
  );
}