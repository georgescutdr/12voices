import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
return ( 
  <Link href="/">
    <Image
      src="/logo.jpeg"  
      alt=""
      width={40}       
      height={40}       
    /> 
  </Link>
  );
};

export default Logo;
