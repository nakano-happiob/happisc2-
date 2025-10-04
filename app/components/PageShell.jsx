import Header from "./Header";
import MobileCTABar from "./MobileCTABar";
import StructuredData from "./StructuredData";

export default function PageShell({ children }){
  return (
    <div style={{background: '#FFFFFF', minHeight: '100vh'}}>
      <StructuredData />
      <Header />
      {children}
      <MobileCTABar />
    </div>
  );
}