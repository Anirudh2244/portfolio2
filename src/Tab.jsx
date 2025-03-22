function Tab() {
  return (
    <>
      <div className="flex justify-between items-center h-full overflow-hidden border-y-1 border-gray">
        <div className="flex">
          <a
            href="#"
            className="px-5 text-gray-500 border-r-1 py-3 border-gray hover:text-red-200"
          >
            _hello
          </a>
          <a
            href="#"
            className="px-5 text-gray-500 border-r-1 py-3 border-gray hover:text-red-200"
          >
            _about-me
          </a>
          <a
            href="#"
            className="px-5 text-gray-500 border-r-1 py-3 border-gray hover:text-red-200"
          >
            _projects
          </a>
        </div>
        <a
          href="#"
          className="px-5 border-r-1 py-3 border-gray text-theme-green border-l-1"
        >
          _contact-me
        </a>
      </div>
    </>
  );
}

export default Tab;
