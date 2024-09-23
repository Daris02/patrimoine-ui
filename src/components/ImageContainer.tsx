
function ImageContainer ({ imageSrc }: { imageSrc: string}) {
  return (
    <div className="flex items-center">
      <img src={imageSrc} alt="Placeholder" className="w-full h-full mr-2" />
    </div>
  );
};

export default ImageContainer;