import { Link, Outlet } from "react-router";

const navLinks = [
  {
    route: '/',
    text: 'Home'
  },
  {
    route: '/about',
    text: 'About Us'
  },
  {
    route: '/contact',
    text: 'Contact Us'
  }
];

export default function MainLayout() {
  return (
    <div className="wrapper">
      <header className="flex items-center justify-around bg-[#51A655]">
        <div className="w-10/12 flex justify-around items-center">
          <div className="p-2 min-w-28">
            <Link to="/">
            {/* TODO: replace with kitchen gurus logo */}
              <img
                src="https://placehold.co/250x125"
                alt="Placeholder image"
                className="block w-full dark:block"
              />
            </Link>
          </div>
          <nav className="[&>*]:font-['Manrope'] [&>*]:px-6 font-semibold flex grow">
            <ul className="flex justify-evenly grow">
              {navLinks.map(({ route, text }) => (
                <li>
                  <Link to={route} className="text-white">{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="absolute bottom-0 bg-black w-full">
        <div className="w-10/12 text-white m-auto">
          <div className="p-6 flex min-w-28">
            <Link to="/">
              {/* TODO: replace with kitchen gurus logo */}
              <img
                src="https://placehold.co/250x125"
                alt="Placeholder image"
                className="block w-full dark:block"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
