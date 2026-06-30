export const ErrorMessage = ({ errors }: { errors: string[] }) => {
    return (
        <>
            {errors.length > 0 && (
                <div className="text-red-600 text-sm">
                    <ul>
                        {errors.map((msg, i) => (
                            <li key={i}>{msg}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};
