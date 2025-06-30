import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import QuestionCard from './QuestionCard';
import { questions, optionalCategoryOptions, followUpQuestionsMap } from './types';
import { generateCVpdf } from './generateCVpdf';
import { Answer, Question } from '../+types/root';

const Resume = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [customFlowStep, setCustomFlowStep] = useState<null | 'awaiting-extra' | 'awaiting-confirmation'>(null);
  const [lastOptionalChoice, setLastOptionalChoice] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const filteredQuestions = questions['beginner'];
  const requiredIds = [
    'b_html_2',
    'b_html_3',
    'b_html_4',
    'b_html_5',
    'b_css_1',
    'b_js_1',
    'b_react_1',
    'b_gen_1',
    'b_gen_2',
    'b_gen_3',
  ];
  const currentQuestion = filteredQuestions[step];
  const isRequired = currentQuestion ? requiredIds.includes(currentQuestion.id) : false;

  const validOptionalChoices = optionalCategoryOptions.map(opt => opt.toLowerCase());
  const isAnswerValid = customFlowStep === 'awaiting-confirmation'
    ? ['yes', 'no'].includes(currentAnswer.trim().toLowerCase())
    : currentQuestion?.id === 'b_gen_4'
    ? validOptionalChoices.some((opt) => currentAnswer.trim().toLowerCase().includes(opt))
    : true;

  const handleSend = () => {
    if (!currentAnswer.trim()) return;

    if (!customFlowStep) {
      const current = filteredQuestions[step];

      if (current.id === 'b_gen_4') {
        const choice = optionalCategoryOptions.find(opt =>
          currentAnswer.toLowerCase().includes(opt.toLowerCase())
        );

        if (choice) {
          setLastOptionalChoice(choice);
          setCustomFlowStep('awaiting-extra');
          setCurrentAnswer('');
          return;
        }
      }

      const newAnswer: Answer = {
        question: current,
        response: currentAnswer,
        feedback: '',
        score: 0,
      };

      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);

      setCurrentAnswer('');
      setStep(prev => prev + 1);
      return;
    }

    if (customFlowStep === 'awaiting-extra' && lastOptionalChoice) {
      const newAnswer: Answer = {
        question: {
          id: `optional_${lastOptionalChoice.toLowerCase()}`,
          question: followUpQuestionsMap[lastOptionalChoice],
          category: "Additional Info",
        },
        response: currentAnswer,
        feedback: '',
        score: 0,
      };

      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);

      setCustomFlowStep('awaiting-confirmation');
      setCurrentAnswer('');
      return;
    }

    if (customFlowStep === 'awaiting-confirmation') {
      const wantsMore = currentAnswer.trim().toLowerCase().startsWith('y');
      setCurrentAnswer('');

      if (wantsMore) {
        setCustomFlowStep(null);
        return;
      } else {
        setStep((prev) => {
          const nextStep = prev + 1;
          if (nextStep >= filteredQuestions.length) {
            setIsCompleted(true);
          }
          return nextStep;
        });
      }
    }
  };

  const handleSkip = () => {
    if (step + 1 < filteredQuestions.length) {
      setStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleDownload = () => {
    generateCVpdf(answers, photoFile);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/logo.webp" alt="Logo" className="h-8 w-auto" />
            </Link>
            <Button
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="neumorphic bg-black text-white hover:bg-black hover:text-white border border-black"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4 fade-in-up">
              Create Resume
            </h1>
            <p className="text-xl font-light text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Build a professional resume with AI assistance
            </p>
          </div>

          <Card className="p-6 glass bg-gray-300 border border-black">
            {isCompleted ? (
              <div className="space-y-4 text-center">
                <h2 className="text-xl font-bold text-green-700">🎉 Congratulations!</h2>
                <p>You have successfully created your professional CV.</p>
                <Button
                  onClick={handleDownload}
                  className="neumorphic text-white hover:text-white font-light w-full"
                >
                  Download your CV
                </Button>
              </div>
            ) : customFlowStep === 'awaiting-extra' && lastOptionalChoice ? (
              <QuestionCard
                question={{
                  id: `optional_${lastOptionalChoice.toLowerCase()}`,
                  question: followUpQuestionsMap[lastOptionalChoice],
                  category: "Additional Info",
                }}
                isRequired={false}
                isAnswerValid={true}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                handleSend={handleSend}
                handleSkip={handleSkip}
              />
            ) : customFlowStep === 'awaiting-confirmation' ? (
              <QuestionCard
                question={{
                  id: 'confirm_more_optional',
                  question: "Do you want to mention any other info? (yes/no)",
                  category: "Additional Info",
                }}
                isRequired={false}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                handleSend={handleSend}
                handleSkip={handleSkip}
              />
            ) : currentQuestion ? (
              <QuestionCard
                question={currentQuestion}
                isRequired={requiredIds.includes(currentQuestion.id)}
                isAnswerValid={isAnswerValid}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                handleSend={handleSend}
                handleSkip={handleSkip}
                setPhotoFile={setPhotoFile}
              />
            ) : null}

            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 text-center mt-1">
                {step + 1} / {filteredQuestions.length}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Resume;
