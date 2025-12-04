import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
return ( 
  <Link href="/">
    <Image
      src="/logo.jpeg"  
      alt=""
      width={60}       
      height={60}       
    /> 
  </Link>
  );
};

export default Logo;
