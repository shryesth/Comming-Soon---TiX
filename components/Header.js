import Link from 'next/link';
import Image from '../LOGO (1).png';
export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div>
        <img
          style={{ width: '15rem', height: '10rem', objectFit: 'contain' }}
          src="https://drive.google.com/uc?id=1PF-VOm6FegyY8oDuzfhV_107dmJgq_QT"
          alt=""
        />
      </div>

      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
