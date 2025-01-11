import { FC } from "react";

interface FooterSection {
  id: string; // Add an ID for unique keys
  title: string;
  content: React.ReactNode;
}

const Footer= () => {
  const sections: FooterSection[] = [
    {
      id: "about-us", // Unique ID for this section
      title: "About Us",
      content: <p>Your company description here</p>,
    },
    {
      id: "quick-links", // Unique ID for this section
      title: "Quick Links",
      content: (
        <ul className="space-y-2">
          <li>
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-blue-400">
              Terms of Service
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: "contact", // Unique ID for this section
      title: "Contact",
      content: (
        <>
          <p>Email: contact@example.com</p>
          <p>Phone: (555) 123-4567</p>
        </>
      ),
    },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
