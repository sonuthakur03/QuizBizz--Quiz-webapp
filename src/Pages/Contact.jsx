import React from "react";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

const Contact = () => {
  return (
    <section className="max-h-screen h-[72vh] bg-background flex items-center justify-center p-6">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-7xl p-10">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-text mb-3">Contact Us</h1>
        <p className="text-muted mb-8">
          Have questions, feedback, or suggestions? Reach out anytime.
        </p>

        <div className="grid grid-rows-1  gap-8 w-full">
          {/* RIGHT FORM
          <div className="bg-background border border-border rounded-xl p-6">
            <form className="space-y-4">
              <div>
                <label className="text-text text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 p-3 rounded-xl bg-surface border border-border text-text focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-text text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full mt-1 p-3 rounded-xl bg-surface border border-border text-text focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-text text-sm">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 p-3 rounded-xl bg-surface border border-border text-text focus:outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-text py-3 rounded-xl hover:bg-primary/80 transition-all"
              >
                Send Message
              </button>
            </form>
          </div> */}
          {/* LEFT INFO SECTION */}
          <div className="bg-background border flex-center flex-col border-border rounded-xl p-6 gap-4 ">
            <div className="flex-center gap-8 p-8">
              <div className="flex items-center gap-3">
                <LuMail className="text-primary" size={22} />
                <div>
                  <p className="text-text font-semibold">Email</p>
                  <p className="text-muted text-sm">rsonuth789@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LuPhone className="text-primary" size={22} />
                <div>
                  <p className="text-text font-semibold">Phone</p>
                  <p className="text-muted text-sm">+977 9768401636</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LuMapPin className="text-primary" size={22} />
                <div>
                  <p className="text-text font-semibold">Location</p>
                  <p className="text-muted text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="text-muted text-sm pt-4 ">
              We usually respond within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
