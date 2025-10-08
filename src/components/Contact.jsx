import React, { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "Public appearance",
    message: ""
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message || "Inquiry sent!");
      setFormData({ name:"", email:"", organization:"", type:"Public appearance", message:"" });
    } catch (err) {
      alert("Error submitting inquiry");
    }
  };

  return (
    <section id="contact" className="border-t">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Contact / Booking Inquiry</h2>
        <p className="mt-2 text-gray-600">Submit an inquiry below. This is a demo form connected to the backend.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input name="name" value={formData.name} onChange={handleChange} className="p-3 border rounded" placeholder="Your name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-3 border rounded" placeholder="Email" required />
          <input name="organization" value={formData.organization} onChange={handleChange} className="p-3 border rounded" placeholder="Organization (optional)" />
          <select name="type" value={formData.type} onChange={handleChange} className="p-3 border rounded">
            <option>Public appearance</option>
            <option>Media / press</option>
            <option>Partnership / environmental</option>
            <option>Other</option>
          </select>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="p-3 border rounded" placeholder="Message" required />
          <button type="submit" className="px-5 py-3 bg-blue-600 text-white rounded">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
