const Footer = () => {
  return (
    <footer className="mt-10 w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto  bg-primary-foreground">
      <div className="text-center">
        <div className="flex justify-center">
          <a
            className=""
            href="https://www.themoviedb.org"
            target="_blank"
            aria-label="tmdb"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
              width={300}
              alt="tmdb logo"
            />
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">
            This product uses the{" "}
            <a
              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="https://www.themoviedb.org"
              target="_blank"
            >
              TMDb
            </a>{" "}
            API but is not endorsed or certified by TMDb.
          </p>
          <p className="text-gray-500">© Watchix. 2024. All rights reserved.</p>
        </div>

        <div className="mt-3 space-x-2">
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="https://github.com/AchrafMahdi"
            target="_blank"
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
