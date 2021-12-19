import { FC, useState, useReducer, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";

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
      return {
        ...state,
        uploadError: false,
        uploadErrorMessage: null,
        uploadingImage: true,
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
        uploadingImage: false,
      };
    case "preview_image":
      return {
        ...state,
        imageView: payload.imageView,
        uploadingImage: false,
      };
    case "remove_image":
      return {
        ...state,
        insertionImageUrls: null,
        uploadingImage: false,
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

  const [state, dispatch] = useReducer(coverImageUploaderReducer, {
    uploadError: false,
    uploadErrorMessage: null,
    uploadingImage: false,
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

  console.log("insertionImageUrls", insertionImageUrls);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log("1::");
    if (!evt.target.files || evt.target.files.length === 0) return;
    console.log("2::", evt.target.files[0]);
    const image = evt.target.files[0] || insertionImageUrls;
    console.log("3::", image);
    dispatch({ type: "uploading_image" });
    const formData = new FormData();
    formData.append("image", image, image?.name);

    setTimeout(() => {
      console.log("timeout");
      console.log("image", image);
      handleUploadImageSucess(image);
    }, 1000);

    console.log("Upload");
  };

  function handleUploadImageSucess<T extends File>(payload: T) {
    console.log(payload.name);
    dispatch({
      type: "upload_image_success",
      payload: { name: payload.name },
    });
    previewImage({ imageFile: payload });
  }

  const removeImage = (evt: MouseEvent<HTMLSpanElement | MouseEvent>) => {
    const formData = new FormData();
    // if (image) {
    console.log(formData.get("image"));
    formData.delete("image");
    dispatch({ type: "remove_image" });
    // }
  };

  const previewImage = <T extends File>(payload: { imageFile: File }) => {
    const reader = new FileReader();
    console.log("previewImage");
    console.log({ payload });
    if (payload) {
      reader.readAsDataURL(payload.imageFile);
      reader.onload = () => {
        dispatch({
          type: "preview_image",
          payload: { imageView: reader.result },
        });
      };
      reader.onloadstart = () => {
        dispatch({ type: "uploading_image" });
      };
      reader.onloadend = () => {
        dispatch({
          type: "preview_image",
          payload: { imageView: reader.result },
        });
        console.log("Load End!", reader.result);
        articleCoverImage(reader.result);
      };
    }
    console.log("Result", reader.result);
  };

  const uploadLabel = insertionImageUrls ? "Change" : "Add a cover image";

  return (
    <div className={classes.UploadCoverImage}>
      {!uploadingImage && imageView && (
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
          {uploadingImage && (
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
          {!uploadingImage && uploadLabel}
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
        {insertionImageUrls && !uploadingImage && (
          <Button className={classes.removeButton} onClick={removeImage}>
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadCoverImage;
