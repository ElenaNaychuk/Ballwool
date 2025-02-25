import Link from 'next/link';
import React from 'react';

  const breadcrumbData = [
    { path: '/', label: 'Home' },
    { path: '/shoes', label: 'Shoes' },
    { path: '/shoes/mens-shoes', label: 'Men’s Shoes' },
    { path: '/shoes/mens-shoes/sneakers', label: 'Sneakers' },
    { path: '/shoes/mens-shoes/sneakers/tie-sneakers', label: 'Tie Sneakers' },
  ];

export const Breadcrumbs = () => {

  return (
    <nav aria-label="Breadcrumb" className="flex gap-2 items-center h-6">
      {breadcrumbData.map((crumb, index) => (
        <React.Fragment key={index}>
          <span className="text-small text-text-light">{index > 0 && '/'}</span>
          <span className="text-small text-text-light">
            <Link href={crumb.path} className={index === breadcrumbData.length - 1 ? 'text-text-dark': 'text-text-light'}>
              {crumb.label}
            </Link>
          </span>
        </React.Fragment>
      ))}
    </nav>
  )
}