import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data to the console
    console.log("📩 Contact Form Data:", formData);
  
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(formData);
    localStorage.setItem("messages", JSON.stringify(messages));
  
    // Reset form & show success message
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-4 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-900"
      }`}
    >
      <div
        className={`p-8 rounded-2xl shadow-xl max-w-md w-full text-center ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        {submitted && (
          <p className="text-green-400 font-semibold mb-4">
            Message saved successfully!
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 
                      transition-all bg-transparent border-gray-500 text-inherit"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 
                      transition-all bg-transparent border-gray-500 text-inherit"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 
                      transition-all bg-transparent border-gray-500 text-inherit"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg 
                      hover:bg-pink-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-lg 
                      hover:bg-gray-600 transition"
        >
          {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg 
                      hover:bg-gray-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
