interface ListProps {
    children: React.ReactNode;
}

// const List: React.FC<ListProps> = ({ children }) => {
//     return (
//         <ul className="divide-y divide-slate-100">
//             {children}
//         </ul>
//     )
// }

// export default List;


// This approach is functionally equivalent to the previous example but may be preferable if you want to avoid using the React.FC type. Some developers prefer this method as it can be more explicit and provide better type inference for default props and static properties.

export default function List({ children }: ListProps) {
    return(
        <ul className="divide-y divide-slate-100">
            {children}
        </ul>
    )
}