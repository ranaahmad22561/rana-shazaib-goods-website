import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section">
      <div className="container">
        <div className="quote-card">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you requested could not be found.</p>
          <Link className="btn btn--primary" href="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
