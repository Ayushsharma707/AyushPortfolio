import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import ScrollToTop from "../components/ScrollToTop";




const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
        access_key: process.env.REACT_APP_WEB3FORMS_KEY ,
      name,
      email,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        setResponseMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      id="contact"
      className={darkMode ? "bg-gray-100 pt-24" : "bg-black pt-24 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center">Contact</h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <br />
          <p className={`text-xl ${darkMode ? "text-gray-500" : "text-gray-300"}`}>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row mt-12 pb-24">
          <div className="w-full md:pr-8">
            <form onSubmit={onSubmit}>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="underline">
                  <a href="mailto:ayushsharma70797@gmail.com">
                    Send me email directly
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
                {responseMessage && (
                  <p
                    className={`ml-4 text-sm ${responseMessage.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                      }`}
                  >
                    {responseMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* Contact Details */}
          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:ayushsharma70797@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700"
            >
              ayushsharma70797@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4 mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Ballia, U.P
              <br />
              India
            </a>
            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a
                  key={index}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                </a>
              ))}
            </ul>
          </div>
        </div>
        <ScrollToTop />
      </div>
      {/* Footer */}
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-2 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-2 flex justify-center"
        }
      >
        Find an issue with this page?{" "}
        <a
          href="https://github.com/Ayushsharma707/AyushPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-indigo-500 underline hover:text-indigo-700"
        >
          Fix it on GitHub
        </a>
      </div>

      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-2 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-2 flex justify-center"
        }
      >
        Made by Ayush Sharma
      </div>


    </div>
  );
};

export default Contact;