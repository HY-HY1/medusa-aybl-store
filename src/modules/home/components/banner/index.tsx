import { Button } from '@/components/ui/button';
import LocalizedClientLink from '@/modules/common/components/localized-client-link';
import React, { FC } from 'react';

interface BannerProps {
    imageURL: string;
    title: string;
    buttonCTA: string;
    href: string;
    description: string;
}

const Banner: FC<BannerProps> = ({ imageURL, title, buttonCTA, href, description }) => {
  return (
    <div className="w-full h-[700px] relative overflow-hidden ">
        <img src={imageURL} alt={title} className="w-full h-full object-cover absolute top-0 left-0 z-[-1]" />
        <div className=" w-[90vw] m-auto">
            <div className='w-full h-full flex justify-start align-middle mt-[35vh] flex-col'>
            <h1 className="text-4xl mb-4">{title}</h1>
            
            <p className="text-lg mb-4">{description}</p>
            <LocalizedClientLink href={href} className="mt-4">
                <Button variant='default'>{buttonCTA}</Button>
            </LocalizedClientLink>
            </div>
        </div>
    </div>
  );
}

export default Banner;
