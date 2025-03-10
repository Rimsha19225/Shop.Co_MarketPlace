import { defineType } from "sanity"

export default defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: "createdAt",
        title: "Date & Time",
        type: "datetime",
      },
    ],
  });
  