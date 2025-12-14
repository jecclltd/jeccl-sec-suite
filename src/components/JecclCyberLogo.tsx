interface JecclCyberLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "horizontal";
  className?: string;
}

const JecclNetworkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central circle with ring */}
    <circle cx="50" cy="50" r="22" fill="currentColor" />
    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
    
    {/* Connection lines to outer nodes */}
    {/* Top */}
    <line x1="50" y1="22" x2="50" y2="8" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="6" r="6" fill="currentColor" />
    
    {/* Top Right */}
    <line x1="70" y1="30" x2="82" y2="18" stroke="currentColor" strokeWidth="4" />
    <circle cx="85" cy="15" r="6" fill="currentColor" />
    
    {/* Bottom Right */}
    <line x1="70" y1="70" x2="82" y2="82" stroke="currentColor" strokeWidth="4" />
    <circle cx="85" cy="85" r="6" fill="currentColor" />
    
    {/* Bottom */}
    <line x1="50" y1="78" x2="50" y2="92" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="94" r="6" fill="currentColor" />
    
    {/* Bottom Left */}
    <line x1="30" y1="70" x2="18" y2="82" stroke="currentColor" strokeWidth="4" />
    <circle cx="15" cy="85" r="6" fill="currentColor" />
    
    {/* Top Left */}
    <line x1="30" y1="30" x2="18" y2="18" stroke="currentColor" strokeWidth="4" />
    <circle cx="15" cy="15" r="6" fill="currentColor" />
  </svg>
);

const JecclCyberLogo = ({ size = "md", variant = "full", className = "" }: JecclCyberLogoProps) => {
  const sizeClasses = {
    sm: {
      icon: "w-8 h-8",
      text: "text-lg",
      superscript: "text-[10px]",
      gap: "gap-1",
      container: "gap-1"
    },
    md: {
      icon: "w-10 h-10",
      text: "text-xl",
      superscript: "text-xs",
      gap: "gap-1.5",
      container: "gap-1.5"
    },
    lg: {
      icon: "w-14 h-14",
      text: "text-3xl",
      superscript: "text-sm",
      gap: "gap-2",
      container: "gap-2"
    }
  };

  const s = sizeClasses[size];

  if (variant === "icon") {
    return <JecclNetworkIcon className={`${s.icon} text-primary ${className}`} />;
  }

  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center ${s.container} ${className}`}>
        <JecclNetworkIcon className={`${s.icon} text-primary`} />
        <div className="flex items-baseline">
          <span className={`font-bold ${s.text} text-primary tracking-tight`} style={{ fontFamily: 'system-ui, sans-serif' }}>
            Jeccl
          </span>
          <span className={`font-semibold ${s.superscript} text-accent ml-0.5 -translate-y-1`}>
            Cyber
          </span>
        </div>
      </div>
    );
  }

  // Full variant - stacked
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <JecclNetworkIcon className={`${s.icon} text-primary`} />
      <div className="flex items-baseline mt-1">
        <span className={`font-bold ${s.text} text-primary tracking-tight`} style={{ fontFamily: 'system-ui, sans-serif' }}>
          Jeccl
        </span>
        <span className={`font-semibold ${s.superscript} text-accent ml-0.5 -translate-y-1`}>
          Cyber
        </span>
      </div>
    </div>
  );
};

export default JecclCyberLogo;
