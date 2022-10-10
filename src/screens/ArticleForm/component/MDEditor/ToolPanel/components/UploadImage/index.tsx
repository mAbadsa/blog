import { FC, useReducer, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import IconButton from '@material-ui/core/IconButton';
import { useMutation } from 'react-query';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';
import { ActionType, StateType } from '../../../../../../../types/ArticleForm';
import { uploadImage } from '../../../../../../../services/ArticleForm';

const UploadImageReducer = (state: StateType, actions: ActionType) => {
  const { type, payload } = actions;
  switch (type) {
    case 'uploading_image':
      console.log('payload', payload);
      return {
        ...state,
        uploadError: false,
        uploadErrorMessage: null,
        // uploadingImage: payload.uploadingImage,
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

    default:
      return state;
  }
};

const UploadImage: FC<{
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setRef: (ref: React.RefObject<HTMLTextAreaElement>) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}> = ({ setImageUrl, setRef, textareaRef }) => {
  const [state, dispatch] = useReducer(UploadImageReducer, {
    uploadError: false,
    uploadErrorMessage: null,
    uploadingImage: false,
    insertionImageUrls: '',
  });

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (imgData: string | ArrayBuffer | null) => uploadImage({ axios })(imgData),
    {
      onSuccess: async (data: AxiosResponse) => {
        console.log(data);
        handleUploadImageSucess(data.data.imageUrl);
        setImageUrl(`![Image description](${data.data.imageUrl})`);
      },
      onError: async (data: AxiosResponse) => {
        console.log(data);
        dispatch({
          type: 'upload_image_error',
          payload: {
            uploadError: true,
            errorMessage: data.data.message,
          },
        });
      },
    },
  );

  function handleUploadImageSucess<T extends string>(imageUrl: T) {
    dispatch({
      type: 'upload_image_success',
      payload: { url: imageUrl, uploadingImage: isLoading },
    });
    setRef(textareaRef);
    console.log(insertionImageUrls);
  }

  const { uploadError, uploadErrorMessage, uploadingImage, insertionImageUrls } = state;

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

  return (
    <IconButton color="secondary" component="label">
      <SVGIcons.UploadImageIcon />
      <input
        accept="image/*"
        type="file"
        value=""
        hidden
        name="image"
        onChange={handleChange}
        data-max-file-size-mb="25"
      />
    </IconButton>
  );
};

export default UploadImage;
