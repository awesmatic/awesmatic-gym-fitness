  import Logo from "@/assets/Logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-100 py-16 text-gray-500 transition-colors duration-300 dark:bg-dark-100 dark:text-dark-text">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            alt="logo"
            src={Logo}
            className="rounded-md dark:bg-gray-20 dark:px-2 dark:py-1"
          />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© {year} Awesmatic. All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-display font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-display font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>987654321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
