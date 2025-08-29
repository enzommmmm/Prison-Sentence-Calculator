export const Card = ({ children }) => <div className="border p-4 rounded bg-white shadow">{children}</div>;
export const CardContent = ({ children, className }) => <div className={className}>{children}</div>;
