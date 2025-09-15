import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TestFiltersProps {
  questionCount: string;
  setQuestionCount: (value: string) => void;
  difficulty: string;
  setDifficulty: (value: string) => void;
  timeLimit: string;
  setTimeLimit: (value: string) => void;
}

const TestFilters = ({
  questionCount,
  setQuestionCount,
  difficulty,
  setDifficulty,
  timeLimit,
  setTimeLimit,
}: TestFiltersProps) => {
  return (
    <Card className="p-6 bg-secondary-gradient border-border shadow-card">
      <h2 className="text-xl font-semibold mb-6 text-foreground">Test Configuration</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="questions" className="text-sm font-medium text-foreground">
            Number of Questions
          </Label>
          <Select value={questionCount} onValueChange={setQuestionCount}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select number of questions" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="10">10 Questions</SelectItem>
              <SelectItem value="20">20 Questions</SelectItem>
              <SelectItem value="30">30 Questions</SelectItem>
              <SelectItem value="50">50 Questions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty" className="text-sm font-medium text-foreground">
            Difficulty Level
          </Label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
              <SelectItem value="mixed">Mixed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm font-medium text-foreground">
            Time Limit
          </Label>
          <Select value={timeLimit} onValueChange={setTimeLimit}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select time limit" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="30">30 Minutes</SelectItem>
              <SelectItem value="60">1 Hour</SelectItem>
              <SelectItem value="90">1.5 Hours</SelectItem>
              <SelectItem value="120">2 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default TestFilters;