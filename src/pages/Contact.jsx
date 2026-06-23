import { useState } from "react";

const DELIVERY = [
  { region: "Ethiopia (Addis Ababa)", time: "1–2 business days", cost: "$2.00", free: "Orders over $30" },
  { region: "Ethiopia (Regional)",    time: "3–5 business days", cost: "$4.00", free: "Orders over $50" },
  { region: "East Africa",            time: "5–7 business days", cost: "$8.00", free: "Orders over $80" },
  { region: "Middle East",            time: "7–10 business days", cost: "$12.00", free: "Orders over $100" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.inquiryType) e.inquiryType = "Please select an inquiry type.";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
    setErrors({});
  }

  const inputClass = (field) =>
    `w-full px-3 py-3 border-2 rounded-lg font-[inherit] text-base transition-colors focus:outline-none focus:border-[#1f3864] focus:shadow-[0_0_0_3px_rgba(31,56,100,0.15)] ${
      errors[field] ? "border-red-500" : "border-[#dddddd]"
    }`;

  return (
    <main className="max-w-[1200px] mx-auto">
      {/* Contact Form */}
      <section className="max-w-[700px] mx-auto my-8 px-8 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-[24px] font-bold text-[#1f3864] mb-2">Contact Merkato Store</h2>
        <p className="text-[#222] mb-6">Have a question or need help with your order? Fill in the form below.</p>

        {success && (
          <div className="bg-[#d4edda] border border-[#c3e6cb] text-[#155724] px-4 py-3 rounded mb-4 text-sm">
            Thank you! Your message has been sent. We'll reply within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="block font-semibold text-[#1f3864] mb-1.5">Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className={inputClass("name")} />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold text-[#1f3864] mb-1.5">Email Address *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" className={inputClass("email")} />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold text-[#1f3864] mb-1.5">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+251 9XX XXX XXXX" className={inputClass("phone")} />
          </div>

          <div>
            <label className="block font-semibold text-[#1f3864] mb-1.5">Inquiry Type *</label>
            <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className={inputClass("inquiryType")}>
              <option value="">-- Select an option --</option>
              <option value="order">Order Inquiry</option>
              <option value="product">Product Question</option>
              <option value="delivery">Delivery Issue</option>
              <option value="return">Return / Refund</option>
              <option value="other">Other</option>
            </select>
            {errors.inquiryType && <p className="text-red-600 text-xs mt-1">{errors.inquiryType}</p>}
          </div>

          <div>
            <label className="block font-semibold text-[#1f3864] mb-1.5">Message *</label>
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Describe your inquiry in detail..." className={inputClass("message")} />
            {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#1f3864] hover:bg-[#e8b84b] hover:text-[#1f3864] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Delivery Table */}
      <section className="px-8 pb-8">
        <h2 className="text-[24px] font-bold text-[#1f3864] mb-4">Delivery Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-[#1f3864] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Region</th>
                <th className="px-4 py-3 text-left">Delivery Time</th>
                <th className="px-4 py-3 text-left">Shipping Cost</th>
                <th className="px-4 py-3 text-left">Free Shipping On</th>
              </tr>
            </thead>
            <tbody>
              {DELIVERY.map((row, i) => (
                <tr key={row.region} className={`border-b border-[#dddddd] hover:bg-[#f5f7fa] ${i % 2 === 0 ? "" : "bg-[#f5f7fa]"}`}>
                  <td className="px-4 py-3">{row.region}</td>
                  <td className="px-4 py-3">{row.time}</td>
                  <td className="px-4 py-3">{row.cost}</td>
                  <td className="px-4 py-3">{row.free}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
