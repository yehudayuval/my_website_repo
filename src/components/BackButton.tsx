'use client';

export default function BackButton({ className }: { className?: string }) {
    return (
        <button
            onClick={() => history.back()}
            className={className}
            type="button"
        >
            <span className="truncate">חזור אחורה</span>
        </button>
    );
}