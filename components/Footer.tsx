import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © 插画由 <a href="https://abstractlab.gumroad.com/l/noto-avatar" target="_blank" rel="noopener noreferrer">Felix Wong</a> 设计且基于 <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0</a> 协议
        </div>
        <div className="community-link">
          <Link href="https://notion.cm/">
            <a target="_blank" rel="noopener noreferrer">Notion中文新社区</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 2rem 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .footer-content {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .copyright {
          color: rgba(55, 53, 47, 0.65);
          font-size: 14px;
          margin-bottom: 1rem;
        }
        .community-link a {
          color: rgb(55, 53, 47);
          text-decoration: none;
          font-weight: 500;
        }
        .community-link a:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  )
} 