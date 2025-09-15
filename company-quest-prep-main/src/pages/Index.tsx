import { useState } from "react";
import { Button } from "@/components/ui/button";
import CompanyCard from "@/components/CompanyCard";
import TestFilters from "@/components/TestFilters";
import { useToast } from "@/hooks/use-toast";

import servicenowLogo from "@/assets/servicenow-logo.png";
import amazonLogo from "@/assets/amazon-logo.png";
import autodeskLogo from "@/assets/autodesk-logo.png";
import googleLogo from "@/assets/google-logo.png";
import microsoftLogo from "@/assets/microsoft-logo.png";

const companies = [
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Autodesk", logo: autodeskLogo },
  { name: "Google", logo: googleLogo },
  { name: "Microsoft", logo: microsoftLogo }
];

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [questionCount, setQuestionCount] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [timeLimit, setTimeLimit] = useState<string>("");
  const { toast } = useToast();

  const handleStartTest = () => {
    if (!selectedCompany || !questionCount || !difficulty || !timeLimit) {
      toast({
        title: "Incomplete Configuration",
        description: "Please select all test parameters before starting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Test Starting!",
      description: `Starting ${selectedCompany} mock test with ${questionCount} ${difficulty} questions for ${timeLimit} minutes.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-secondary-gradient">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-center bg-primary-gradient bg-clip-text text-transparent">
            Mock Test Platform
          </h1>
          <p className="text-center text-muted-foreground mt-2 text-lg">
            Practice technical interviews with top tech companies
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Company Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Choose Your Target Company
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                logo={company.logo}
                isSelected={selectedCompany === company.name}
                onClick={() => setSelectedCompany(company.name)}
              />
            ))}
          </div>
        </section>

        {/* Test Configuration - Only shown after company selection */}
        {selectedCompany && (
          <>
            <section className="mb-12">
              <div className="max-w-2xl mx-auto">
                <TestFilters
                  questionCount={questionCount}
                  setQuestionCount={setQuestionCount}
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  timeLimit={timeLimit}
                  setTimeLimit={setTimeLimit}
                />
              </div>
            </section>

            {/* Start Test Button */}
            {questionCount && difficulty && timeLimit && (
              <section className="text-center">
                <Button
                  onClick={handleStartTest}
                  size="lg"
                  className="bg-primary-gradient hover:shadow-button transition-all duration-300 hover:scale-105 px-12 py-6 text-lg font-semibold"
                >
                  Start {selectedCompany} Mock Test
                </Button>
                <p className="text-muted-foreground mt-4">
                  {questionCount} questions • {difficulty} difficulty • {timeLimit} minutes
                </p>
              </section>
            )}
          </>
        )}

        {/* Welcome Message - Only shown when no company is selected */}
        {!selectedCompany && (
          <section className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Get Ready for Your Dream Job
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Practice with real interview questions from top tech companies. 
                Select a company above to configure your personalized mock test experience.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;