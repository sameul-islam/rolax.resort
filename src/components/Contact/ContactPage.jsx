import React from "react";

const ContactPage = () => {
  return (
    <div>
      <section className="max-w-[1400px] font-EB mx-auto px-4 md:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-Playfair mb-6 text-[#4b4b4b]">Contact Form</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#eaaa76] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#eaaa76] outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#eaaa76] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#eaaa76] outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#eaaa76] text-[#3d3d3d] font-semibold py-3 rounded hover:bg-[#f0c27b] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="flex flex-col gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-Playfair mb-6 text-[#4b4b4b]">Contact Details</h2>
            <p className="text-gray-600 mb-2"><strong>Address:</strong>South Beach Road, Cox's Bazar, Bangladesh</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +123 456 7890</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> info@rolax.com</p>
            <p className="text-gray-600 mb-2"><strong>Working Hours:</strong> Mon - Sun: 7:00 AM - 11:00 PM</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024609404856!2d90.3917465!3d23.7499333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75c3f1e2e9d%3A0x123456789abcdef!2sLuxury%20Hotel!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
