export default function MobileCTABar(){
  return (
    <div className="fixed bottom-3 left-0 right-0 px-4 sm:hidden z-40">
      <div className="mx-auto max-w-md grid grid-cols-2 gap-2">
        <a href="#apply" className="btn-teal text-center py-3 text-sm">体験会に参加</a>
        <a href="#download" className="btn-yellow text-center py-3 text-sm">資料請求</a>
      </div>
    </div>
  );
}