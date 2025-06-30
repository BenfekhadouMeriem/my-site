const Robot3D = () => {
  return (
    <div className="relative w-full h-[600px]">
      <iframe 
        src='https://my.spline.design/nexbotrobotcharacterconcept-29CXC3L3snozy5A6wGUVfgXQ/' 
        frameBorder='0' 
        width='100%' 
        height='100%' 
        className="rounded-2xl"
        title="Lunexa AI Trading Bot 3D Character"
      />
      {/* Hide Spline branding with overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #e3e3e3, transparent)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-32 h-8 bg-gray-200 pointer-events-none z-20"
      />
    </div>
  );
};

export default Robot3D;
