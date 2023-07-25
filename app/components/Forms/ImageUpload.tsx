"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';

import { Button } from '../Elements';
import Image from 'next/image';
import { ImagePlus, Trash } from 'lucide-react';
import { Fa500Px, FaTrash } from 'react-icons/fa';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return ( 
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button clickEvent={() => onRemove(url)} modifier='btn' icon={FaTrash}/>
            </div>
            <Image
              fill
              className="object-cover"
              alt="Image"
              src={url}
            />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="t4drjppf">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button 
              
              clickEvent={onClick}
              icon={Fa500Px}

            >
              <div>

              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
              </div>
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
 
export default ImageUpload;