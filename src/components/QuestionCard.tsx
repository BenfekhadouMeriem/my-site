import { useRef } from 'react';
import { Question } from '../+types/root';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface QuestionCardProps {
  question: Question;
  isRequired: boolean;
  isAnswerValid?: boolean;
  currentAnswer: string;
  setCurrentAnswer: (value: string) => void;
  handleSend: () => void;
  handleSkip: () => void;
  setPhotoFile?: (file: File) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isRequired,
  isAnswerValid = true,
  currentAnswer,
  setCurrentAnswer,
  handleSend,
  handleSkip,
  setPhotoFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isPhotoQuestion = question.question.toLowerCase().includes('upload a photo');

  const handleTextAreaClick = () => {
    if (isPhotoQuestion && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrentAnswer(file.name);
      if (setPhotoFile) setPhotoFile(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            {question.category}
          </div>
          <div className="mt-1 font-medium text-gray-800">{question.question}</div>
        </div>
      </div>

      {question.tips && (
        <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
          <span className="font-semibold">💡 Tip:</span> {question.tips}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
          Your Answer:
        </label>

        {isPhotoQuestion && (
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        )}

        <Textarea
          id="answer"
          className="w-full bg-gray-200 text-black border border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer placeholder-gray-400"
          rows={isPhotoQuestion ? 1 : 5}
          readOnly={isPhotoQuestion}
          onClick={handleTextAreaClick}
          value={currentAnswer}
          onChange={(e) => !isPhotoQuestion && setCurrentAnswer(e.target.value)}
          placeholder={
            isPhotoQuestion
              ? 'Click here to upload a photo...'
              : 'Say or write your answer here..'
          }
        />


        {!isPhotoQuestion && (
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div>{currentAnswer.trim().split(/\s+/).filter(w => w.length > 0).length} words</div>
          </div>
        )}
      </div>

      <div className="flex space-x-3">
        {!isRequired && (
          <Button
            onClick={handleSkip}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
          >
            Skip
          </Button>
        )}
        <Button
          onClick={handleSend}
          disabled={!currentAnswer.trim() || !isAnswerValid}
          className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl transition ${
            (!currentAnswer.trim() || !isAnswerValid)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
