export default { fetch(request, env) { return Response.json({ version: "stable-1", installation: env.INSTALLATION_MARKER }); } };
