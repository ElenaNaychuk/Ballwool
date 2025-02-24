import Link from 'next/link';

  const breadcrumbData = [
    { path: '/', label: 'Home' },
    { path: '/shoes', label: 'Shoes' },
    { path: '/shoes/mens-shoes', label: 'Men’s Shoes' },
    { path: '/shoes/mens-shoes/sneakers', label: 'Sneakers' },
    { path: '/shoes/mens-shoes/sneakers/tie-sneakers', label: 'Tie Sneakers' },
  ];

export const Breadcrumbs = () => {

  return (
    <nav aria-label="Breadcrumb" className="flex gap-1">
      {breadcrumbData.map((crumb, index) => (
        <span key={index} className="text-text-light">
          {index > 0 && ' / '}
          <Link href={crumb.path} className={index === breadcrumbData.length - 1 ? 'text-text-dark': 'text-text-light'}>
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  )
}