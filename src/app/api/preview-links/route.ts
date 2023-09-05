import { NextResponse } from 'next/server';

const corsInitOptions = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

const baseUrl = "http://localhost:3000"

export async function OPTIONS(request:Request) {
  return NextResponse.json(
    { success: true },
    corsInitOptions,
  );
}

const findUrlForItem = ({ item, itemType }:any) => {
  switch (itemType.attributes.api_key) {
    case 'post':
      return `/posts/${item.attributes.slug}`;
    default:
      return null;
  }
};

export async function POST(request:Request) {
  const requestBody = await request.json();
  const url = findUrlForItem(requestBody);

  if (!url) {
    return NextResponse.json({ previewLinks: [] }, corsInitOptions);
  }

  const previewLinks = [
    {
      label: 'Published version',
      url: `${baseUrl}${url}`,
    },
    {
      label: 'Draft version',
      url: `${baseUrl}/api/draft?redirect=${url}&secret=${
        process.env.NEXT_DATOCMS_PREVIEW_SECRET || 'MY_SECRET_TOKEN'
      }`,
    },
  ];

  return NextResponse.json({ previewLinks }, corsInitOptions);
};




