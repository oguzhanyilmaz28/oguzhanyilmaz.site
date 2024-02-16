import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-full h-14 flex items-center justify-center font-semibold border-t">
            Created by
            <Link
                className="underline text-black dark:text-white ml-1"
                href="https://github.com/oguzhanyilmaz28/oguzhanyilmaz.site"
                target="_blank"
            >
                @oguzhanyilmaz28
            </Link>
        </div>
    );
}
