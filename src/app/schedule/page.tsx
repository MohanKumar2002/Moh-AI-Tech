'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function SchedulePage() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: formData.notes || 'No notes provided',
      product: product || 'Not specified',
    };

    try {
      await emailjs.send(
        'service_pjg7kli',          // Your service ID
        'template_xrzuvaa',         // Your template ID
        payload,                    // The data to send
        'YolbE8fMsNTpf9xk3'         // Your public key
      );
      setSubmitted(true);
      console.log('✅ Email sent!', payload);
    } catch (err) {
      console.error('❌ EmailJS Error:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule a Meeting</h1>
      <p className="text-muted-foreground mb-6">
        You're requesting a demo for: <span className="font-medium text-primary">{product}</span>
      </p>

      {submitted ? (
        <div className="text-green-600 font-semibold text-lg">✅ Thank you! We'll reach out shortly.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />

          <div className="flex gap-4">
            <input
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="flex-1 border rounded px-4 py-2"
            />
            <input
              name="preferredTime"
              type="time"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="flex-1 border rounded px-4 py-2"
            />
          </div>

          <textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
