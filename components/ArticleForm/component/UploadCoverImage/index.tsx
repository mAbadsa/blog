import { FC, useState, useReducer, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import { useMutation } from "react-query";
import axios, { AxiosResponse } from "axios";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";

const uploadImage = async (imgData: string | ArrayBuffer | null) => {
  let response: AxiosResponse = await axios.post(
    "api/article/cover-image",
    imgData
  );

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
  action: { type: string; payload?: any }
) {
  const { type, payload } = action;

  switch (type) {
    case "uploading_image":
      console.log("payload", payload.uploadingImage);
      return {
        ...state,
        uploadError: false,
        uploadErrorMessage: null,
        uploadingImage: payload.uploadingImage,
      };

    case "upload_image_error":
      return {
        ...state,
        insertionImageUrls: "",
        uploadError: true,
        uploadErrorMessage: payload.errorMessage,
        uploadingImage: false,
      };

    case "upload_image_success":
      return {
        ...state,
        insertionImageUrls: payload.name,
        uploadingImage: payload.uploadingImage,
      };
    case "preview_image":
      return {
        ...state,
        imageView: payload.imageView,
        uploadingImage: payload.uploadingImage,
      };
    case "remove_image":
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
  defaultCoverImage: string | ArrayBuffer | null;
}> = ({ articleCoverImage, defaultCoverImage }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { data, isLoading, isError, isSuccess, mutate } = useMutation(
    (imgData: string | ArrayBuffer | null) => uploadImage(imgData),
    {
      onSuccess: async (data: unknown) => {
        console.log({ data });
      },
    }
  );
  console.log({ isLoading });

  const [state, dispatch] = useReducer(coverImageUploaderReducer, {
    uploadError: false,
    uploadErrorMessage: null,
    uploadingImage: isLoading,
    insertionImageUrls: "",
    imageView: defaultCoverImage || "",
  });

  const {
    uploadError,
    uploadErrorMessage,
    uploadingImage,
    insertionImageUrls,
    imageView,
  } = state;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || evt.target.files.length === 0) return;
    const image = evt.target.files[0] || insertionImageUrls;
    dispatch({
      type: "uploading_image",
      payload: { uploadingImage: isLoading },
    });

    const reader = new FileReader();

    // console.log(imgData.image);
    reader.readAsDataURL(image);

    reader.onload = async () => {
      mutate(reader.result);
    };
    if (!isLoading) {
      console.log(data);
      handleUploadImageSucess(image);
    }
  };

  function handleUploadImageSucess<T extends File>(payload: T) {
    dispatch({
      type: "upload_image_success",
      payload: { name: payload.name, uploadingImage: isLoading },
    });
    previewImage({ imageFile: payload });
  }

  const removeImage = (evt: MouseEvent<HTMLSpanElement | MouseEvent>) => {
    const formData = new FormData();
    // if (image) {
    formData.delete("image");
    dispatch({ type: "remove_image", payload: { uploadingImage: isLoading } });
    // }
  };

  const previewImage = <T extends File>(payload: { imageFile: File }) => {
    const reader = new FileReader();
    if (payload) {
      reader.readAsDataURL(payload.imageFile);
      reader.onload = () => {
        dispatch({
          type: "preview_image",
          payload: { imageView: reader.result, uploadingImage: isLoading },
        });
      };
      reader.onloadstart = () => {
        dispatch({
          type: "uploading_image",
          payload: { uploadingImage: isLoading },
        });
      };
      reader.onloadend = () => {
        dispatch({
          type: "preview_image",
          payload: { imageView: reader.result, uploadingImage: isLoading },
        });
        articleCoverImage(reader.result);
      };
    }
  };

  const uploadLabel = insertionImageUrls ? "Change" : "Add a cover image";

  return (
    <div className={classes.UploadCoverImage}>
      {!isLoading && imageView && (
        <div className={classes.coverImage}>
          <Image
            className={classes.coverImage}
            src={`${imageView}`}
            width={250}
            height={105}
            layout="intrinsic"
            objectFit="cover"
            alt={"Post cover"}
          />
        </div>
      )}
      <div className={classes.buttonBox}>
        <Button
          className={classes.selectButton}
          variant="contained"
          component="label"
        >
          {isLoading && (
            <div className={classes.SpinnerBox}>
              <CircularProgress
                className={classes.Spinner}
                color="primary"
                size={20}
                thickness={3}
              />
              {" Uploading"}
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
        </Button>
        {insertionImageUrls && !isLoading && (
          <Button className={classes.removeButton} onClick={removeImage}>
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadCoverImage;
