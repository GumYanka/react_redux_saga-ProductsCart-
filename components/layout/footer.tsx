type SocialLink = {
    href: string;
    icon: any;
};

const socialLinks: SocialLink[] = [
    { href: 'https://facebook.com', icon: '/facebook.png' },
    { href: 'https://twitter.com', icon: '/twitter.png' },
    { href: 'https://instagram.com', icon: '/instagram.png' },
    { href: 'https://linkedin.com', icon: '/linkedin.png' },
];

const Footer: React.FC = () => {
    return (
        <footer className='bg-stone-800	'>
            <div className='container mx-auto py-5 px-4 flex flex-wrap justify-between items-center'>
                <p className='text-gray-400'>
                    © 2023 Next.js Tailwind Starter.
                </p>
                <ul className='flex space-x-4'>
                    {socialLinks.map((socialLink) => {
                        return (
                            <li key={socialLink.href}>
                                <a
                                    href={socialLink.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-white transition-colors duration-300'
                                >
                                    <img
                                        src={socialLink.icon}
                                        className='h-6 w-6 text-white'
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
