import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../../config/envconfig";
const RTE = ({ name, control, label, defaultValue = "" }) => {
  console.log(" rte called");
  
  try {
    console.log("try block");
    return (
      <div className="w-full">
        {label && <label className="inline-block mb-1 pr-1">{label}</label>}

        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              initialValue={defaultValue}
              apiKey= {config.tinymcekey}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onchange}
            />
          )}
        />
      </div>
    );
  } catch (error) {
    console.log("catch block");
    return <p className="text-2xl font-bold text-red-600">{error}</p>;
  }
};

export default RTE;
