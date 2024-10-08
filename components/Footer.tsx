import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">WebSocial Pro</h3>
            <p>Elevating your online presence with professional web development and social media management services.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@websocialpro.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 WebSocial Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;