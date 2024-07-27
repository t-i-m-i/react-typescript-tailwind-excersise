interface NavItemProps {
 href: string,
 isActive?: boolean,
 children: React.ReactNode,
}

export default function NavItem({ href, isActive, children }: NavItemProps) {
    return (
        <li>
            <a href={href} className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}>
                {children}
            </a>
        </li>
    )
}