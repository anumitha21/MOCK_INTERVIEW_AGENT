import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  name: string;
  logo: string;
  isSelected: boolean;
  onClick: () => void;
}

const CompanyCard = ({ name, logo, isSelected, onClick }: CompanyCardProps) => {
  return (
    <Card 
      className={cn(
        "relative p-4 cursor-pointer transition-all duration-300 border-2",
        "hover:shadow-glow hover:scale-105 hover:-translate-y-1",
        "bg-secondary-gradient border-border shadow-card",
        isSelected 
          ? "border-primary bg-primary-gradient shadow-glow scale-105 -translate-y-1" 
          : "hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background border">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className={cn(
            "text-lg font-semibold",
            isSelected ? "text-primary-foreground" : "text-foreground"
          )}>
            {name}
          </h3>
          <p className={cn(
            "text-sm mt-1",
            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            Technical Assessment
          </p>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-foreground">
              <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CompanyCard;