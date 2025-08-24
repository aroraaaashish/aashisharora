'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Aashish Arora" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Aashish Arora</h2>
          <p>CyberSecurity Specialist</p>
          <p>
            <a href="mailto:arora.aashish@rocketmail.com">arora.aashish@rocketmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Aashish Arora <Link href="/"></Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
