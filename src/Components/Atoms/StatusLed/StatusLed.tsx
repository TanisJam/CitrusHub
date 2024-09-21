interface StatusLedProps {
  online: boolean;
  className?: string;
}

export default function StatusLed({ online, className }: StatusLedProps) {
  return (
    <div className={className}>
      <div className="relative">
        <div
          className={`absolute top-0.5 right-0.5 w-1.5 h-1.5 blur-sm rounded-full
          ${online ? 'bg-alert-green' : 'bg-alert-red'}`}
        />
        <div
          className={`absolute top-0 right-0 w-2 h-2 rounded-full
          ${online ? 'bg-alert-green' : 'bg-alert-red'}`}
        />
      </div>
    </div>
  );
}
