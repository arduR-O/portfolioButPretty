const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/omansh-sharma-90a31b250/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-10" alt="linkedin-link" src="../assets/linkedin.svg" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/arduR-O"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-10" alt="github-link" src="../assets/github.svg" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/OmanshSharma3"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="x-link" src="../assets/x.svg" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  