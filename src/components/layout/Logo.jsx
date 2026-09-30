import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <div>
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            alt="logo"
            src={"/assets/logo.png"}
            width={50}
            height={30}
          ></Image>
          <h2 className="font-semibold text-2xl">Hero <span className='text-primary'>Kidzz</span> </h2>
        </Link>
      </div>
    );
};

export default Logo;