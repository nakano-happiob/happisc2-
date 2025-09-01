import Header from "./Header";
import MobileCTABar from "./MobileCTABar";

export default function PageShell({ children }){
  return (
    <div style={{background: '#FFFFFF', minHeight: '100vh'}}>
      <Header />
      {children}
      <MobileCTABar />
    </div>
  );
}