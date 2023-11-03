
const LoadingSpinner = ({text}: {text?: string}) => {
    return (
        <div className="flex justify-center items-center flex-col gap-3">
            <div className="w-12 h-12 border-b-4 border-t-4 border-primary rounded-full animate-spin"></div>
            <div className="ml-3 text-primary font-bold">{text || 'Cargando...'}</div>
        </div>
    );
};

export default LoadingSpinner;
