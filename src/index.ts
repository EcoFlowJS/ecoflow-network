import { ModuleManifest } from "@ecoflow/types";

const networkManifest: () => ModuleManifest = () => ({
  name: "Network",
  specs: [
    {
      name: "Get",
      type: "Middleware",
      inputs: [
        {
          name: "urlEndpoint",
          type: "String",
          label: "URI Endpoint",
          required: true,
          hint: 'To pass variables to the endpoint use ":variable".\n Must be a object with the key as name and the value as value.',
        },
      ],
      controller: "getController",
    },
    {
      name: "Post",
      type: "Middleware",
      inputs: [
        {
          name: "urlEndpoint",
          type: "String",
          label: "URI Endpoint",
          required: true,
          hint: 'To pass variables to the endpoint use ":variable".\n Must be a object with the key as name and the value as value.\n payload.msg.endpoint',
        },
        {
          name: "bupassValue",
          type: "Checkbox",
          label: "Bypass through payload",
        },
        {
          name: "postValue",
          type: "Code",
          label: "Post Value",
          codeLanguage: "json",
          hint: "Must be a object containing data.\n payload.msg.value",
          defaultValue: "{}",
        },
      ],
      controller: "postController",
    },
    {
      name: "Put",
      type: "Middleware",
      inputs: [
        {
          name: "urlEndpoint",
          type: "String",
          label: "URI Endpoint",
          required: true,
          hint: 'To pass variables to the endpoint use ":variable".\n Must be a object with the key as name and the value as value.\n payload.msg.endpoint',
        },
        {
          name: "bupassValue",
          type: "Checkbox",
          label: "Bypass through payload",
        },
        {
          name: "putValue",
          type: "Code",
          label: "Put Value",
          codeLanguage: "json",
          hint: "Must be a object containing data.\n payload.msg.value",
          defaultValue: "{}",
        },
      ],
      controller: "putController",
    },
    {
      name: "Patch",
      type: "Middleware",
      inputs: [
        {
          name: "urlEndpoint",
          type: "String",
          label: "URI Endpoint",
          required: true,
          hint: 'To pass variables to the endpoint use ":variable".\n Must be a object with the key as name and the value as value.\n payload.msg.endpoint',
        },
        {
          name: "bupassValue",
          type: "Checkbox",
          label: "Bypass through payload",
        },
        {
          name: "patchValue",
          type: "Code",
          label: "Put Value",
          codeLanguage: "json",
          hint: "Must be a object containing data.\n payload.msg.value",
          defaultValue: "{}",
        },
      ],
      controller: "patchController",
    },
    {
      name: "Delete",
      type: "Middleware",
      inputs: [
        {
          name: "urlEndpoint",
          type: "String",
          label: "URI Endpoint",
          required: true,
          hint: 'To pass variables to the endpoint use ":variable".\n Must be a object with the key as name and the value as value.',
        },
      ],
      controller: "deleteController",
    },
  ],
});

export default networkManifest;
