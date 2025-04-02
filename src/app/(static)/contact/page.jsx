"use client"; // ✅ Ensure the whole file runs as a Client Component

import { useState } from "react";
import styles from "./contact.module.css";
import { supabase } from "@/lib/supabase"; // ✅ Ensure correct import path
import { logoFont } from "@/lib/fonts/fonts.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ Track form submission status

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { data, error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    console.log("Supabase Response:", { data, error }); // ✅ Debugging log

    if (error) {
      setStatus("There was an error sending your message. Please try again.");
      console.error("Error:", error);
    } else {
      setStatus("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" }); // ✅ Reset form
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${logoFont.className}`}>Get in Touch</h1>
      <p className={styles.description}>
        Fill out the form below, and I'll get back to you as soon as possible.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.button}>
          Send Message <span className={styles.arrow}>→</span>
        </button>
      </form>

      {/* Status Message */}
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
}
