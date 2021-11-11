import clsx from 'clsx';
import React, { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const UpdateAImage: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const [photos, setPhotos] = useState<File[]>([]);

  const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    const node = e.target as HTMLInputElement;
    const cFiles = node.files;
    if (cFiles) {
      for (const f of cFiles) {
        //here i should use a file validator before set the state validType(file: File) => boolean
        setPhotos((p) => [...p, f]);
      }
    }
  };

  return (
    <>
      <fieldset>
        <legend>Add a photo</legend>

        {photos.map((photo) => {
          const url = URL.createObjectURL(photo);
          return (
            <img
              key={`${photo.name}${photo.lastModified}`}
              src={url}
              className='uploadUserThumbnail'
              alt={photo.name}
            />
          );
        })}

        <label className={clsx('fileInput', className)}>
          +
          <input
            id='file'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            multiple
            onInput={handleInput}
            {...rest}
          />
        </label>
      </fieldset>

      <style jsx>{`
        label {
          display: grid;
          place-items: center;
          width: 60px;
          height: 60px;
          border: 1px solid var(--light);
          color: var(--gray);
          font-size: 24px;
        }
        fieldset {
          display: grid;
          grid-auto-columns: 60px;
          grid-template-columns: repeat(auto-fill, 60px);
          gap: 12px;
          max-width: 100%;
          border: none;
        }
        legend {
          padding: 24px 0 12px 0;
        }
        :global(.uploadUserThumbnail) {
          width: 60px;
          height: 60px;
        }
      `}</style>
    </>
  );
};

export default UpdateAImage;
