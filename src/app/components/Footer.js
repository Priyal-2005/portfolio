export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <p>Designed &amp; built by Priyal Sarda &copy; {year}</p>
        </footer>
    );
}
