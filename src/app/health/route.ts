export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { ok: true, service: "1gb.lol" },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  );
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "cache-control": "no-store",
    },
  });
}
