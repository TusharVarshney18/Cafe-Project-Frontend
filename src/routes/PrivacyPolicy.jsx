import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="px-6 py-20 bg-[#f8f3ec] text-[#4b2e2b]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4b2e2b]">Privacy Policy</h1>
        <p className="mt-3 text-[#6b4f4f]">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mt-6 leading-relaxed">
          This Privacy Policy applies to the <strong>CoffeeHub</strong> demo project. This website is built for educational and portfolio demonstration purposes
          only and does not represent a real business or commercial service.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Information Collection</h2>
        <p className="mt-3 leading-relaxed">
          The website may display input fields such as name, email, or phone number as part of the UI design, but no real personal information is collected,
          stored, or shared. Any data entered in forms is purely for demonstration and does not get saved.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Use of Data</h2>
        <p className="mt-3 leading-relaxed">
          Since no actual user data is stored, processed, or shared, there is no real-world usage of personal information. Any ordering or checkout process
          visible on the website is part of the UI/UX demonstration only.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Data Security</h2>
        <p className="mt-3 leading-relaxed">
          As no real data is collected, there are no security risks regarding personal information. This site should be treated as a front-end prototype.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Third-Party Services</h2>
        <p className="mt-3 leading-relaxed">
          This project does not integrate any third-party tracking, analytics, or advertising services that collect personal information.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          For questions or collaboration opportunities, feel free to reach out:
          <br />
          <strong>tusharvarshney1810@gmail.com</strong>
        </p>

        <p className="mt-8 text-sm text-[#6b4f4f] italic">Note: This is a student project created for learning and portfolio purposes only.</p>
      </div>
    </section>
  );
}
