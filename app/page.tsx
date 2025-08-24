import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Aashish Arora is a full-stack developer specializing in information security and cybersecurity solutions',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Introduction</Link>
            </h2>
          </div>
        </header>
        <p>
          I’m Aashish Arora, a seasoned Cybersecurity Architect with over 15 years of experience
          designing and implementing enterprise-grade security solutions to safeguard organizations
          against constantly evolving cyber threats. I specialize in building comprehensive security
          architectures, applying advanced cryptographic techniques to protect sensitive data, and
          aligning security initiatives with business objectives. With proven leadership in managing
          global, cross-functional teams across North America, Europe, and Asia, I bring a strategic
          hands-on approach to enterprise cybersecurity
        </p>
        <p>
          {' '}
          Please feel free to read more <Link href="/about">about me</Link>, or you can check out my{' '}
          <Link href="/resume">resume</Link>, <Link href="/projects">projects</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or <Link href="/contact">contact</Link> me.
        </p>
      </article>
    </PageWrapper>
  );
}
