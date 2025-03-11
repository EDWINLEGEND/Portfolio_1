"use client";

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ImagePlaceholder = ({
  width,
  height,
  text = 'Image Placeholder',
  bgColor = '#4F46E5',
  textColor = '#ffffff',
  className = '',
}: ImagePlaceholderProps) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        color: textColor,
        fontSize: Math.min(width, height) * 0.1,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div className="text-center p-4">
        {text}
      </div>
    </div>
  );
};

export default ImagePlaceholder; 