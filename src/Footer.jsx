function Footer() {
  return (
    <>
      <div className="flex  justify-between items-center h-full overflow-hidden">
        <div className="flex">
          <a
            href="#"
            className="text-theme-green border-r-1 py-3 px-5 border-r-gray-500"
          >
            find me in:
          </a>
          <a
            href="#"
            className="text-theme-green border-r-1 py-3 px-5 border-r-gray-500"
          >
            l-logo
          </a>
        </div>

        <a
          href="#"
          className="text-theme-green border-l-1 py-3 px-5 border-r-gray-500"
        >
          @github-link
        </a>
      </div>
    </>
  );
}

export default Footer;
