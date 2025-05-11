function skillMember() {
  return {
    name: "skillMember",
    description: "Get the skill member",
    type: 1,
    options: [
      {
        name: "member",
        description: "The member to get the skill of",
        type: 6,
        required: true,
      },
    ],
  };
}