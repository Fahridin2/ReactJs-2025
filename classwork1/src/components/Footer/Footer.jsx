import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Спасибо за посищение моего сайта.
    </footer>
  );
}
