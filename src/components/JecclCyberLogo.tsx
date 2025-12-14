import { Shield } from "lucide-react";

interface JecclCyberLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "compact";
  className?: string;
}

const JecclCyberLogo = ({ size = "md", variant = "full", className = "" }: JecclCyberLogoProps) => {
  const sizeClasses = {
    sm: {
      container: "px-2 py-1",
      text: "text-xs tracking-[0.2em]",
      subtext: "text-[8px] tracking-[0.15em]",
      icon: "w-3 h-3",
      gap: "gap-1"
    },
    md: {
      container: "px-3 py-1.5",
      text: "text-sm tracking-[0.25em]",
      subtext: "text-[10px] tracking-[0.15em]",
      icon: "w-4 h-4",
      gap: "gap-1.5"
    },
    lg: {
      container: "px-4 py-2",
      text: "text-lg tracking-[0.3em]",
      subtext: "text-xs tracking-[0.2em]",
      icon: "w-5 h-5",
      gap: "gap-2"
    }
  };

  const s = sizeClasses[size];

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center ${s.gap} ${className}`}>
        <div className="relative">
          <Shield className={`${s.icon} text-accent fill-accent/20`} />
        </div>
        <span className={`font-bold ${s.text} text-foreground`}>JC</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div 
        className={`
          inline-flex items-center ${s.gap} ${s.container}
          border-2 border-current rounded-md
          font-semibold uppercase
        `}
      >
        <Shield className={`${s.icon} text-accent`} />
        <span className={s.text}>JECCL CYBER</span>
      </div>
      {variant === "full" && (
        <span className={`${s.subtext} uppercase text-muted-foreground mt-1 font-medium`}>
          Cybersecurity Solutions
        </span>
      )}
    </div>
  );
};

export default JecclCyberLogo;
