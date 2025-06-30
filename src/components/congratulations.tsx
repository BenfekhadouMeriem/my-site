import { Button } from './ui/button';

interface CongratulationsProps {
  onDownload: () => void;
}

const Congratulations: React.FC<CongratulationsProps> = ({ onDownload }) => {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold text-green-700">🎉 Congratulations!</h2>
      <p className='text-black'>You have successfully created your professional CV.</p>
      <Button
        onClick={onDownload}
        className="neumorphic text-white hover:text-white font-light w-full"
      >
        Download your CV
      </Button>
    </div>
  );
};

export default Congratulations;
