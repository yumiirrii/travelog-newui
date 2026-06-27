import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
    // ({ className = "", ...props }, ref) => {
    () => {
        return (
            <input
                // ref={ref}
                // {...props}
                // className={`p-2 border-[#626262] border-1 ${className}`}
                className={`bg-white p-2 border-[#626262] border-1`}
            />
        );
    },
);
