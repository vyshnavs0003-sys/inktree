const treeData = [
  {
    id: 1,
    type: "container",
    title: "Module 1",

    content: {
      type: "richText",
      value: "<p>Module 1 Content</p>",
    },

    isExpanded: true,

    children: [
      {
        id: 2,
        type: "leaf",
        title: "Introduction",

        content: {
          type: "richText",
          value: "<p>lorem jbjwe webbiw wuen iuwuebdiwjwejb iuewijb bbwiebi bwi iw kwebb ewkeghweb buw jwhew ie ibe ffwe ef wiefbwe fie wieff vwe ie erbe gwi dowehr w edjw fje  we dc ewe we fwief wef</p>",
        },
      },

      {
        id: 3,
        type: "container",
        title: "Chapter 1",

        content: {
          type: "richText",
          value: "<p>Chapter 1 Content</p>",
        },

        isExpanded: true,

        children: [
          {
            id: 4,
            type: "leaf",
            title: "Lesson Content",

            content: {
              type: "richText",
              value: "<p>Lesson Content</p>",
            },
          },
        ],
      },
    ],
  },
];

export default treeData;