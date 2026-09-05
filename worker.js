export default { fetch(request, env) { return Response.json({ version: "broken-4", installation: env.INSTALLATION_MARKER }); } };
