export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#1f3864] text-white px-5 py-3 rounded shadow-lg text-sm animate-fade-in">
      {message}
    </div>
  );
}
