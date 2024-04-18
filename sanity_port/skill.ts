import { Rule } from "postcss";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
  {
        name: 'title',
        title: 'Title',
        description: "Title of the skill",
        type: 'string',
    },
  {
        name: 'progress',
        title: 'Progress',
        type: 'number',
        description: "Progrss of a skill from 0 to 100%",
        //validation: (Rule) => Rule.min(0),max(100),
   },
   {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
            },
        },
    ],
  }
  