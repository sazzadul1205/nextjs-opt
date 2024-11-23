export async function GET() {
  return Response.json(Comments, {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}

export async function POST(request) {
  const newComments = await request.json();
  Comments.push({
    id: Comments.length + 1,
    text: newComments.text,
  });
  return Response.json({
    message: "New Comment Added",
    Comments,
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
