export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = Comments.findIndex((c) => c.id === parseInt(params.id));

  Comments[index] = {
    text: body.text,
  };
  return Response.json({
    Message: "Comments Update",
    Comments,
  });
}

export async function DELETE(request, { params }) {
  const newComments = Comments.filter((c) => c.id !== parseInt(params.id));
  return Response.json({
    Message: "Comments Deleted",
    newComments,
  });
}

const Comments = [
  {
    id: 1,
    text: "comment 1",
  },
  {
    id: 2,
    text: "comment 2",
  },
  {
    id: 3,
    text: "comment 3",
  },
  {
    id: 4,
    text: "comment 4",
  },
  {
    id: 5,
    text: "comment 5",
  },
];
