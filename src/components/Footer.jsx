export default function Footer() {
  return (
    <footer className="bg-[#1f3864] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[#e8b84b] font-bold text-lg mb-3">Merkato Store</h3>
          <p className="text-sm text-gray-300">Churchill Ave, Addis Ababa, Ethiopia</p>
          <p className="text-sm text-gray-300">info@merkatostore.com</p>
          <p className="text-sm text-gray-300">+251 911 000 000</p>
        </div>
        <div>
          <h3 className="text-[#e8b84b] font-bold text-lg mb-3">Find Us</h3>
          <iframe
            title="Merkato Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.74!3d9.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMTIuMCJOIDM4wrA0NCkyNC4wIkU!5e0!3m2!1sen!2set!4v1"
            width="100%"
            height="150"
            className="rounded border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <div className="border-t border-white/20 text-center py-3 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Merkato Store. All rights reserved.
      </div>
    </footer>
  );
}
