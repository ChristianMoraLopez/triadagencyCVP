"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          WebSocial Pro
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="hidden md:inline-flex">Get Started</Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;