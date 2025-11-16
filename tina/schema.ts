import type { Schema } from "tinacms";

const schema: Schema = {
  collections: [
    {
      name: "profile",
      label: "Profile",
      path: "content",
      format: "json",
      match: {
        include: "profile"
      },
      fields: [
        { type: "string", name: "name", label: "Name" },
        { type: "string", name: "headline", label: "Headline" },
        { type: "string", name: "location", label: "Location" },
        {
          type: "string",
          name: "shortBio",
          label: "Short bio",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "longBio",
          label: "Long bio",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "links",
          label: "Links",
          fields: [
            { type: "string", name: "linkedin", label: "LinkedIn" },
            { type: "string", name: "email", label: "Email" }
          ]
        }
      ]
    },
    {
      name: "experience",
      label: "Experience",
      path: "content",
      format: "json",
      match: {
        include: "experience"
      },
      fields: [
        {
          type: "object",
          name: "items",
          label: "Entries",
          list: true,
          fields: [
            { type: "string", name: "company", label: "Company" },
            { type: "string", name: "role", label: "Role" },
            { type: "string", name: "period", label: "Period" },
            { type: "string", name: "location", label: "Location" },
            {
              type: "string",
              name: "highlights",
              label: "Highlights",
              list: true,
              ui: { component: "textarea" }
            }
          ]
        }
      ]
    },
    {
      name: "talks",
      label: "Talks",
      path: "content",
      format: "json",
      match: {
        include: "talks"
      },
      fields: [
        {
          type: "object",
          name: "talks",
          label: "Talks",
          list: true,
          fields: [
            { type: "string", name: "id", label: "ID" },
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "event", label: "Event" },
            { type: "string", name: "location", label: "Location" },
            { type: "number", name: "year", label: "Year" },
            { type: "string", name: "type", label: "Type" },
            {
              type: "object",
              name: "links",
              label: "Links",
              fields: [
                { type: "string", name: "video", label: "Video URL" },
                { type: "string", name: "slides", label: "Slides URL" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default schema;
