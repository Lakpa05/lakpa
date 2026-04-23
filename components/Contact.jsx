'use client'
import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });

            setResult("Message sent successfully!");
            event.target.reset();
        } catch (error) {
            setResult("Something went wrong!");
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto"
            >
                {/* Required hidden input for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                <input type="hidden" name="subject" value="New Contact Form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="flex-1 px-3 py-2 border rounded-md"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-3 py-2 border rounded-md"
                    />
                </div>

                <textarea
                    name="message"
                    rows="6"
                    placeholder="Enter your message"
                    required
                    className="w-full px-4 py-2 border rounded-md mb-6"
                ></textarea>

                <button
                    type="submit"
                    className="py-2 px-8 bg-black text-white rounded-full mx-auto flex items-center gap-2"
                >
                    Submit now
                </button>

                <p className="mt-4 text-center">{result}</p>
            </form>
        </div>
    );
}