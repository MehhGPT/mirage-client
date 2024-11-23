export function FullScreenLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
            {/* Loader Animation */}
            <div className="flex flex-col items-center gap-4 animate-fade-in">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-transparent border-t-gray-100 rounded-full animate-spin"></div>

                {/* Loading Text */}
                <span className="text-gray-100 text-lg font-medium tracking-wider animate-pulse">
                    Loading...
                </span>
            </div>
        </div>
    );
}
