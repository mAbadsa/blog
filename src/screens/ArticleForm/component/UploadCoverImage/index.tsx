import { FC, useState, useReducer, ChangeEvent, MouseEvent } from 'react';
import Image from 'next/image';
import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import MUIButton from '@material-ui/core/Button';
import Button from '../../../../components/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';
import { useTheme } from '@material-ui/styles';

const uploadImage = async (imgData: string | ArrayBuffer | null) => {
  let response: AxiosResponse = await axios.post('/api/articles/cover-image', {
    data: imgData,
  });

  return response;
};

function coverImageUploaderReducer<T extends Object, U extends Object>(
  state: {
    uploadError: Boolean;
    uploadErrorMessage: null;
    uploadingImage: Boolean;
    insertionImageUrls: string | null;
    imageView: string | ArrayBuffer | null;
  },
  action: { type: string; payload?: any },
) {
  const { type, payload } = action;

  switch (type) {
    case 'uploading_image':
      console.log('payload', payload.uploadingImage);
      return {
        ...state,
        uploadError: false,
        uploadErrorMessage: null,
        uploadingImage: payload.uploadingImage,
      };

    case 'upload_image_error':
      return {
        ...state,
        insertionImageUrls: '',
        uploadError: true,
        uploadErrorMessage: payload.errorMessage,
        uploadingImage: false,
      };

    case 'upload_image_success':
      return {
        ...state,
        insertionImageUrls: payload.url,
        uploadingImage: payload.uploadingImage,
      };
    case 'preview_image':
      return {
        ...state,
        imageView: payload.imageView,
        uploadingImage: payload.uploadingImage,
      };
    case 'remove_image':
      return {
        ...state,
        insertionImageUrls: null,
        uploadingImage: payload.uploadingImage,
        imageView: null,
      };

    default:
      return state;
  }
}

const UploadCoverImage: FC<{
  articleCoverImage: Function;
  defaultCoverImage: string;
}> = ({ articleCoverImage, defaultCoverImage }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (imgData: string | ArrayBuffer | null) => uploadImage(imgData),
    {
      onSuccess: async (data: AxiosResponse) => {
        handleUploadImageSucess(data.data.imageUrl);
        articleCoverImage(data.data.imageUrl);
      },
    },
  );

  const [state, dispatch] = useReducer(coverImageUploaderReducer, {
    uploadError: false,
    uploadErrorMessage: null,
    uploadingImage: isLoading,
    insertionImageUrls: defaultCoverImage || '',
    imageView: defaultCoverImage || '',
  });

  const { uploadError, uploadErrorMessage, uploadingImage, insertionImageUrls, imageView } = state;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || evt.target.files.length === 0) return;
    const image = evt.target.files[0] || insertionImageUrls;
    dispatch({
      type: 'uploading_image',
      payload: { uploadingImage: isLoading },
    });

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = async () => {
      mutate(reader.result);
    };
  };

  function handleUploadImageSucess<T extends string>(imageUrl: T) {
    dispatch({
      type: 'upload_image_success',
      payload: { url: imageUrl, uploadingImage: isLoading },
    });
    previewImage(imageUrl);
  }

  const removeImage = (evt: MouseEvent<HTMLSpanElement | MouseEvent>) => {
    const formData = new FormData();
    formData.delete('image');
    dispatch({ type: 'remove_image', payload: { uploadingImage: isLoading } });
  };

  const previewImage = (imageUrl: string) => {
    if (imageUrl) {
      dispatch({
        type: 'preview_image',
        payload: { imageView: imageUrl, uploadingImage: isLoading },
      });
    } else {
      dispatch({
        type: 'uploading_image',
        payload: { uploadingImage: isLoading },
      });
    }
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const uploadLabel = insertionImageUrls ? 'Change' : 'Add a cover image';

  return (
    <div className={classes.UploadCoverImage}>
      {uploadErrorMessage && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={uploadErrorMessage}
        />
      )}
      {!uploadingImage && imageView && (
        <div className={classes.coverImage}>
          <Image
            className={classes.coverImage}
            src={`${imageView}`}
            width={250}
            height={105}
            layout="intrinsic"
            objectFit="scale-down"
            alt={'Post cover'}
          />
        </div>
      )}
      <div className={classes.buttonBox}>
        <MUIButton variant="outlined" color="secondary" component="label">
          {isLoading && (
            <div className={classes.SpinnerBox}>
              <CircularProgress
                className={classes.Spinner}
                color="primary"
                size={20}
                thickness={3}
              />
              {' Uploading'}
            </div>
          )}
          {!isLoading && uploadLabel}
          <input
            accept="image/*"
            type="file"
            value=""
            hidden
            name="image"
            onChange={handleChange}
            data-max-file-size-mb="25"
          />
        </MUIButton>
        {insertionImageUrls && !uploadingImage && (
          <Button
            className={classes.removeButton}
            onClick={removeImage}
            variant="text"
            color="secondary"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadCoverImage;
